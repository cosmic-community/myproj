// app/chapters/[slug]/page.tsx
import { getChapterBySlug, getChapters } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import ChapterContent from '@/components/ChapterContent';
import InteractiveElements from '@/components/InteractiveElements';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export async function generateStaticParams() {
  const chapters = await getChapters();
  
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = await getChapterBySlug(slug);
  
  if (!chapter) {
    return {
      title: 'Глава не найдена',
    };
  }
  
  return {
    title: `${chapter.metadata.title} | Вера в Священные Книги: Коран`,
    description: chapter.metadata.excerpt || chapter.metadata.title,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = await getChapterBySlug(slug);
  
  if (!chapter) {
    notFound();
  }
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/chapters" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад к главам
        </Link>
        
        <ChapterContent chapter={chapter} />
        
        {chapter.metadata.interactive_elements && (
          <InteractiveElements elements={chapter.metadata.interactive_elements} />
        )}
      </div>
    </div>
  );
}