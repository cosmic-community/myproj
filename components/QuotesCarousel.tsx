'use client';

import type { Quote } from '@/types';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuotesCarouselProps {
  quotes: Quote[];
}

export default function QuotesCarousel({ quotes }: QuotesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Нет цитат для отображения
      </div>
    );
  }
  
  const currentQuote = quotes[currentIndex];
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 max-w-4xl mx-auto">
        <div className="arabic-text text-center mb-6 text-gray-800">
          {currentQuote.metadata.arabic_text}
        </div>
        
        <div className="text-center text-gray-700 text-lg mb-6 leading-relaxed">
          {currentQuote.metadata.russian_translation}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            {currentQuote.metadata.surah && `Сура: ${currentQuote.metadata.surah}`}
            {currentQuote.metadata.ayah && `, Аят: ${currentQuote.metadata.ayah}`}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white shadow-card hover:bg-gray-50 transition-colors"
          aria-label="Предыдущая цитата"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <div className="flex gap-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к цитате ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-card hover:bg-gray-50 transition-colors"
          aria-label="Следующая цитата"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}