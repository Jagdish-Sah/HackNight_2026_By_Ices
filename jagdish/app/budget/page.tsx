'use client';

import { useState } from 'react';
import { mockBudgetData } from '@/data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { Search, DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export default function BudgetPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockBudgetData.filter((item) =>
    item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAllocated = mockBudgetData.reduce((acc, curr) => acc + curr.allocated, 0);
  const totalSpent = mockBudgetData.reduce((acc, curr) => acc + curr.spent, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Municipal Budget Expenditure</h1>
          <p className="text-slate-600">Real-time allocation vs actual utilization tracking across departments</p>
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
            <p className="text-2xl font-bold text-slate-900">{((totalSpent / totalAllocated) * 100).toFixed(1)}%</p>
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
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Budget Share Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={mockBudgetData} dataKey="allocated" nameKey="department" cx="50%" cy="50%" outerRadius={80} label>
                  {mockBudgetData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Departmental Audit Table</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Allocated ($M)</th>
              <th className="py-3 px-4">Spent ($M)</th>
              <th className="py-3 px-4">Utilization</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredData.map((item) => {
              const utilRate = ((item.spent / item.allocated) * 100).toFixed(0);
              return (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{item.department}</td>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}