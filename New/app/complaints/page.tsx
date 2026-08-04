'use client';

import { useState, useEffect } from 'react';
import { getComplaintsData, upvoteComplaint, submitComplaint, ComplaintItem } from '@/lib/actions';
import { Search, ThumbsUp, PlusCircle, MessageSquareWarning, X, Tag, Calendar, AlertCircle } from 'lucide-react';

const DEPARTMENTS = [
  'Roads & Infrastructure',
  'Public Health Services',
  'Education & Schools',
  'Sanitation & Waste Management',
  'Digital Governance & IT',
  'Water Resources & Sewage',
];

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState<ComplaintItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState('');
  const [newDepartment, setNewDepartment] = useState(DEPARTMENTS[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComplaints() {
      const data = await getComplaintsData();
      setComplaints(data);
      setLoading(false);
    }
    fetchComplaints();
  }, []);

  const handleUpvote = async (id: string) => {
    // Optimistic local state update
    setComplaints((prev) =>
      prev.map((item) => (item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item))
    );
    // Neon Server Action mutation
    await upvoteComplaint(id);
  };

  const handleAddGrievance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const added = await submitComplaint({
      subject: newSubject.trim(),
      department: newDepartment,
    });

    setComplaints([added, ...complaints]);
    setNewSubject('');
    setNewDepartment(DEPARTMENTS[0]);
    setIsModalOpen(false);
  };

  const filteredComplaints = complaints.filter(
    (item) =>
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Public Complaints Hub</h1>
          <p className="text-slate-600">Crowdsourced grievance board for municipal accountability (Live Neon Database Integration)</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search grievances..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            <PlusCircle size={18} />
            <span>File Grievance</span>
          </button>
        </div>
      </div>

      {/* Ticket List */}
      <div className="space-y-4">
        {loading ? (
          <div className="p-12 bg-white rounded-xl border border-slate-200 text-center text-slate-500">
            Connecting to Neon Serverless PostgreSQL...
          </div>
        ) : (
          filteredComplaints.map((item) => {
            const statusStyle =
              item.status === 'Resolved'
                ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                : item.status === 'Under Investigation'
                ? 'bg-blue-100 text-blue-700 border-blue-200'
                : item.status === 'Escalated'
                ? 'bg-red-100 text-red-700 border-red-200'
                : 'bg-amber-100 text-amber-700 border-amber-200';

            return (
              <div
                key={item.id}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">
                      {item.id}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                      <Tag size={12} />
                      {item.department}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.subject}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      Filed on {item.date}
                    </span>
                  </div>
                </div>

                {/* Upvote Button */}
                <div className="flex items-center sm:flex-col gap-2">
                  <button
                    onClick={() => handleUpvote(item.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 rounded-lg font-semibold transition-all active:scale-95"
                  >
                    <ThumbsUp size={18} />
                    <span>{item.upvotes}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}

        {!loading && filteredComplaints.length === 0 && (
          <div className="p-8 bg-white rounded-xl border border-slate-200 text-center text-slate-500">
            No complaints found matching your filter criteria.
          </div>
        )}
      </div>

      {/* File Grievance Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full p-6 space-y-5 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquareWarning className="text-blue-600" size={22} />
                File New Grievance
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddGrievance} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject / Summary</label>
                <input
                  type="text"
                  required
                  placeholder="Describe your issue or grievance..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Target Department</label>
                <select
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <span>Submitted grievances are publicly visible and logged to Neon PostgreSQL database.</span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
                >
                  Submit Grievance
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
