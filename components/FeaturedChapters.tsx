import type { Chapter } from '@/types';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

interface FeaturedChaptersProps {
  chapters: Chapter[];
}

export default function FeaturedChapters({ chapters }: FeaturedChaptersProps) {
  if (!chapters || chapters.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Нет избранных глав для отображения
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={`/chapters/${chapter.slug}`}
          className="card group"
        >
          {chapter.metadata?.featured_image && (
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <img
                src={`${chapter.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={chapter.metadata.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width="300"
                height="200"
              />
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-3">
            {chapter.metadata?.category && (
              <span className="text-sm px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium">
                {chapter.metadata.category.metadata?.icon} {chapter.metadata.category.metadata?.name}
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {chapter.metadata.title}
          </h3>
          
          {chapter.metadata?.excerpt && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {chapter.metadata.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>5-10 мин</span>
            </div>
            <div className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all">
              Читать
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}