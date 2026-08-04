'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export interface BudgetCategory {
  id: string;
  department: string;
  allocated: number;
  spent: number;
  status: 'On Track' | 'Underutilized' | 'Overbudget' | 'Audited Flag';
}

export interface PoliticianAsset {
  id: string;
  name: string;
  role: string;
  declaredAssets: number;
  year2022Assets: number;
  year2026Assets: number;
  flaggedAnomalies: boolean;
  keyAssets: string[];
}

export interface PromiseItem {
  id: string;
  title: string;
  category: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Stalled' | 'Not Started';
  targetYear: number;
  budgetAllocated: string;
}

export interface KYCRecord {
  id: string;
  name: string;
  designation: string;
  nidNumber: string;
  taxClearanceYear: number;
  conflictDeclared: boolean;
  kycStatus: 'Verified' | 'Pending' | 'Flagged';
}

export interface ComplaintItem {
  id: string;
  subject: string;
  department: string;
  status: 'Open' | 'Under Investigation' | 'Resolved' | 'Escalated';
  upvotes: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Auto-table creation helper to guarantee Neon DB structure is ready
async function ensureTablesExist() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS budget_categories (
        id TEXT PRIMARY KEY,
        department TEXT UNIQUE NOT NULL,
        allocated NUMERIC NOT NULL,
        spent NUMERIC NOT NULL,
        status TEXT NOT NULL
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS politician_assets (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        declared_assets NUMERIC NOT NULL,
        year_2022_assets NUMERIC NOT NULL,
        year_2026_assets NUMERIC NOT NULL,
        flagged_anomalies BOOLEAN NOT NULL DEFAULT false
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS key_assets (
        id TEXT PRIMARY KEY,
        description TEXT NOT NULL,
        politician_id TEXT NOT NULL REFERENCES politician_assets(id) ON DELETE CASCADE
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS promise_items (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        progress INT NOT NULL DEFAULT 0,
        status TEXT NOT NULL,
        target_year INT NOT NULL,
        budget_allocated TEXT NOT NULL
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS kyc_records (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        designation TEXT NOT NULL,
        nid_number TEXT UNIQUE NOT NULL,
        tax_clearance_year INT NOT NULL,
        conflict_declared BOOLEAN NOT NULL DEFAULT false,
        kyc_status TEXT NOT NULL
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS complaint_items (
        id TEXT PRIMARY KEY,
        ticket_id TEXT UNIQUE NOT NULL,
        subject TEXT NOT NULL,
        department TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'Open',
        upvotes INT NOT NULL DEFAULT 1,
        date TEXT NOT NULL
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS faq_items (
        id TEXT PRIMARY KEY,
        question TEXT NOT NULL,
        answer TEXT NOT NULL
      );
    `;
  } catch (err) {
    console.error('Error ensuring Neon DB tables exist:', err);
  }
}

// -------------------------------------------------------------
// 1. BUDGET CATEGORY ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getBudgetData(): Promise<BudgetCategory[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT id, department, allocated::float, spent::float, status 
      FROM budget_categories 
      ORDER BY allocated DESC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      department: String(r.department),
      allocated: Number(r.allocated),
      spent: Number(r.spent),
      status: r.status as BudgetCategory['status'],
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getBudgetData):', err);
    return [];
  }
}

export async function createBudgetCategory(data: Omit<BudgetCategory, 'id'>) {
  await ensureTablesExist();
  const newId = `b-${Date.now()}`;
  await sql`
    INSERT INTO budget_categories (id, department, allocated, spent, status)
    VALUES (${newId}, ${data.department}, ${data.allocated}, ${data.spent}, ${data.status})
    ON CONFLICT (department) DO UPDATE 
    SET allocated = EXCLUDED.allocated, spent = EXCLUDED.spent, status = EXCLUDED.status
  `;
  revalidatePath('/budget');
  revalidatePath('/');
}

// -------------------------------------------------------------
// 2. POLITICIAN ASSETS ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getPoliticianAssets(): Promise<PoliticianAsset[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT 
        p.id, p.name, p.role, 
        p.declared_assets::float AS "declaredAssets",
        p.year_2022_assets::float AS "year2022Assets",
        p.year_2026_assets::float AS "year2026Assets",
        p.flagged_anomalies AS "flaggedAnomalies",
        COALESCE(ARRAY_AGG(k.description) FILTER (WHERE k.description IS NOT NULL), '{}') AS "keyAssets"
      FROM politician_assets p
      LEFT JOIN key_assets k ON p.id = k.politician_id
      GROUP BY p.id
      ORDER BY p.declared_assets DESC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      name: String(r.name),
      role: String(r.role),
      declaredAssets: Number(r.declaredAssets),
      year2022Assets: Number(r.year2022Assets),
      year2026Assets: Number(r.year2026Assets),
      flaggedAnomalies: Boolean(r.flaggedAnomalies),
      keyAssets: Array.isArray(r.keyAssets) ? r.keyAssets : [],
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getPoliticianAssets):', err);
    return [];
  }
}

// -------------------------------------------------------------
// 3. PROMISE TRACKER ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getPromisesData(): Promise<PromiseItem[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT id, title, category, progress, status, target_year AS "targetYear", budget_allocated AS "budgetAllocated"
      FROM promise_items
      ORDER BY progress DESC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      title: String(r.title),
      category: String(r.category),
      progress: Number(r.progress),
      status: r.status as PromiseItem['status'],
      targetYear: Number(r.targetYear),
      budgetAllocated: String(r.budgetAllocated),
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getPromisesData):', err);
    return [];
  }
}

// -------------------------------------------------------------
// 4. OFFICIAL KYC REGISTER ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getKYCRecords(): Promise<KYCRecord[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT id, name, designation, nid_number AS "nidNumber", tax_clearance_year AS "taxClearanceYear", conflict_declared AS "conflictDeclared", kyc_status AS "kycStatus"
      FROM kyc_records
      ORDER BY name ASC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      name: String(r.name),
      designation: String(r.designation),
      nidNumber: String(r.nidNumber),
      taxClearanceYear: Number(r.taxClearanceYear),
      conflictDeclared: Boolean(r.conflictDeclared),
      kycStatus: r.kycStatus as KYCRecord['kycStatus'],
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getKYCRecords):', err);
    return [];
  }
}

// -------------------------------------------------------------
// 5. PUBLIC COMPLAINTS HUB ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getComplaintsData(): Promise<ComplaintItem[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT ticket_id AS id, subject, department, status, upvotes, date::text
      FROM complaint_items
      ORDER BY upvotes DESC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      subject: String(r.subject),
      department: String(r.department),
      status: r.status as ComplaintItem['status'],
      upvotes: Number(r.upvotes),
      date: String(r.date),
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getComplaintsData):', err);
    return [];
  }
}

export async function upvoteComplaint(ticketId: string) {
  await ensureTablesExist();
  const rows = await sql`
    UPDATE complaint_items 
    SET upvotes = upvotes + 1 
    WHERE ticket_id = ${ticketId}
    RETURNING ticket_id AS id, upvotes
  `;
  revalidatePath('/complaints');
  revalidatePath('/');
  if (rows && rows.length > 0) {
    return { id: String(rows[0].id), upvotes: Number(rows[0].upvotes) };
  }
  return { id: ticketId, upvotes: 1 };
}

export async function submitComplaint(newComplaint: {
  subject: string;
  department: string;
}): Promise<ComplaintItem> {
  await ensureTablesExist();
  const ticketId = `GRV-${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date().toISOString().split('T')[0];
  const pkId = `c-${Date.now()}`;

  await sql`
    INSERT INTO complaint_items (id, ticket_id, subject, department, status, upvotes, date)
    VALUES (${pkId}, ${ticketId}, ${newComplaint.subject}, ${newComplaint.department}, 'Open', 1, ${today})
  `;

  revalidatePath('/complaints');
  revalidatePath('/');

  return {
    id: ticketId,
    subject: newComplaint.subject,
    department: newComplaint.department,
    status: 'Open',
    upvotes: 1,
    date: today,
  };
}

// -------------------------------------------------------------
// 6. FAQ KNOWLEDGE BASE ACTIONS (NEON DBMS EXCLUSIVE)
// -------------------------------------------------------------
export async function getFAQData(): Promise<FAQItem[]> {
  try {
    await ensureTablesExist();
    const rows = await sql`
      SELECT id, question, answer
      FROM faq_items
      ORDER BY id ASC
    `;
    return (rows || []).map((r: any) => ({
      id: String(r.id),
      question: String(r.question),
      answer: String(r.answer),
    }));
  } catch (err) {
    console.error('Neon DBMS Error (getFAQData):', err);
    return [];
  }
}
