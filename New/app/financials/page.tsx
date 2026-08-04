'use client';

import { useState, useEffect } from 'react';
import { getPoliticianAssets, PoliticianAsset } from '@/lib/actions';
import { Search, Wallet, TrendingUp, AlertTriangle, ShieldCheck, Building, CheckCircle2 } from 'lucide-react';

export default function FinancialsPage() {
  const [politicians, setPoliticians] = useState<PoliticianAsset[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPoliticianAssets();
      setPoliticians(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredPoliticians = politicians.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOfficials = politicians.length;
  const flaggedCount = politicians.filter((item) => item.flaggedAnomalies).length;
  const total2026Assets = politicians.reduce((acc, curr) => acc + curr.year2026Assets, 0);
  const total2022Assets = politicians.reduce((acc, curr) => acc + curr.year2022Assets, 0);
  const overallGrowth = total2022Assets > 0 ? (((total2026Assets - total2022Assets) / total2022Assets) * 100).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Public Official Asset Disclosures</h1>
          <p className="text-slate-600">Tracking wealth accumulation & anomaly flags (Live DBMS Connection)</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search official or role..."
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
            <p className="text-sm font-medium text-slate-500">Tracked Officials</p>
            <p className="text-2xl font-bold text-slate-900">{loading ? '...' : totalOfficials}</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Flagged Anomalies</p>
            <p className="text-2xl font-bold text-red-600">{loading ? '...' : flaggedCount}</p>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Assets (2026)</p>
            <p className="text-2xl font-bold text-slate-900">{loading ? '...' : `$${total2026Assets.toFixed(1)}M`}</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <Wallet size={24} />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Avg Wealth Growth</p>
            <p className="text-2xl font-bold text-blue-600">{loading ? '...' : `+${overallGrowth}%`}</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
            Querying Neon PostgreSQL Database...
          </div>
        ) : (
          filteredPoliticians.map((politician) => {
            const growth = politician.year2022Assets > 0
              ? (((politician.year2026Assets - politician.year2022Assets) / politician.year2022Assets) * 100).toFixed(1)
              : '0';

            return (
              <div
                key={politician.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 space-y-4"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{politician.name}</h3>
                    <p className="text-sm text-slate-600">{politician.role}</p>
                  </div>
                  {politician.flaggedAnomalies ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold shrink-0">
                      <AlertTriangle size={14} />
                      Anomaly Flagged
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold shrink-0">
                      <CheckCircle2 size={14} />
                      Verified Normal
                    </span>
                  )}
                </div>

                {/* Asset Comparison */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">2022 Assets</p>
                    <p className="text-base font-semibold text-slate-800">${politician.year2022Assets}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">2026 Assets</p>
                    <p className="text-base font-semibold text-slate-900">${politician.year2026Assets}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Growth Rate</p>
                    <p
                      className={`text-base font-bold ${
                        Number(growth) > 100 ? 'text-red-600' : 'text-emerald-600'
                      }`}
                    >
                      +{growth}%
                    </p>
                  </div>
                </div>

                {/* Key Assets List */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Building size={14} className="text-blue-500" />
                    Key Declared Assets
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {politician.keyAssets.map((asset, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {!loading && filteredPoliticians.length === 0 && (
          <div className="col-span-full py-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
            No public official profiles found in database.
          </div>
        )}
      </div>
    </div>
  );
}
