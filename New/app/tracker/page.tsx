'use client';

import { useState } from 'react';
import { mockPromisesData } from '@/data/mockData';
import { Search, ListTodo, CheckCircle2, Clock, AlertTriangle, Calendar, Tag, DollarSign } from 'lucide-react';

export default function PromiseTrackerPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPromises = mockPromisesData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPledges = mockPromisesData.length;
  const completedCount = mockPromisesData.filter((item) => item.status === 'Completed').length;
  const inProgressCount = mockPromisesData.filter((item) => item.status === 'In Progress').length;
  const stalledCount = mockPromisesData.filter(
    (item) => item.status === 'Stalled' || item.status === 'Not Started'
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Election Promise Tracker</h1>
          <p className="text-slate-600">Monitoring manifesto commitments, progress status, and budget allocations</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search promises or category..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Pledges</p>
            <p className="text-2xl font-bold text-slate-900">{totalPledges}</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <ListTodo size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Completed</p>
            <p className="text-2xl font-bold text-emerald-600">{completedCount}</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">{inProgressCount}</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Clock size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Stalled / Pending</p>
            <p className="text-2xl font-bold text-amber-600">{stalledCount}</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
        </div>
      </div>

      {/* Main List Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 mb-2">Manifesto Commitments</h2>
        <div className="space-y-4">
          {filteredPromises.map((item) => {
            const statusColor =
              item.status === 'Completed'
                ? 'bg-emerald-100 text-emerald-700'
                : item.status === 'In Progress'
                ? 'bg-blue-100 text-blue-700'
                : item.status === 'Stalled'
                ? 'bg-red-100 text-red-700'
                : 'bg-slate-100 text-slate-700';

            const progressColor =
              item.progress === 100
                ? 'bg-emerald-500'
                : item.progress > 40
                ? 'bg-blue-500'
                : item.progress > 0
                ? 'bg-amber-500'
                : 'bg-slate-300';

            return (
              <div
                key={item.id}
                className="p-5 border border-slate-200 rounded-xl hover:shadow-md transition-shadow space-y-3 bg-slate-50/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 flex items-center gap-1">
                        <Tag size={12} />
                        {item.category}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      <DollarSign size={14} className="text-slate-400" />
                      Budget: {item.budgetAllocated}
                    </span>
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      <Calendar size={14} className="text-slate-400" />
                      Target: {item.targetYear}
                    </span>
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Completion Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredPromises.length === 0 && (
            <div className="py-8 text-center text-slate-500">
              No election promises match your search filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
