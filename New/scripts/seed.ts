import { sql } from '../lib/db';

const initialBudgetData = [
  { id: 'b-1', department: 'Roads & Infrastructure', allocated: 450, spent: 390, status: 'On Track' },
  { id: 'b-2', department: 'Public Health Services', allocated: 280, spent: 120, status: 'Underutilized' },
  { id: 'b-3', department: 'Education & Schools', allocated: 310, spent: 305, status: 'On Track' },
  { id: 'b-4', department: 'Sanitation & Waste Management', allocated: 150, spent: 185, status: 'Overbudget' },
  { id: 'b-5', department: 'Digital Governance & IT', allocated: 90, spent: 25, status: 'Audited Flag' },
  { id: 'b-6', department: 'Water Resources & Sewage', allocated: 220, spent: 210, status: 'On Track' },
];

const initialPoliticianData = [
  { id: 'p-1', name: 'Rajesh Sharma', role: 'Minister of Physical Infrastructure', declaredAssets: 45.2, year2022Assets: 12.0, year2026Assets: 45.2, flaggedAnomalies: true, keyAssets: ['3 Land Plots in Ward 4', 'Commercial Complex', 'Foreign Currency Deposits'] },
  { id: 'p-2', name: 'Sita Adhikari', role: 'Mayor - Pokhara Metropolitan', declaredAssets: 18.5, year2022Assets: 14.2, year2026Assets: 18.5, flaggedAnomalies: false, keyAssets: ['Residential House', 'Agricultural Land', 'Fixed Bank Deposits'] },
  { id: 'p-3', name: 'Bikram Thapa', role: 'Chief of Urban Development', declaredAssets: 32.8, year2022Assets: 8.5, year2026Assets: 32.8, flaggedAnomalies: true, keyAssets: ['4 Luxury Vehicles', 'Share Holdings in Hydropower', 'Gold 400g'] },
  { id: 'p-4', name: 'Anita Shrestha', role: 'Education Department Head', declaredAssets: 12.1, year2022Assets: 10.0, year2026Assets: 12.1, flaggedAnomalies: false, keyAssets: ['Family Home', 'Savings Account'] },
];

const initialPromisesData = [
  { id: 'pr-1', title: 'Smart Traffic Management System', category: 'Infrastructure', progress: 75, status: 'In Progress', targetYear: 2026, budgetAllocated: '$4.2M' },
  { id: 'pr-2', title: '100% Digital Ward Citizen Services', category: 'Technology', progress: 100, status: 'Completed', targetYear: 2025, budgetAllocated: '$1.8M' },
  { id: 'pr-3', title: 'Clean Drinking Water Pipe Expansion', category: 'Public Health', progress: 30, status: 'Stalled', targetYear: 2027, budgetAllocated: '$12.0M' },
  { id: 'pr-4', title: 'Municipal Waste Recycling Plant', category: 'Environment', progress: 10, status: 'Not Started', targetYear: 2028, budgetAllocated: '$8.5M' },
  { id: 'pr-5', title: 'Public School Computer Lab Upgrade', category: 'Education', progress: 60, status: 'In Progress', targetYear: 2026, budgetAllocated: '$2.5M' },
  { id: 'pr-6', title: 'Solar Powered Public Street Lighting', category: 'Energy', progress: 100, status: 'Completed', targetYear: 2025, budgetAllocated: '$3.1M' },
];

const initialKYCData = [
  { id: 'k-1', name: 'Rajesh Sharma', designation: 'Minister of Physical Infrastructure', nidNumber: 'NID-9942-8812', taxClearanceYear: 2025, conflictDeclared: true, kycStatus: 'Flagged' },
  { id: 'k-2', name: 'Sita Adhikari', designation: 'Mayor - Pokhara Metropolitan', nidNumber: 'NID-4410-9921', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
  { id: 'k-3', name: 'Bikram Thapa', designation: 'Chief of Urban Development', nidNumber: 'NID-7731-0045', taxClearanceYear: 2024, conflictDeclared: true, kycStatus: 'Flagged' },
  { id: 'k-4', name: 'Anita Shrestha', designation: 'Education Department Head', nidNumber: 'NID-1102-3389', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
  { id: 'k-5', name: 'Ramesh Karki', designation: 'Health Services Director', nidNumber: 'NID-8823-1142', taxClearanceYear: 2025, conflictDeclared: false, kycStatus: 'Pending' },
  { id: 'k-6', name: 'Pooja Gurung', designation: 'IT & Digital Services Lead', nidNumber: 'NID-3391-7754', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
];

const initialComplaintsData = [
  { id: 'GRV-1001', subject: 'Unrepaired Potholes on Main Ring Road', department: 'Roads & Infrastructure', status: 'Under Investigation', upvotes: 142, date: '2026-07-28' },
  { id: 'GRV-1002', subject: 'Delayed Birth Certificate Issuance at Ward 3', department: 'Digital Governance & IT', status: 'Open', upvotes: 89, date: '2026-08-01' },
  { id: 'GRV-1003', subject: 'Contaminated Water Supply in Sector 4', department: 'Water Resources & Sewage', status: 'Escalated', upvotes: 215, date: '2026-07-25' },
  { id: 'GRV-1004', subject: 'Illegal Garbage Dumping Near Public School', department: 'Sanitation & Waste Management', status: 'Resolved', upvotes: 67, date: '2026-07-15' },
  { id: 'GRV-1005', subject: 'Lack of Street Lights on Hospital Road', department: 'Roads & Infrastructure', status: 'Open', upvotes: 54, date: '2026-08-03' },
];

const initialFAQData = [
  { id: 'faq-1', question: 'What is GovTrace Hub?', answer: 'GovTrace Hub is a transparent civic portal tracking municipal budgets, public official asset disclosures, manifesto progress, KYC compliance, and citizen grievances.' },
  { id: 'faq-2', question: 'How is municipal budget data sourced and updated?', answer: 'Budget data is fetched directly from government financial portals, treasury audits, and published budget allocation reports, updated quarterly.' },
  { id: 'faq-3', question: 'How can citizens file a complaint or grievance?', answer: 'Citizens can navigate to the Complaints Hub page and click "File Grievance" to submit a ticket. Other citizens can upvote existing grievances to prioritize urgent issues.' },
  { id: 'faq-4', question: 'What does "Flagged" status mean in Central Official KYC?', answer: 'A "Flagged" KYC status indicates potential discrepancies in tax clearance records, undeclared conflicts of interest, or unexplained wealth growth between asset filing periods.' },
  { id: 'faq-5', question: 'How are Election Manifesto Promises tracked?', answer: 'Manifesto promises are monitored through independent project milestone verification, procurement logs, and physical infrastructure inspection reports.' },
];

export async function seedNeonDatabase() {
  console.log('🚀 Starting GovTrace Hub Neon Serverless PostgreSQL Seeding...');

  // 1. Create Tables if they don't exist
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

  // 2. Seed Budget Categories
  console.log('Seeding Budget Categories to Neon DB...');
  for (const item of initialBudgetData) {
    await sql`
      INSERT INTO budget_categories (id, department, allocated, spent, status)
      VALUES (${item.id}, ${item.department}, ${item.allocated}, ${item.spent}, ${item.status})
      ON CONFLICT (department) DO UPDATE 
      SET allocated = EXCLUDED.allocated, spent = EXCLUDED.spent, status = EXCLUDED.status;
    `;
  }

  // 3. Seed Politician Assets
  console.log('Seeding Politician Assets to Neon DB...');
  for (const pol of initialPoliticianData) {
    await sql`
      INSERT INTO politician_assets (id, name, role, declared_assets, year_2022_assets, year_2026_assets, flagged_anomalies)
      VALUES (${pol.id}, ${pol.name}, ${pol.role}, ${pol.declaredAssets}, ${pol.year2022Assets}, ${pol.year2026Assets}, ${pol.flaggedAnomalies})
      ON CONFLICT (id) DO UPDATE 
      SET name = EXCLUDED.name, role = EXCLUDED.role, declared_assets = EXCLUDED.declared_assets,
          year_2022_assets = EXCLUDED.year_2022_assets, year_2026_assets = EXCLUDED.year_2026_assets,
          flagged_anomalies = EXCLUDED.flagged_anomalies;
    `;

    // Seed Key Assets
    await sql`DELETE FROM key_assets WHERE politician_id = ${pol.id};`;
    for (let i = 0; i < pol.keyAssets.length; i++) {
      const kaId = `ka-${pol.id}-${i}`;
      await sql`
        INSERT INTO key_assets (id, description, politician_id)
        VALUES (${kaId}, ${pol.keyAssets[i]}, ${pol.id});
      `;
    }
  }

  // 4. Seed Promise Items
  console.log('Seeding Manifesto Promises to Neon DB...');
  for (const p of initialPromisesData) {
    await sql`
      INSERT INTO promise_items (id, title, category, progress, status, target_year, budget_allocated)
      VALUES (${p.id}, ${p.title}, ${p.category}, ${p.progress}, ${p.status}, ${p.targetYear}, ${p.budgetAllocated})
      ON CONFLICT (id) DO UPDATE 
      SET title = EXCLUDED.title, category = EXCLUDED.category, progress = EXCLUDED.progress,
          status = EXCLUDED.status, target_year = EXCLUDED.target_year, budget_allocated = EXCLUDED.budget_allocated;
    `;
  }

  // 5. Seed KYC Records
  console.log('Seeding Official KYC Records to Neon DB...');
  for (const k of initialKYCData) {
    await sql`
      INSERT INTO kyc_records (id, name, designation, nid_number, tax_clearance_year, conflict_declared, kyc_status)
      VALUES (${k.id}, ${k.name}, ${k.designation}, ${k.nidNumber}, ${k.taxClearanceYear}, ${k.conflictDeclared}, ${k.kycStatus})
      ON CONFLICT (nid_number) DO UPDATE 
      SET name = EXCLUDED.name, designation = EXCLUDED.designation, tax_clearance_year = EXCLUDED.tax_clearance_year,
          conflict_declared = EXCLUDED.conflict_declared, kyc_status = EXCLUDED.kyc_status;
    `;
  }

  // 6. Seed Complaint Items
  console.log('Seeding Public Complaints to Neon DB...');
  for (const c of initialComplaintsData) {
    await sql`
      INSERT INTO complaint_items (id, ticket_id, subject, department, status, upvotes, date)
      VALUES (${c.id}, ${c.id}, ${c.subject}, ${c.department}, ${c.status}, ${c.upvotes}, ${c.date})
      ON CONFLICT (ticket_id) DO UPDATE 
      SET subject = EXCLUDED.subject, department = EXCLUDED.department, status = EXCLUDED.status,
          upvotes = EXCLUDED.upvotes, date = EXCLUDED.date;
    `;
  }

  // 7. Seed FAQ Items
  console.log('Seeding FAQ Knowledge Base to Neon DB...');
  for (const f of initialFAQData) {
    await sql`
      INSERT INTO faq_items (id, question, answer)
      VALUES (${f.id}, ${f.question}, ${f.answer})
      ON CONFLICT (id) DO UPDATE 
      SET question = EXCLUDED.question, answer = EXCLUDED.answer;
    `;
  }

  console.log('🎉 Neon PostgreSQL Database Hydration Complete!');
}

if (require.main === module) {
  seedNeonDatabase().catch((err) => {
    console.error('❌ Neon Seeding failed:', err);
    process.exit(1);
  });
}
