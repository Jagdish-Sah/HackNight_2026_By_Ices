'use client';

import { useState, useEffect } from 'react';
import { getBudgetData, getSubDepartmentData, BudgetCategory, SubDepartmentData } from '@/lib/actions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { Search, DollarSign, AlertTriangle, CheckCircle2, ChevronRight, X, Building2, Loader2 } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export default function BudgetPage() {
  const [data, setData] = useState<BudgetCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Drill-down Modal State
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [subData, setSubData] = useState<SubDepartmentData[]>([]);
  const [subLoading, setSubLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      const result = await getBudgetData();
      setData(result);
      setLoading(false);
    }
    loadData();
  }, []);

  // Handle clicking on a department row
  const handleDepartmentClick = async (departmentName: string) => {
    setSelectedDept(departmentName);
    setSubLoading(true);
    const details = await getSubDepartmentData(departmentName);
    setSubData(details);
    setSubLoading(false);
  };

  const filteredData = data.filter((item) =>
    item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAllocated = data.reduce((acc, curr) => acc + curr.allocated, 0);
  const totalSpent = data.reduce((acc, curr) => acc + curr.spent, 0);

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Municipal Budget Expenditure</h1>
          <p className="text-slate-600">Real-time allocation vs actual utilization tracking (Click any department for detailed institutional breakdown)</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search department..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Allocated</p>
            <p className="text-2xl font-bold text-slate-900">${totalAllocated}M</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Spent</p>
            <p className="text-2xl font-bold text-slate-900">${totalSpent}M</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Execution Rate</p>
            <p className="text-2xl font-bold text-slate-900">
              {totalAllocated > 0 ? ((totalSpent / totalAllocated) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Allocated vs Spent ($ Millions)</h2>
          <div className="h-72">
            {loading ? (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">Loading Neon Database...</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData}>
                  <XAxis dataKey="department" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="allocated" fill="#3b82f6" name="Allocated ($M)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="spent" fill="#10b981" name="Spent ($M)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Budget Share Distribution</h2>
          <div className="h-72">
            {loading ? (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">Loading Neon Database...</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} dataKey="allocated" nameKey="department" cx="50%" cy="50%" outerRadius={80} label>
                    {data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* Main Department Data Table */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900">Departmental Audit Table</h2>
          <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">
            💡 Click any row to inspect institutional sub-entities
          </span>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Allocated ($M)</th>
              <th className="py-3 px-4">Spent ($M)</th>
              <th className="py-3 px-4">Utilization</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredData.map((item) => {
              const utilRate = item.allocated > 0 ? ((item.spent / item.allocated) * 100).toFixed(0) : '0';
              return (
                <tr
                  key={item.id}
                  onClick={() => handleDepartmentClick(item.department)}
                  className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 font-semibold text-slate-900 group-hover:text-blue-600 flex items-center gap-2">
                    <Building2 size={16} className="text-slate-400 group-hover:text-blue-600" />
                    {item.department}
                  </td>
                  <td className="py-3 px-4 text-slate-700">${item.allocated}M</td>
                  <td className="py-3 px-4 text-slate-700">${item.spent}M</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            Number(utilRate) > 100 ? 'bg-red-500' : Number(utilRate) < 50 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(Number(utilRate), 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">{utilRate}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'On Track'
                          ? 'bg-emerald-100 text-emerald-700'
                          : item.status === 'Overbudget'
                          ? 'bg-red-100 text-red-700'
                          : item.status === 'Audited Flag'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-slate-400 group-hover:text-blue-600">
                    <ChevronRight size={18} className="inline-block" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* DRILL-DOWN SUB-DEPARTMENT MODAL DRAWER */}
      {selectedDept && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end transition-opacity">
          <div className="w-full max-w-2xl bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-slate-200">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">Sub-Department Audit</span>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedDept}</h2>
                </div>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              {subLoading ? (
                <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
                  <Loader2 className="animate-spin text-blue-600" size={32} />
                  <p className="text-sm font-medium">Fetching institutional records from Neon Database...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Allocated Institutions & Projects
                  </h3>
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase font-semibold">
                          <th className="py-3 px-4">Entity / Campus</th>
                          <th className="py-3 px-4">Allocated</th>
                          <th className="py-3 px-4">Spent</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {subData.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-medium text-slate-900">{sub.entityName}</td>
                            <td className="py-3 px-4 text-slate-700">${sub.allocated}M</td>
                            <td className="py-3 px-4 text-slate-700">${sub.spent}M</td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                                  sub.status === 'On Track'
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : sub.status === 'Overbudget'
                                    ? 'bg-red-100 text-red-700'
                                    : 'bg-amber-100 text-amber-700'
                                }`}
                              >
                                {sub.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-4 mt-6 flex justify-end">
              <button
                onClick={() => setSelectedDept(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-sm font-medium"
              >
                Close Audit View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
