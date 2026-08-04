'use client';

import Link from 'next/link';
import { mockBudgetData, mockPoliticianData, mockPromisesData, mockKYCData, mockComplaintsData } from '@/data/mockData';
import { PieChart, Wallet, ListTodo, ShieldCheck, MessageSquareWarning, ArrowRight, CheckCircle2, AlertTriangle, Building2, TrendingUp } from 'lucide-react';

export default function Home() {
  const totalAllocated = mockBudgetData.reduce((acc, curr) => acc + curr.allocated, 0);
  const totalSpent = mockBudgetData.reduce((acc, curr) => acc + curr.spent, 0);
  const flaggedOfficials = mockPoliticianData.filter((item) => item.flaggedAnomalies).length;
  const completedPromises = mockPromisesData.filter((item) => item.status === 'Completed').length;
  const totalPromises = mockPromisesData.length;
  const openComplaints = mockComplaintsData.filter((item) => item.status === 'Open' || item.status === 'Under Investigation').length;
  const verifiedKYC = mockKYCData.filter((item) => item.kycStatus === 'Verified').length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white rounded-2xl p-8 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-400/30">
            <ShieldCheck size={14} />
            GovTrace Hub — Civic Transparency Platform
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Executive Governance Dashboard</h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Real-time public oversight portal monitoring municipal budget execution, official wealth disclosures, manifesto promise completion, KYC compliance, and crowdsourced grievances.
          </p>
        </div>
      </div>

      {/* Quick KPI Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Budget Spent / Total</p>
            <p className="text-2xl font-bold text-slate-900">${totalSpent}M / ${totalAllocated}M</p>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp size={12} />
              {((totalSpent / totalAllocated) * 100).toFixed(1)}% execution
            </span>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <PieChart size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Manifesto Pledges</p>
            <p className="text-2xl font-bold text-slate-900">{completedPromises} / {totalPromises} Done</p>
            <span className="text-xs text-blue-600 font-semibold flex items-center gap-1 mt-1">
              <CheckCircle2 size={12} />
              {((completedPromises / totalPromises) * 100).toFixed(0)}% completed
            </span>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <ListTodo size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Flagged Asset Anomalies</p>
            <p className="text-2xl font-bold text-red-600">{flaggedOfficials} Officials</p>
            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
              <AlertTriangle size={12} />
              Unexplained growth
            </span>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <Wallet size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Active Grievances</p>
            <p className="text-2xl font-bold text-amber-600">{openComplaints} Tickets</p>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
              Pending departmental review
            </span>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <MessageSquareWarning size={24} />
          </div>
        </div>
      </div>

      {/* Navigation Modules Cards */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Governance Audit Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/budget"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <PieChart size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Municipal Budget Expenditure</h3>
            <p className="text-sm text-slate-600">
              Interactive departmental expenditure breakdown, execution rate tracking, and audit flags.
            </p>
          </Link>

          <Link
            href="/financials"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Wallet size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Public Official Asset Disclosures</h3>
            <p className="text-sm text-slate-600">
              Comparative wealth tracking from 2022 to 2026 with anomaly detection for elected officials.
            </p>
          </Link>

          <Link
            href="/tracker"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ListTodo size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Election Promise Tracker</h3>
            <p className="text-sm text-slate-600">
              Manifesto commitments, completion percentage bars, target years, and budget allocations.
            </p>
          </Link>

          <Link
            href="/kyc"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Central Official KYC</h3>
            <p className="text-sm text-slate-600">
              Identity verification, national ID compliance, tax clearance status, and conflict disclosures.
            </p>
          </Link>

          <Link
            href="/complaints"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <MessageSquareWarning size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-amber-600 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Complaints Hub</h3>
            <p className="text-sm text-slate-600">
              Crowdsourced citizen grievance board with upvoting and instant grievance filing modal.
            </p>
          </Link>

          <Link
            href="/faq"
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-100 text-slate-700 rounded-lg group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Building2 size={24} />
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Governance FAQ</h3>
            <p className="text-sm text-slate-600">
              Knowledge base explaining portal mechanics, audit data sources, and citizen participation.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}