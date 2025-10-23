'use client';

import { Video, Music, FileText, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export default function ResourceTypeFilter() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const types = [
    { key: 'video', label: 'Видео', icon: Video },
    { key: 'audio', label: 'Аудио', icon: Music },
    { key: 'document', label: 'Документы', icon: FileText },
    { key: 'link', label: 'Ссылки', icon: LinkIcon },
  ];
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedType(null)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            selectedType === null
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Все типы
        </button>
        
        {types.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                selectedType === type.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}