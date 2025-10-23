'use client';

import type { Resource } from '@/types';
import { Video, Music, FileText, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ResourcesListProps {
  resources: Resource[];
}

export default function ResourcesList({ resources }: ResourcesListProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  if (!resources || resources.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Нет ресурсов для отображения
      </div>
    );
  }
  
  const filteredResources = selectedType
    ? resources.filter((resource) => resource.metadata.resource_type.key === selectedType)
    : resources;
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'audio':
        return <Music className="w-6 h-6" />;
      case 'document':
        return <FileText className="w-6 h-6" />;
      case 'link':
        return <LinkIcon className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-100 text-red-700';
      case 'audio':
        return 'bg-purple-100 text-purple-700';
      case 'document':
        return 'bg-blue-100 text-blue-700';
      case 'link':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredResources.map((resource) => (
        <a
          key={resource.id}
          href={resource.metadata.resource_url || resource.metadata.media_file?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card group"
        >
          {resource.metadata?.thumbnail && (
            <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={`${resource.metadata.thumbnail.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={resource.metadata.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width="300"
                height="200"
              />
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-sm px-3 py-1 rounded-full font-medium ${getTypeColor(resource.metadata.resource_type.key)}`}>
              {getIcon(resource.metadata.resource_type.key)}
              <span className="ml-2">{resource.metadata.resource_type.value}</span>
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {resource.metadata.title}
          </h3>
          
          {resource.metadata?.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {resource.metadata.description}
            </p>
          )}
          
          <div className="flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
            Открыть ресурс
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
      ))}
    </div>
  );
}