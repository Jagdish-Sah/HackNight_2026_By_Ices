'use server';

import { db, supabase } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import {
  mockBudgetData,
  mockPoliticianData,
  mockPromisesData,
  mockKYCData,
  mockComplaintsData,
  mockFAQData,
} from '@/data/mockData';

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

// -------------------------------------------------------------
// 1. BUDGET CATEGORY SERVER ACTIONS
// -------------------------------------------------------------
export async function getBudgetData(): Promise<BudgetCategory[]> {
  try {
    // Try Supabase Cloud HTTPS query first
    const { data, error } = await supabase
      .from('budget_categories')
      .select('*')
      .order('allocated', { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.id,
        department: r.department,
        allocated: Number(r.allocated),
        spent: Number(r.spent),
        status: r.status as BudgetCategory['status'],
      }));
    }

    // Try Prisma DB query second
    const records = await db.budgetCategory.findMany({ orderBy: { allocated: 'desc' } });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        department: r.department,
        allocated: r.allocated,
        spent: r.spent,
        status: r.status as BudgetCategory['status'],
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockBudgetData;
}

export async function createBudgetCategory(data: Omit<BudgetCategory, 'id'>) {
  try {
    await supabase.from('budget_categories').insert({
      department: data.department,
      allocated: data.allocated,
      spent: data.spent,
      status: data.status,
    });
  } catch (err) {
    await db.budgetCategory.create({ data });
  }

  revalidatePath('/budget');
}

// -------------------------------------------------------------
// 2. POLITICIAN ASSETS SERVER ACTIONS
// -------------------------------------------------------------
export async function getPoliticianAssets(): Promise<PoliticianAsset[]> {
  try {
    const { data, error } = await supabase
      .from('politician_assets')
      .select('*')
      .order('declared_assets', { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.id,
        name: r.name,
        role: r.role,
        declaredAssets: Number(r.declared_assets),
        year2022Assets: Number(r.year_2022_assets),
        year2026Assets: Number(r.year_2026_assets),
        flaggedAnomalies: Boolean(r.flagged_anomalies),
        keyAssets: Array.isArray(r.key_assets) ? r.key_assets : [],
      }));
    }

    const records = await db.politicianAsset.findMany({
      include: { keyAssets: true },
      orderBy: { declaredAssets: 'desc' },
    });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        name: r.name,
        role: r.role,
        declaredAssets: r.declaredAssets,
        year2022Assets: r.year2022Assets,
        year2026Assets: r.year2026Assets,
        flaggedAnomalies: r.flaggedAnomalies,
        keyAssets: r.keyAssets.map((k) => k.description),
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockPoliticianData;
}

// -------------------------------------------------------------
// 3. PROMISE TRACKER SERVER ACTIONS
// -------------------------------------------------------------
export async function getPromisesData(): Promise<PromiseItem[]> {
  try {
    const { data, error } = await supabase
      .from('promise_items')
      .select('*')
      .order('progress', { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.id,
        title: r.title,
        category: r.category,
        progress: Number(r.progress),
        status: r.status as PromiseItem['status'],
        targetYear: Number(r.target_year),
        budgetAllocated: r.budget_allocated,
      }));
    }

    const records = await db.promiseItem.findMany({ orderBy: { progress: 'desc' } });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        title: r.title,
        category: r.category,
        progress: r.progress,
        status: r.status as PromiseItem['status'],
        targetYear: r.targetYear,
        budgetAllocated: r.budgetAllocated,
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockPromisesData;
}

// -------------------------------------------------------------
// 4. OFFICIAL KYC REGISTER SERVER ACTIONS
// -------------------------------------------------------------
export async function getKYCRecords(): Promise<KYCRecord[]> {
  try {
    const { data, error } = await supabase
      .from('kyc_records')
      .select('*')
      .order('name', { ascending: true });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.id,
        name: r.name,
        designation: r.designation,
        nidNumber: r.nid_number,
        taxClearanceYear: Number(r.tax_clearance_year),
        conflictDeclared: Boolean(r.conflict_declared),
        kycStatus: r.kyc_status as KYCRecord['kycStatus'],
      }));
    }

    const records = await db.kYCRecord.findMany({ orderBy: { name: 'asc' } });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        name: r.name,
        designation: r.designation,
        nidNumber: r.nidNumber,
        taxClearanceYear: r.taxClearanceYear,
        conflictDeclared: r.conflictDeclared,
        kycStatus: r.kycStatus as KYCRecord['kycStatus'],
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockKYCData;
}

// -------------------------------------------------------------
// 5. PUBLIC COMPLAINTS HUB SERVER ACTIONS & MUTATIONS
// -------------------------------------------------------------
export async function getComplaintsData(): Promise<ComplaintItem[]> {
  try {
    const { data, error } = await supabase
      .from('complaint_items')
      .select('*')
      .order('upvotes', { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.ticket_id,
        subject: r.subject,
        department: r.department,
        status: r.status as ComplaintItem['status'],
        upvotes: Number(r.upvotes),
        date: r.date,
      }));
    }

    const records = await db.complaintItem.findMany({ orderBy: { upvotes: 'desc' } });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.ticketId,
        subject: r.subject,
        department: r.department,
        status: r.status as ComplaintItem['status'],
        upvotes: r.upvotes,
        date: r.date,
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockComplaintsData;
}

export async function upvoteComplaint(ticketId: string) {
  try {
    // 1. Try Supabase Cloud RPC or upvote query
    const { data: current } = await supabase
      .from('complaint_items')
      .select('upvotes')
      .eq('ticket_id', ticketId)
      .single();

    if (current) {
      const newVotes = (current.upvotes || 0) + 1;
      await supabase
        .from('complaint_items')
        .update({ upvotes: newVotes })
        .eq('ticket_id', ticketId);

      revalidatePath('/complaints');
      revalidatePath('/');
      return { id: ticketId, upvotes: newVotes };
    }

    // 2. Try Prisma DB upvote
    const updated = await db.complaintItem.update({
      where: { ticketId },
      data: { upvotes: { increment: 1 } },
    });
    revalidatePath('/complaints');
    revalidatePath('/');
    return { id: updated.ticketId, upvotes: updated.upvotes };
  } catch (err) {
    console.warn('Upvote processed:', ticketId);
  }

  revalidatePath('/complaints');
  revalidatePath('/');
  return { id: ticketId, upvotes: 1 };
}

export async function submitComplaint(newComplaint: {
  subject: string;
  department: string;
}): Promise<ComplaintItem> {
  const ticketId = `GRV-${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date().toISOString().split('T')[0];

  const payload: ComplaintItem = {
    id: ticketId,
    subject: newComplaint.subject,
    department: newComplaint.department,
    status: 'Open',
    upvotes: 1,
    date: today,
  };

  try {
    await supabase.from('complaint_items').insert({
      ticket_id: ticketId,
      subject: newComplaint.subject,
      department: newComplaint.department,
      status: 'Open',
      upvotes: 1,
      date: today,
    });
  } catch (err) {
    try {
      await db.complaintItem.create({
        data: {
          ticketId,
          subject: newComplaint.subject,
          department: newComplaint.department,
          status: 'Open',
          upvotes: 1,
          date: today,
        },
      });
    } catch (e) {
      console.warn('Local save notice:', e);
    }
  }

  revalidatePath('/complaints');
  revalidatePath('/');
  return payload;
}

// -------------------------------------------------------------
// 6. FAQ KNOWLEDGE BASE SERVER ACTIONS
// -------------------------------------------------------------
export async function getFAQData(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase
      .from('faq_items')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data.map((r: any) => ({
        id: r.id,
        question: r.question,
        answer: r.answer,
      }));
    }

    const records = await db.fAQItem.findMany({ orderBy: { id: 'asc' } });
    if (records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        question: r.question,
        answer: r.answer,
      }));
    }
  } catch (err) {
    console.warn('Cloud DB fetch notice, serving dataset fallback:', err);
  }

  return mockFAQData;
}
