'use client';

import { useState, useEffect, useMemo, useCallback, Fragment } from 'react';
import { 
  getBudgetData, 
  getSubDepartmentData, 
  BudgetCategory, 
  SubDepartmentData 
} from '@/lib/actions';
import { 
  DollarSign, 
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
  ShieldAlert
} from 'lucide-react';

interface ExpenditureItem {
  task: string;
  amount: number;
  expectedPrice?: number;
  status: string;
}

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
      setSubError('Failed to load detailed records. Please try again later.');
      setSubData([]);
    } finally {
      setLoadingSub(false);
    }
  };

  // Memoized calculations to prevent unnecessary recalculations on search
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 relative">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <PieChart className="text-blue-500" size={32} />
              Budget Transparency
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Real-time expenditure tracking and multi-level audited breakdowns directly from Neon DBMS.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            LIVE DB CONNECTED
          </div>
        </div>

        {/* METRICS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Allocated</span>
              <DollarSign className="text-blue-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{totalAllocated.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-1">Fiscal Year 2025/2026</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Disbursed</span>
              <TrendingUp className="text-emerald-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{totalSpent.toLocaleString()}</div>
            <div className="text-xs text-emerald-400 mt-1">{utilizationRate}% Utilization</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Remaining Funds</span>
              <CheckCircle2 className="text-indigo-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{(totalAllocated - totalSpent).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</div>
            <div className="text-xs text-slate-500 mt-1">Available in Treasury</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
            <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Audited Flags</span>
              <AlertTriangle className="text-amber-400" size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{flaggedCount} Sector{flaggedCount !== 1 ? 's' : ''}</div>
            <div className="text-xs text-amber-400 mt-1">Requires Special Oversight</div>
          </div>
        </div>
      </div>

      {/* SEARCH AND MAIN TABLE */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Layers size={14} className="text-blue-400" />
              Click any department row to drill down into sub-institutions
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
              <Loader2 className="animate-spin text-blue-500" size={32} />
              <p className="text-sm">Fetching live budget records from Neon DB...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <th className="py-3.5 px-6">Department Sector</th>
                    <th className="py-3.5 px-6">Allocated</th>
                    <th className="py-3.5 px-6">Disbursed</th>
                    <th className="py-3.5 px-6">Progress</th>
                    <th className="py-3.5 px-6">Status</th>
                    <th className="py-3.5 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredBudgets.map((b) => {
                    const percentage = Math.min(Math.round((b.spent / b.allocated) * 100), 100);
                    return (
                      <tr
                        key={b.id}
                        onClick={() => handleSelectDepartment(b.department)}
                        className="hover:bg-slate-800/50 cursor-pointer transition-colors group"
                      >
                        <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                          <Building2 className="text-slate-500 group-hover:text-blue-400 transition-colors" size={18} />
                          {b.department}
                        </td>
                        <td className="py-4 px-6 font-mono text-slate-300">{b.allocated}</td>
                        <td className="py-4 px-6 font-mono text-slate-300">{b.spent}</td>
                        <td className="py-4 px-6 w-48">
                          <div className="flex items-center gap-3">
                            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  b.status === 'Overbudget' ? 'bg-red-500' :
                                  b.status === 'Audited Flag' ? 'bg-amber-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-mono text-slate-400 w-8">{percentage}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                              b.status === 'On Track'
                                ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800'
                                : b.status === 'Underutilized'
                                ? 'bg-blue-950/50 text-blue-400 border-blue-800'
                                : b.status === 'Overbudget'
                                ? 'bg-red-950/50 text-red-400 border-red-800'
                                : 'bg-amber-950/50 text-amber-400 border-amber-800'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            aria-label={`Drill down into ${b.department}`}
                            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-0.5 transition-transform"
                          >
                            Drill Down
                            <ChevronRight size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredBudgets.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No department sectors matched your search query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* DRILL-DOWN MODAL / SIDE-DRAWER */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end transition-opacity">
          {/* Backdrop clickable area to close drawer */}
          <div className="absolute inset-0" onClick={closeDrawer} aria-hidden="true" />
          
          <div className="w-full max-w-4xl bg-slate-900 border-l border-slate-800 h-full overflow-y-auto flex flex-col shadow-2xl relative z-10 transform transition-transform duration-300">
            {/* DRAWER HEADER */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-950/60 border border-blue-800/50 rounded-lg text-blue-400">
                  <ListOrdered size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{selectedDept}</h2>
                  <p className="text-xs text-slate-400">Level 2 Sub-Entities & Level 3 Expenditure Breakdowns</p>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                aria-label="Close drawer"
                className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* DRAWER BODY */}
            <div className="p-6 flex-1">
              {loadingSub ? (
                <div className="py-20 text-center flex flex-col items-center gap-3 text-slate-400">
                  <Loader2 className="animate-spin text-blue-500" size={28} />
                  <p className="text-sm">Querying sub-department tables & JSON breakdowns...</p>
                </div>
              ) : subError ? (
                <div className="py-16 text-center text-red-400 border border-dashed border-red-900/50 rounded-xl p-8 bg-red-950/10">
                  <AlertTriangle className="mx-auto mb-3 text-red-500" size={36} />
                  <p className="text-sm">{subError}</p>
                </div>
              ) : subData.length === 0 ? (
                <div className="py-16 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl p-8">
                  <FileSpreadsheet className="mx-auto mb-3 text-slate-600" size={36} />
                  <p className="text-sm">No detailed sub-entities filed for this sector yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Select an entity below to reveal itemized spending tasks
                  </div>

                  <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                          <th className="py-3 px-4">Entity / Institution</th>
                          <th className="py-3 px-4">Allocated</th>
                          <th className="py-3 px-4">Claimed Spent</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-sm">
                        {subData.map((sub) => {
                          const totalItemized = (sub.expenditureBreakdown || []).reduce(
                            (acc: number, item: ExpenditureItem) => acc + (Number(item.amount) || 0), 0
                          );
                          const unaccounted = Number(sub.spent) - totalItemized;

                          return (
                            <Fragment key={sub.id}>
                              <tr
                                onClick={() => setExpandedSubEntity(expandedSubEntity === sub.id ? null : sub.id)}
                                className="hover:bg-slate-800/60 cursor-pointer transition-colors group"
                              >
                                <td className="py-3.5 px-4 font-medium text-white flex items-center gap-2.5">
                                  <ChevronRight
                                    size={16}
                                    className={`text-slate-500 transition-transform ${
                                      expandedSubEntity === sub.id ? 'rotate-90 text-blue-400' : 'group-hover:text-slate-300'
                                    }`}
                                  />
                                  {sub.entityName}
                                </td>
                                <td className="py-3.5 px-4 font-mono text-slate-300">{sub.allocated}</td>
                                <td className="py-3.5 px-4 font-mono text-slate-300">{sub.spent}</td>
                                <td className="py-3.5 px-4">
                                  <span
                                    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                                      sub.status === 'On Track'
                                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                                        : sub.status === 'Overbudget'
                                        ? 'bg-red-950 text-red-400 border border-red-800/50'
                                        : 'bg-amber-950 text-amber-400 border border-amber-800/50'
                                    }`}
                                  >
                                    {sub.status}
                                  </span>
                                </td>
                              </tr>

                              {/* LEVEL 3 EXPANDED JSON TASK BREAKDOWN */}
                              {expandedSubEntity === sub.id && (
                                <tr className="bg-slate-900/90">
                                  <td colSpan={4} className="py-4 px-6 border-l-2 border-blue-500">
                                    <div className="mb-4 flex items-center justify-between">
                                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                        <Layers size={14} /> Itemized Expenditure Breakdown
                                      </h4>
                                      <span className="text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-800/50 px-2 py-0.5 rounded">
                                        JSONB Audit View
                                      </span>
                                    </div>

                                    {sub.expenditureBreakdown && sub.expenditureBreakdown.length > 0 ? (
                                      <div className="space-y-3">
                                        {/* Table Header for Breakdown */}
                                        <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2 px-2">
                                          <div className="col-span-4">Task Description</div>
                                          <div className="col-span-2 text-right">Expected</div>
                                          <div className="col-span-2 text-right">Actual Paid</div>
                                          <div className="col-span-2 text-right">Deviation</div>
                                          <div className="col-span-2 text-right">Status</div>
                                        </div>

                                        {sub.expenditureBreakdown.map((item: ExpenditureItem, idx: number) => {
                                          const hasExpected = item.expectedPrice !== undefined && item.expectedPrice > 0;
                                          const diff = hasExpected ? item.amount - item.expectedPrice! : 0;
                                          const deviationPct = hasExpected ? (diff / item.expectedPrice!) * 100 : 0;
                                          const isFlagged = deviationPct > 15; // Flag if marked up > 15%

                                          return (
                                            <div
                                              key={idx}
                                              className={`grid grid-cols-12 gap-4 items-center p-3 rounded-lg border text-xs transition-colors ${
                                                isFlagged 
                                                  ? 'bg-red-950/20 border-red-900/50' 
                                                  : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                                              }`}
                                            >
                                              <div className="col-span-4 flex items-center gap-2">
                                                {isFlagged && <ShieldAlert size={14} className="text-red-500 shrink-0" />}
                                                <span className="font-medium text-slate-200 line-clamp-2" title={item.task}>
                                                  {item.task}
                                                </span>
                                              </div>
                                              
                                              <div className="col-span-2 text-right font-mono text-slate-400">
                                                {hasExpected ? item.expectedPrice : 'N/A'}
                                              </div>

                                              <div className="col-span-2 text-right font-mono font-bold text-white">
                                                {item.amount}
                                              </div>

                                              <div className="col-span-2 text-right font-mono">
                                                {hasExpected ? (
                                                  <span className={`flex items-center justify-end gap-1 ${isFlagged ? 'text-red-400' : deviationPct < 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                                    {deviationPct > 0 && <ArrowUpRight size={12} />}
                                                    {deviationPct > 0 ? '+' : ''}{deviationPct.toFixed(1)}%
                                                  </span>
                                                ) : (
                                                  <span className="text-slate-600">-</span>
                                                )}
                                              </div>

                                              <div className="col-span-2 text-right">
                                                <span
                                                  className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                                                    item.status === 'Completed'
                                                      ? 'bg-emerald-950 text-emerald-400'
                                                      : 'bg-amber-950 text-amber-400'
                                                  }`}
                                                >
                                                  {item.status}
                                                </span>
                                              </div>
                                            </div>
                                          );
                                        })}

                                        {/* UNACCOUNTED FUNDS ROW */}
                                        {unaccounted > 0 && (
                                          <div className="mt-4 grid grid-cols-12 gap-4 items-center bg-red-950/40 p-3 rounded-lg border border-red-900/80 text-xs shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                            <div className="col-span-8 flex items-center gap-3">
                                              <AlertTriangle className="text-red-500 shrink-0" size={16} />
                                              <span className="font-bold text-red-400 uppercase tracking-wide">
                                                Not Defined / Unaccounted Discrepancy
                                              </span>
                                              <span className="text-slate-400 font-normal italic text-[10px] hidden sm:inline">
                                                (Parent Spent vs Itemized Total)
                                              </span>
                                            </div>
                                            <div className="col-span-4 text-right font-mono font-bold text-red-400 text-sm">
                                              {unaccounted.toFixed(2)} Missing
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="py-4 text-center text-slate-500 text-xs italic bg-slate-950/50 rounded-lg border border-slate-800/50">
                                        No itemized task breakdown stored for this entity.
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
            <div className="p-4 border-t border-slate-800 bg-slate-950/50 text-xs text-slate-500 flex justify-between items-center sticky bottom-0 z-10 backdrop-blur-sm">
              <span>Audited under Procurement Act Section 4</span>
              <button
                onClick={closeDrawer}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
