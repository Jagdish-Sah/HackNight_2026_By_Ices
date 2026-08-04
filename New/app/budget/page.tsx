'use client';

import { useState, useEffect, useMemo, useCallback, Fragment } from 'react';
import { 
  getBudgetData, 
  getSubDepartmentData, 
  BudgetCategory, 
  SubDepartmentData 
} from '@/lib/actions';
import { 
  
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  Search, 
  Layers, 
  PieChart, 
  Building2,
  ListOrdered,
  Loader2,
  FileSpreadsheet,
  ArrowUpRight,
  ShieldAlert,
  Info
} from 'lucide-react';

interface ExpenditureItem {
  task: string;
  amount: number;
  expectedPrice?: number;
  status: string;
}

// Utility for professional financial formatting
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function BudgetPage() {
  const [budgets, setBudgets] = useState<BudgetCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Drill-down Modal/Drawer State
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [subData, setSubData] = useState<SubDepartmentData[]>([]);
  const [loadingSub, setLoadingSub] = useState<boolean>(false);
  const [subError, setSubError] = useState<string | null>(null);
  const [expandedSubEntity, setExpandedSubEntity] = useState<string | null>(null);

  // Fetch initial data
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await getBudgetData();
        setBudgets(data);
      } catch (error) {
        console.error('Failed to load budget data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const closeDrawer = useCallback(() => {
    setSelectedDept(null);
    setSubData([]);
    setExpandedSubEntity(null);
    setSubError(null);
  }, []);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedDept) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDept, closeDrawer]);

  const handleSelectDepartment = async (deptName: string) => {
    setSelectedDept(deptName);
    setLoadingSub(true);
    setExpandedSubEntity(null);
    setSubError(null);
    try {
      const details = await getSubDepartmentData(deptName);
      setSubData(details);
    } catch (error) {
      console.error('Failed to load sub-department data:', error);
      setSubError('Failed to load detailed audit records. Please try again later.');
      setSubData([]);
    } finally {
      setLoadingSub(false);
    }
  };

  // Memoized calculations
  const filteredBudgets = useMemo(() => 
    budgets.filter((b) =>
      b.department.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [budgets, searchQuery]
  );

  const { totalAllocated, totalSpent, utilizationRate, flaggedCount } = useMemo(() => {
    const allocated = budgets.reduce((acc, curr) => acc + Number(curr.allocated), 0);
    const spent = budgets.reduce((acc, curr) => acc + Number(curr.spent), 0);
    const rate = allocated > 0 ? ((spent / allocated) * 100).toFixed(1) : '0';
    const flagged = budgets.filter((b) => b.status === 'Audited Flag' || b.status === 'Overbudget').length;

    return { totalAllocated: allocated, totalSpent: spent, utilizationRate: rate, flaggedCount: flagged };
  }, [budgets]);

  // Derived calculations for the "Deviation Alert" system
  const departmentDeviations = useMemo(() => {
    let highDeviationCount = 0;
    let totalUnaccounted = 0;

    subData.forEach((sub) => {
      const totalItemized = (sub.expenditureBreakdown || []).reduce(
        (acc, item) => acc + (Number(item.amount) || 0), 0
      );
      
      const unaccounted = Number(sub.spent) - totalItemized;
      if (unaccounted > 0) totalUnaccounted += unaccounted;

      (sub.expenditureBreakdown || []).forEach((item) => {
        if (item.expectedPrice && item.amount > item.expectedPrice * 1.15) {
          highDeviationCount++;
        }
      });
    });

    return { highDeviationCount, totalUnaccounted };
  }, [subData]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 relative selection:bg-blue-500/30">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <PieChart className="text-blue-500" size={32} />
              Budget Transparency Portal
            </h1>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Real-time expenditure tracking and multi-level audited breakdowns for institutional accountability. Data sourced securely from central financial registries.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-400 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            LIVE DB CONNECTED
          </div>
        </div>

        {/* METRICS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Allocated</span>
              
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(totalAllocated)}</div>
            <div className="text-xs text-slate-500 mt-1">Fiscal Year 2025/2026</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Disbursed</span>
              <TrendingUp className="text-emerald-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(totalSpent)}</div>
            <div className="text-xs text-emerald-400 mt-1">{utilizationRate}% Utilization Rate</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Remaining Funds</span>
              <CheckCircle2 className="text-indigo-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(totalAllocated - totalSpent)}</div>
            <div className="text-xs text-slate-500 mt-1">Available in Treasury</div>
          </div>

          <div className={`bg-slate-900/60 border p-5 rounded-xl transition-colors ${flaggedCount > 0 ? 'border-amber-900/50 bg-amber-950/10' : 'border-slate-800'}`}>
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Audited Flags</span>
              <AlertTriangle className={flaggedCount > 0 ? 'text-amber-400' : 'text-slate-600'} size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{flaggedCount} Sector{flaggedCount !== 1 ? 's' : ''}</div>
            <div className={`text-xs mt-1 ${flaggedCount > 0 ? 'text-amber-400' : 'text-slate-500'}`}>Requires Special Oversight</div>
          </div>
        </div>
      </header>

      {/* SEARCH AND MAIN TABLE */}
      <main className="max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-slate-900/50">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2 bg-slate-800/50 py-1.5 px-3 rounded-full">
              <Info size={14} className="text-blue-400" />
              Click any department to audit sub-institutions
            </div>
          </div>

          {loading ? (
            <div className="p-16 text-center text-slate-400 flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-blue-500" size={36} />
              <p className="text-sm font-medium">Synchronizing live records from database...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-950/80 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <th className="py-4 px-6">Department Sector</th>
                    <th className="py-4 px-6">Allocated</th>
                    <th className="py-4 px-6">Disbursed</th>
                    <th className="py-4 px-6">Progress</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Audit Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredBudgets.map((b) => {
                    const percentage = Math.min(Math.round((b.spent / b.allocated) * 100), 100);
                    return (
                      <tr
                        key={b.id}
                        tabIndex={0}
                        onClick={() => handleSelectDepartment(b.department)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSelectDepartment(b.department)}
                        className="hover:bg-slate-800/50 cursor-pointer transition-colors group focus:bg-slate-800/80 focus:outline-none"
                      >
                        <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                          <Building2 className="text-slate-500 group-hover:text-blue-400 transition-colors" size={18} />
                          {b.department}
                        </td>
                        <td className="py-4 px-6 font-mono text-slate-300">{formatCurrency(b.allocated)}</td>
                        <td className="py-4 px-6 font-mono text-slate-300">{formatCurrency(b.spent)}</td>
                        <td className="py-4 px-6 w-48">
                          <div className="flex items-center gap-3">
                            <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  b.status === 'Overbudget' ? 'bg-red-500' :
                                  b.status === 'Audited Flag' ? 'bg-amber-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-mono text-slate-400 w-9">{percentage}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider border ${
                              b.status === 'On Track'
                                ? 'bg-emerald-950/50 text-emerald-400 border-emerald-900/50'
                                : b.status === 'Underutilized'
                                ? 'bg-blue-950/50 text-blue-400 border-blue-900/50'
                                : b.status === 'Overbudget'
                                ? 'bg-red-950/50 text-red-400 border-red-900/50'
                                : 'bg-amber-950/50 text-amber-400 border-amber-900/50'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            tabIndex={-1}
                            aria-label={`Drill down into ${b.department}`}
                            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform bg-blue-950/30 px-3 py-1.5 rounded-md"
                          >
                            View Audit
                            <ChevronRight size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredBudgets.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-16 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <Search size={32} className="text-slate-700 mb-2" />
                          <p>No department sectors matched your search query.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* DRILL-DOWN MODAL / SIDE-DRAWER */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex justify-end transition-opacity">
          <div className="absolute inset-0" onClick={closeDrawer} aria-label="Close drawer" />
          
          <aside 
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            className="w-full max-w-4xl bg-slate-900 border-l border-slate-800 h-full overflow-y-auto flex flex-col shadow-2xl relative z-10 animate-in slide-in-from-right duration-300"
          >
            {/* DRAWER HEADER */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-950/50 border border-blue-800/50 rounded-xl text-blue-400 shadow-inner">
                  <ListOrdered size={24} />
                </div>
                <div>
                  <h2 id="drawer-title" className="text-xl font-bold text-white">{selectedDept}</h2>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Level 2 Sub-Entities & Expenditure Breakdowns</p>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                aria-label="Close drawer"
                className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* DRAWER BODY */}
            <div className="p-6 flex-1">
              {loadingSub ? (
                <div className="py-24 text-center flex flex-col items-center gap-4 text-slate-400">
                  <Loader2 className="animate-spin text-blue-500" size={32} />
                  <p className="text-sm">Retrieving decentralized records for audit...</p>
                </div>
              ) : subError ? (
                <div className="py-16 text-center text-red-400 border border-dashed border-red-900/50 rounded-xl p-8 bg-red-950/10">
                  <AlertTriangle className="mx-auto mb-4 text-red-500" size={40} />
                  <p className="text-sm font-medium">{subError}</p>
                </div>
              ) : subData.length === 0 ? (
                <div className="py-16 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl p-8">
                  <FileSpreadsheet className="mx-auto mb-4 text-slate-600" size={40} />
                  <p className="text-sm">No detailed sub-entities filed for this sector in the current fiscal year.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* SYSTEMIC DEVIATION ALERT BANNER */}
                  {(departmentDeviations.highDeviationCount > 0 || departmentDeviations.totalUnaccounted > 0) && (
                    <div className="bg-red-950/30 border border-red-900/60 p-4 sm:p-5 rounded-xl flex items-start gap-3.5 shadow-sm">
                      <ShieldAlert className="text-red-500 shrink-0 mt-0.5" size={24} />
                      <div className="flex-1">
                        <h3 className="text-red-400 font-bold text-sm tracking-wide uppercase">Derivation / Deviation Alert</h3>
                        <div className="text-red-300/80 text-sm mt-1.5 space-y-1">
                          {departmentDeviations.highDeviationCount > 0 && (
                            <p>• <strong>{departmentDeviations.highDeviationCount} task(s)</strong> have exceeded their projected operational cost by more than 15%.</p>
                          )}
                          {departmentDeviations.totalUnaccounted > 0 && (
                            <p>• <strong>{formatCurrency(departmentDeviations.totalUnaccounted)}</strong> in disbursed funds currently lacks itemized task documentation.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">
                    Sub-Institution Registry
                  </div>

                  <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50 shadow-inner">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                          <th className="py-4 px-5">Entity / Institution</th>
                          <th className="py-4 px-5">Allocated</th>
                          <th className="py-4 px-5">Claimed Spent</th>
                          <th className="py-4 px-5">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-sm">
                        {subData.map((sub) => {
                          const totalItemized = (sub.expenditureBreakdown || []).reduce(
                            (acc: number, item: ExpenditureItem) => acc + (Number(item.amount) || 0), 0
                          );
                          const unaccounted = Math.max(0, Number(sub.spent) - totalItemized);

                          return (
                            <Fragment key={sub.id}>
                              <tr
                                tabIndex={0}
                                onClick={() => setExpandedSubEntity(expandedSubEntity === sub.id ? null : sub.id)}
                                onKeyDown={(e) => e.key === 'Enter' && setExpandedSubEntity(expandedSubEntity === sub.id ? null : sub.id)}
                                className="hover:bg-slate-800/60 cursor-pointer transition-colors group focus:bg-slate-800/80 focus:outline-none"
                              >
                                <td className="py-4 px-5 font-medium text-white flex items-center gap-3">
                                  <div className={`p-1 rounded transition-colors ${expandedSubEntity === sub.id ? 'bg-blue-900/50' : 'group-hover:bg-slate-700'}`}>
                                    <ChevronRight
                                      size={16}
                                      className={`transition-transform duration-200 ${
                                        expandedSubEntity === sub.id ? 'rotate-90 text-blue-400' : 'text-slate-500 group-hover:text-slate-300'
                                      }`}
                                    />
                                  </div>
                                  {sub.entityName}
                                </td>
                                <td className="py-4 px-5 font-mono text-slate-300">{formatCurrency(Number(sub.allocated))}</td>
                                <td className="py-4 px-5 font-mono text-slate-300">{formatCurrency(Number(sub.spent))}</td>
                                <td className="py-4 px-5">
                                  <span
                                    className={`inline-block px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold ${
                                      sub.status === 'On Track'
                                        ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50'
                                        : sub.status === 'Overbudget'
                                        ? 'bg-red-950/40 text-red-400 border border-red-900/50'
                                        : 'bg-amber-950/40 text-amber-400 border border-amber-900/50'
                                    }`}
                                  >
                                    {sub.status}
                                  </span>
                                </td>
                              </tr>

                              {/* LEVEL 3 EXPANDED JSON TASK BREAKDOWN */}
                              {expandedSubEntity === sub.id && (
                                <tr className="bg-slate-900/90 shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)]">
                                  <td colSpan={4} className="py-5 px-6 border-l-4 border-blue-500">
                                    <div className="mb-5 flex items-center justify-between">
                                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                                        <Layers size={14} className="text-blue-400" /> Itemized Expenditure Ledger
                                      </h4>
                                      <span className="text-[10px] font-mono bg-blue-950/50 text-blue-300 border border-blue-800/50 px-2.5 py-1 rounded-md shadow-sm">
                                        JSONB Audit View
                                      </span>
                                    </div>

                                    {sub.expenditureBreakdown && sub.expenditureBreakdown.length > 0 ? (
                                      <div className="space-y-3 relative">
                                        {/* Table Header for Breakdown */}
                                        <div className="grid grid-cols-12 gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800/80 pb-2 px-3">
                                          <div className="col-span-5 lg:col-span-4">Task Description</div>
                                          <div className="col-span-3 lg:col-span-2 text-right">Expected</div>
                                          <div className="col-span-2 text-right hidden lg:block">Actual Paid</div>
                                          <div className="col-span-4 lg:col-span-2 text-right">Deviation</div>
                                          <div className="col-span-2 text-right hidden lg:block">Status</div>
                                        </div>

                                        {sub.expenditureBreakdown.map((item: ExpenditureItem, idx: number) => {
                                          const hasExpected = item.expectedPrice !== undefined && item.expectedPrice > 0;
                                          const diff = hasExpected ? item.amount - item.expectedPrice! : 0;
                                          const deviationPct = hasExpected ? (diff / item.expectedPrice!) * 100 : 0;
                                          const isFlagged = deviationPct > 15; // Deviation flag

                                          return (
                                            <div
                                              key={idx}
                                              className={`grid grid-cols-12 gap-4 items-center p-3 rounded-lg border text-sm transition-colors ${
                                                isFlagged 
                                                  ? 'bg-red-950/20 border-red-900/50' 
                                                  : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                                              }`}
                                            >
                                              <div className="col-span-5 lg:col-span-4 flex items-start gap-2">
                                                {isFlagged && <ShieldAlert size={16} className="text-red-500 shrink-0 mt-0.5" />}
                                                <span className="font-medium text-slate-200 leading-snug" title={item.task}>
                                                  {item.task}
                                                </span>
                                              </div>
                                              
                                              <div className="col-span-3 lg:col-span-2 text-right font-mono text-slate-400">
                                                {hasExpected ? formatCurrency(item.expectedPrice!) : 'N/A'}
                                              </div>

                                              <div className="col-span-2 text-right font-mono font-bold text-white hidden lg:block">
                                                {formatCurrency(item.amount)}
                                              </div>

                                              <div className="col-span-4 lg:col-span-2 text-right font-mono flex flex-col lg:block items-end">
                                                <span className="lg:hidden text-white font-bold mb-1">{formatCurrency(item.amount)}</span>
                                                {hasExpected ? (
                                                  <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs ${
                                                    isFlagged ? 'bg-red-950 text-red-400' : deviationPct < 0 ? 'text-emerald-400' : 'text-amber-400'
                                                  }`}>
                                                    {deviationPct > 0 && <ArrowUpRight size={12} />}
                                                    {deviationPct > 0 ? '+' : ''}{deviationPct.toFixed(1)}%
                                                  </span>
                                                ) : (
                                                  <span className="text-slate-600">-</span>
                                                )}
                                              </div>

                                              <div className="col-span-2 text-right hidden lg:block">
                                                <span
                                                  className={`inline-block px-2 py-1 rounded text-[10px] uppercase font-bold ${
                                                    item.status === 'Completed'
                                                      ? 'bg-emerald-950/50 text-emerald-400'
                                                      : 'bg-amber-950/50 text-amber-400'
                                                  }`}
                                                >
                                                  {item.status}
                                                </span>
                                              </div>
                                            </div>
                                          );
                                        })}

                                        {/* UNACCOUNTED FUNDS ALERT ROW */}
                                        {unaccounted > 0 && (
                                          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-4 items-center bg-red-950/40 p-4 rounded-lg border border-red-900/60 text-sm shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                                            <div className="sm:col-span-8 flex items-center gap-3">
                                              <div className="p-1.5 bg-red-900/50 rounded-md">
                                                <AlertTriangle className="text-red-400 shrink-0" size={16} />
                                              </div>
                                              <span className="font-bold text-red-400 uppercase tracking-wide">
                                                Discrepancy / Unaccounted
                                              </span>
                                              <span className="text-red-300/60 font-normal italic text-xs hidden md:inline">
                                                (Parent Spent vs Itemized Documents)
                                              </span>
                                            </div>
                                            <div className="sm:col-span-4 text-left sm:text-right font-mono font-bold text-red-400 text-base">
                                              {formatCurrency(unaccounted)} Missing
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="py-6 text-center flex flex-col items-center justify-center gap-2 text-slate-500 bg-slate-950/50 rounded-xl border border-slate-800/50 shadow-inner">
                                        <Info size={24} className="text-slate-600" />
                                        <p className="text-sm">No itemized task breakdown submitted to the registry.</p>
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              )}
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* DRAWER FOOTER */}
            <div className="p-5 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-500 flex justify-between items-center sticky bottom-0 z-20 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-medium text-slate-400">Audited under Institutional Procurement Act</span>
                <span>Last Synced: {new Date().toLocaleTimeString()}</span>
              </div>
              <button
                onClick={closeDrawer}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                Close View
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
