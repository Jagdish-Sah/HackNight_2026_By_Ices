import { supabase } from '../lib/db';
import {
  mockBudgetData,
  mockPoliticianData,
  mockPromisesData,
  mockKYCData,
  mockComplaintsData,
  mockFAQData,
} from '../data/mockData';

async function seedCloudDatabase() {
  console.log('🚀 Starting GovTrace Hub Online Supabase Cloud Seeding...');

  // 1. Seed Budget Categories
  console.log('Seeding Budget Categories to Cloud...');
  const { error: budgetError } = await supabase.from('budget_categories').upsert(
    mockBudgetData.map((item) => ({
      id: item.id,
      department: item.department,
      allocated: item.allocated,
      spent: item.spent,
      status: item.status,
    })),
    { onConflict: 'department' }
  );
  if (budgetError) console.warn('Budget seed fallback notice:', budgetError.message);

  // 2. Seed Politician Asset Disclosures
  console.log('Seeding Politician Assets to Cloud...');
  for (const pol of mockPoliticianData) {
    const { error: polError } = await supabase.from('politician_assets').upsert(
      {
        id: pol.id,
        name: pol.name,
        role: pol.role,
        declared_assets: pol.declaredAssets,
        year_2022_assets: pol.year2022Assets,
        year_2026_assets: pol.year2026Assets,
        flagged_anomalies: pol.flaggedAnomalies,
        key_assets: pol.keyAssets,
      },
      { onConflict: 'id' }
    );
    if (polError) console.warn('Politician seed notice:', polError.message);
  }

  // 3. Seed Promises Data
  console.log('Seeding Manifesto Promises to Cloud...');
  const { error: promiseError } = await supabase.from('promise_items').upsert(
    mockPromisesData.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      progress: p.progress,
      status: p.status,
      target_year: p.targetYear,
      budget_allocated: p.budgetAllocated,
    })),
    { onConflict: 'id' }
  );
  if (promiseError) console.warn('Promises seed notice:', promiseError.message);

  // 4. Seed KYC Records
  console.log('Seeding Official KYC Records to Cloud...');
  const { error: kycError } = await supabase.from('kyc_records').upsert(
    mockKYCData.map((k) => ({
      id: k.id,
      name: k.name,
      designation: k.designation,
      nid_number: k.nidNumber,
      tax_clearance_year: k.taxClearanceYear,
      conflict_declared: k.conflictDeclared,
      kyc_status: k.kycStatus,
    })),
    { onConflict: 'nid_number' }
  );
  if (kycError) console.warn('KYC seed notice:', kycError.message);

  // 5. Seed Complaint Items
  console.log('Seeding Public Complaints Hub to Cloud...');
  const { error: complaintError } = await supabase.from('complaint_items').upsert(
    mockComplaintsData.map((c) => ({
      ticket_id: c.id,
      subject: c.subject,
      department: c.department,
      status: c.status,
      upvotes: c.upvotes,
      date: c.date,
    })),
    { onConflict: 'ticket_id' }
  );
  if (complaintError) console.warn('Complaints seed notice:', complaintError.message);

  // 6. Seed FAQ Items
  console.log('Seeding FAQ Knowledge Base to Cloud...');
  const { error: faqError } = await supabase.from('faq_items').upsert(
    mockFAQData.map((f) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
    })),
    { onConflict: 'id' }
  );
  if (faqError) console.warn('FAQ seed notice:', faqError.message);

  console.log('🎉 Supabase Cloud Database Hydration Complete!');
}

seedCloudDatabase()
  .catch((err) => {
    console.error('❌ Cloud Seeding failed:', err);
    process.exit(1);
  });
