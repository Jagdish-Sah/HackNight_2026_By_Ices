'use client';

import { useState } from 'react';
import { mockFAQData } from '@/data/mockData';
import { Search, ChevronDown, ChevronUp, HelpCircle, BookOpen } from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['1']); // default open first item

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQ = mockFAQData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Governance & Portal FAQ</h1>
          <p className="text-slate-600">Frequently asked questions about data transparency, tracking, and complaints</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search questions or terms..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-200">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2 text-slate-700 font-semibold text-sm">
          <BookOpen size={18} className="text-blue-600" />
          <span>Knowledge Base & Guidelines</span>
        </div>

        {filteredFAQ.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div key={item.id} className="transition-colors">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle className="text-blue-500 shrink-0" size={20} />
                  <span className="text-base">{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp size={20} className="text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-slate-500 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed bg-slate-50/50 border-t border-slate-100">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFAQ.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No FAQ entries found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
