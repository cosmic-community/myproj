import { getResources } from '@/lib/cosmic';
import ResourcesList from '@/components/ResourcesList';
import ResourceTypeFilter from '@/components/ResourceTypeFilter';

export const revalidate = 60;

export const metadata = {
  title: 'Ресурсы | Вера в Священные Книги: Коран',
  description: 'Библиотека образовательных ресурсов: видео, аудио, документы о Коране',
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📚 Библиотека Ресурсов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Видео, аудио, документы для изучения Корана
          </p>
        </div>
        
        <ResourceTypeFilter />
        
        <ResourcesList resources={resources} />
      </div>
    </div>
  );
}