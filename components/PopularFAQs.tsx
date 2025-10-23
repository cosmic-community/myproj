'use client';

import type { FAQ } from '@/types';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

interface PopularFAQsProps {
  faqs: FAQ[];
}

export default function PopularFAQs({ faqs }: PopularFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg shadow-card overflow-hidden border-2 border-primary-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-white/50 transition-colors"
          >
            <div className="flex items-center gap-3 pr-4">
              <Star className="w-5 h-5 text-primary-600 fill-current flex-shrink-0" />
              <span className="font-semibold text-gray-900">
                {faq.metadata.question}
              </span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          
          {openIndex === index && (
            <div 
              className="px-6 pb-6 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: faq.metadata.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
}