import Link from 'next/link';
import { Home, PieChart, Wallet, ShieldCheck, ListTodo, MessageSquareWarning, HelpCircle } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Budget Expenditure', href: '/budget', icon: PieChart },
  { name: 'Asset Disclosures', href: '/financials', icon: Wallet },
  { name: 'Central KYC', href: '/kyc', icon: ShieldCheck },
  { name: 'Promise Tracker', href: '/tracker', icon: ListTodo },
  { name: 'Complaints Hub', href: '/complaints', icon: MessageSquareWarning },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-slate-900 text-white min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 mt-2 px-2">
        <ShieldCheck className="text-emerald-400" size={32} />
        <h1 className="text-xl font-bold tracking-tight">GovTrace Hub</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}