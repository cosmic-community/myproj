import { getFeaturedChapters, getQuotes, getCategories } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import FeaturedChapters from '@/components/FeaturedChapters';
import QuotesCarousel from '@/components/QuotesCarousel';
import CategoriesGrid from '@/components/CategoriesGrid';
import StatsSection from '@/components/StatsSection';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [featuredChapters, quotes, categories] = await Promise.all([
    getFeaturedChapters(),
    getQuotes(),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <StatsSection />
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">
            📚 Избранные Главы
          </h2>
          <p className="section-subtitle text-center">
            Начните свое путешествие с этих образовательных материалов
          </p>
          <FeaturedChapters chapters={featuredChapters} />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">
            💬 Аяты из Корана
          </h2>
          <p className="section-subtitle text-center">
            Прекрасные слова божественного откровения
          </p>
          <QuotesCarousel quotes={quotes} />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">
            🏷️ Категории
          </h2>
          <p className="section-subtitle text-center">
            Исследуйте контент по темам
          </p>
          <CategoriesGrid categories={categories} />
        </div>
      </section>
    </div>
  );
}