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
];