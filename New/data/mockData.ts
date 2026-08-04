export interface BudgetCategory {
  id: string;
  department: string;
  allocated: number; // in millions
  spent: number;     // in millions
  status: 'On Track' | 'Underutilized' | 'Overbudget' | 'Audited Flag';
}

export interface PoliticianAsset {
  id: string;
  name: string;
  role: string;
  declaredAssets: number; // in millions
  year2022Assets: number;
  year2026Assets: number;
  flaggedAnomalies: boolean;
  keyAssets: string[];
}

export interface PromiseItem {
  id: string;
  title: string;
  category: string;
  progress: number; // percentage 0-100
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

export const mockBudgetData: BudgetCategory[] = [
  { id: '1', department: 'Roads & Infrastructure', allocated: 450, spent: 390, status: 'On Track' },
  { id: '2', department: 'Public Health Services', allocated: 280, spent: 120, status: 'Underutilized' },
  { id: '3', department: 'Education & Schools', allocated: 310, spent: 305, status: 'On Track' },
  { id: '4', department: 'Sanitation & Waste Management', allocated: 150, spent: 185, status: 'Overbudget' },
  { id: '5', department: 'Digital Governance & IT', allocated: 90, spent: 25, status: 'Audited Flag' },
  { id: '6', department: 'Water Resources & Sewage', allocated: 220, spent: 210, status: 'On Track' },
];

export const mockPoliticianData: PoliticianAsset[] = [
  { id: '1', name: 'Rajesh Sharma', role: 'Minister of Physical Infrastructure', declaredAssets: 45.2, year2022Assets: 12.0, year2026Assets: 45.2, flaggedAnomalies: true, keyAssets: ['3 Land Plots in Ward 4', 'Commercial Complex', 'Foreign Currency Deposits'] },
  { id: '2', name: 'Sita Adhikari', role: 'Mayor - Pokhara Metropolitan', declaredAssets: 18.5, year2022Assets: 14.2, year2026Assets: 18.5, flaggedAnomalies: false, keyAssets: ['Residential House', 'Agricultural Land', 'Fixed Bank Deposits'] },
  { id: '3', name: 'Bikram Thapa', role: 'Chief of Urban Development', declaredAssets: 32.8, year2022Assets: 8.5, year2026Assets: 32.8, flaggedAnomalies: true, keyAssets: ['4 Luxury Vehicles', 'Share Holdings in Hydropower', 'Gold 400g'] },
  { id: '4', name: 'Anita Shrestha', role: 'Education Department Head', declaredAssets: 12.1, year2022Assets: 10.0, year2026Assets: 12.1, flaggedAnomalies: false, keyAssets: ['Family Home', 'Savings Account'] },
];

export const mockPromisesData: PromiseItem[] = [
  { id: '1', title: 'Smart Traffic Management System', category: 'Infrastructure', progress: 75, status: 'In Progress', targetYear: 2026, budgetAllocated: '$4.2M' },
  { id: '2', title: '100% Digital Ward Citizen Services', category: 'Technology', progress: 100, status: 'Completed', targetYear: 2025, budgetAllocated: '$1.8M' },
  { id: '3', title: 'Clean Drinking Water Pipe Expansion', category: 'Public Health', progress: 30, status: 'Stalled', targetYear: 2027, budgetAllocated: '$12.0M' },
  { id: '4', title: 'Municipal Waste Recycling Plant', category: 'Environment', progress: 10, status: 'Not Started', targetYear: 2028, budgetAllocated: '$8.5M' },
  { id: '5', title: 'Public School Computer Lab Upgrade', category: 'Education', progress: 60, status: 'In Progress', targetYear: 2026, budgetAllocated: '$2.5M' },
  { id: '6', title: 'Solar Powered Public Street Lighting', category: 'Energy', progress: 100, status: 'Completed', targetYear: 2025, budgetAllocated: '$3.1M' },
];

export const mockKYCData: KYCRecord[] = [
  { id: '1', name: 'Rajesh Sharma', designation: 'Minister of Physical Infrastructure', nidNumber: 'NID-9942-8812', taxClearanceYear: 2025, conflictDeclared: true, kycStatus: 'Flagged' },
  { id: '2', name: 'Sita Adhikari', designation: 'Mayor - Pokhara Metropolitan', nidNumber: 'NID-4410-9921', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
  { id: '3', name: 'Bikram Thapa', designation: 'Chief of Urban Development', nidNumber: 'NID-7731-0045', taxClearanceYear: 2024, conflictDeclared: true, kycStatus: 'Flagged' },
  { id: '4', name: 'Anita Shrestha', designation: 'Education Department Head', nidNumber: 'NID-1102-3389', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
  { id: '5', name: 'Ramesh Karki', designation: 'Health Services Director', nidNumber: 'NID-8823-1142', taxClearanceYear: 2025, conflictDeclared: false, kycStatus: 'Pending' },
  { id: '6', name: 'Pooja Gurung', designation: 'IT & Digital Services Lead', nidNumber: 'NID-3391-7754', taxClearanceYear: 2026, conflictDeclared: false, kycStatus: 'Verified' },
];

export const mockComplaintsData: ComplaintItem[] = [
  { id: 'GRV-1001', subject: 'Unrepaired Potholes on Main Ring Road', department: 'Roads & Infrastructure', status: 'Under Investigation', upvotes: 142, date: '2026-07-28' },
  { id: 'GRV-1002', subject: 'Delayed Birth Certificate Issuance at Ward 3', department: 'Digital Governance & IT', status: 'Open', upvotes: 89, date: '2026-08-01' },
  { id: 'GRV-1003', subject: 'Contaminated Water Supply in Sector 4', department: 'Water Resources & Sewage', status: 'Escalated', upvotes: 215, date: '2026-07-25' },
  { id: 'GRV-1004', subject: 'Illegal Garbage Dumping Near Public School', department: 'Sanitation & Waste Management', status: 'Resolved', upvotes: 67, date: '2026-07-15' },
  { id: 'GRV-1005', subject: 'Lack of Street Lights on Hospital Road', department: 'Roads & Infrastructure', status: 'Open', upvotes: 54, date: '2026-08-03' },
];

export const mockFAQData: FAQItem[] = [
  { id: '1', question: 'What is GovTrace Hub?', answer: 'GovTrace Hub is a transparent civic portal tracking municipal budgets, public official asset disclosures, manifesto progress, KYC compliance, and citizen grievances.' },
  { id: '2', question: 'How is municipal budget data sourced and updated?', answer: 'Budget data is fetched directly from government financial portals, treasury audits, and published budget allocation reports, updated quarterly.' },
  { id: '3', question: 'How can citizens file a complaint or grievance?', answer: 'Citizens can navigate to the Complaints Hub page and click "File Grievance" to submit a ticket. Other citizens can upvote existing grievances to prioritize urgent issues.' },
  { id: '4', question: 'What does "Flagged" status mean in Central Official KYC?', answer: 'A "Flagged" KYC status indicates potential discrepancies in tax clearance records, undeclared conflicts of interest, or unexplained wealth growth between asset filing periods.' },
  { id: '5', question: 'How are Election Manifesto Promises tracked?', answer: 'Manifesto promises are monitored through independent project milestone verification, procurement logs, and physical infrastructure inspection reports.' },
];