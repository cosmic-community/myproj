'use client';

import type { FAQ } from '@/types';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQListProps {
  faqs: FAQ[];
}

export default function FAQList({ faqs }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Нет вопросов для отображения
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="bg-white rounded-lg shadow-card overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">
              {faq.metadata.question}
            </span>
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