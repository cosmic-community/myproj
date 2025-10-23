import { getChapters, getCategories } from '@/lib/cosmic';
import ChaptersList from '@/components/ChaptersList';
import CategoryFilter from '@/components/CategoryFilter';

export const revalidate = 60;

export const metadata = {
  title: 'Главы | Вера в Священные Книги: Коран',
  description: 'Образовательные материалы о Коране, священных книгах и исламе',
};

export default async function ChaptersPage() {
  const [chapters, categories] = await Promise.all([
    getChapters(),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📖 Образовательные Главы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробные материалы о Коране, священных книгах и исламской вере
          </p>
        </div>
        
        <CategoryFilter categories={categories} />
        
        <ChaptersList chapters={chapters} />
      </div>
    </div>
  );
}