'use client';

import { useState, useEffect } from 'react';
import { getKYCRecords, KYCRecord } from '@/lib/actions';
import { Search, ShieldCheck, AlertTriangle, ShieldAlert, UserCheck, CheckCircle2, Clock } from 'lucide-react';

export default function KYCPage() {
  const [kycData, setKycData] = useState<KYCRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getKYCRecords();
      setKycData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredKYC = kycData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nidNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOfficials = kycData.length;
  const verifiedCount = kycData.filter((item) => item.kycStatus === 'Verified').length;
  const pendingCount = kycData.filter((item) => item.kycStatus === 'Pending').length;
  const flaggedCount = kycData.filter((item) => item.kycStatus === 'Flagged').length;

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Central Official KYC Register</h1>
          <p className="text-slate-600">Verification of public officials & tax clearances (Live Neon DBMS Database)</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, role, NID..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Officials</p>
            <p className="text-2xl font-bold text-slate-900">{loading ? '...' : totalOfficials}</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <UserCheck size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Verified KYC</p>
            <p className="text-2xl font-bold text-emerald-600">{loading ? '...' : verifiedCount}</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Clearance</p>
            <p className="text-2xl font-bold text-amber-600">{loading ? '...' : pendingCount}</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <Clock size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Flagged Records</p>
            <p className="text-2xl font-bold text-red-600">{loading ? '...' : flaggedCount}</p>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <ShieldAlert size={24} />
          </div>
        </div>
      </div>

      {/* KYC Data Table */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="text-blue-600" size={20} />
          Official Audit Verification Table
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
              <th className="py-3 px-4">Official Name</th>
              <th className="py-3 px-4">Designation</th>
              <th className="py-3 px-4">National ID</th>
              <th className="py-3 px-4">Tax Clearance</th>
              <th className="py-3 px-4">Conflict Declared</th>
              <th className="py-3 px-4">KYC Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500">Loading Neon Database...</td>
              </tr>
            ) : (
              filteredKYC.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{item.name}</td>
                  <td className="py-3.5 px-4 text-slate-600">{item.designation}</td>
                  <td className="py-3.5 px-4 text-slate-700 font-mono text-xs">{item.nidNumber}</td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">FY {item.taxClearanceYear}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.conflictDeclared
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {item.conflictDeclared ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        item.kycStatus === 'Verified'
                          ? 'bg-emerald-100 text-emerald-700'
                          : item.kycStatus === 'Flagged'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {item.kycStatus === 'Flagged' && <AlertTriangle size={13} />}
                      {item.kycStatus}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {!loading && filteredKYC.length === 0 && (
          <div className="py-8 text-center text-slate-500">
            No official KYC records found in database.
          </div>
        )}
      </div>
    </div>
  );
}
