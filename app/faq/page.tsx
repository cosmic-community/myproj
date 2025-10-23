import { getFAQs, getPopularFAQs } from '@/lib/cosmic';
import FAQList from '@/components/FAQList';
import PopularFAQs from '@/components/PopularFAQs';
import SearchBar from '@/components/SearchBar';

export const revalidate = 60;

export const metadata = {
  title: 'Вопросы и Ответы | Вера в Священные Книги: Коран',
  description: 'Часто задаваемые вопросы о Коране, исламе и священных книгах',
};

export default async function FAQPage() {
  const [allFaqs, popularFaqs] = await Promise.all([
    getFAQs(),
    getPopularFAQs(),
  ]);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ❓ Вопросы и Ответы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на часто задаваемые вопросы о Коране
          </p>
        </div>
        
        <SearchBar placeholder="Поиск вопросов..." />
        
        {popularFaqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🔥 Популярные Вопросы
            </h2>
            <PopularFAQs faqs={popularFaqs} />
          </section>
        )}
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Все Вопросы
          </h2>
          <FAQList faqs={allFaqs} />
        </section>
      </div>
    </div>
  );
}