import type { Category } from '@/types';

interface CategoriesGridProps {
  categories: Category[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Нет категорий для отображения
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="card text-center group cursor-pointer"
          style={{
            borderTop: `4px solid ${category.metadata?.color || '#2ECC71'}`,
          }}
        >
          <div className="text-5xl mb-4">
            {category.metadata?.icon || '📖'}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {category.metadata.name}
          </h3>
          
          {category.metadata?.description && (
            <p className="text-gray-600 text-sm">
              {category.metadata.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}