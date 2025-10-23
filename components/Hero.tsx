import Link from 'next/link';
import { BookOpen, Video, HelpCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          📖 Вера в Священные Книги
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
          Изучайте Коран через интерактивные материалы
        </p>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Полная информация о священных книгах в исламе с видео, аудио и образовательными ресурсами на русском языке
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/chapters" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            <BookOpen className="w-5 h-5" />
            Начать изучение
          </Link>
          <Link href="/resources" className="btn-secondary bg-white/10 text-white hover:bg-white/20 border border-white/20">
            <Video className="w-5 h-5" />
            Смотреть ресурсы
          </Link>
          <Link href="/faq" className="btn-secondary bg-white/10 text-white hover:bg-white/20 border border-white/20">
            <HelpCircle className="w-5 h-5" />
            Вопросы и Ответы
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-6xl">☪️</div>
        <div className="absolute bottom-10 right-10 text-6xl">📿</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🕌</div>
        <div className="absolute top-1/3 right-1/4 text-4xl">📖</div>
      </div>
    </section>
  );
}