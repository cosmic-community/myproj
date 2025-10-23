import type { Chapter } from '@/types';

interface ChapterContentProps {
  chapter: Chapter;
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  return (
    <article className="bg-white rounded-xl shadow-card p-8">
      {chapter.metadata?.featured_image && (
        <div className="aspect-video mb-8 rounded-lg overflow-hidden">
          <img
            src={`${chapter.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={chapter.metadata.title}
            className="w-full h-full object-cover"
            width="600"
            height="338"
          />
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-4">
        {chapter.metadata?.category && (
          <span className="text-sm px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium">
            {chapter.metadata.category.metadata?.icon} {chapter.metadata.category.metadata?.name}
          </span>
        )}
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {chapter.metadata.title}
      </h1>
      
      {chapter.metadata?.excerpt && (
        <p className="text-xl text-gray-600 mb-8">
          {chapter.metadata.excerpt}
        </p>
      )}
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: chapter.metadata.content }}
      />
      
      {chapter.metadata?.audio_file && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🎧 Аудио версия
          </h3>
          <audio controls className="w-full">
            <source src={chapter.metadata.audio_file.url} type="audio/mpeg" />
            Ваш браузер не поддерживает аудио элемент.
          </audio>
        </div>
      )}
    </article>
  );
}