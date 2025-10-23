import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📖</span>
              Вера в Священные Книги
            </h3>
            <p className="text-sm text-gray-400">
              Образовательная платформа о Коране и исламе на русском языке
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/chapters" className="hover:text-primary-400 transition-colors">
                  Главы
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary-400 transition-colors">
                  Ресурсы
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-400 transition-colors">
                  Вопросы и Ответы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">О проекте</h4>
            <p className="text-sm text-gray-400 mb-4">
              Мы стремимся предоставить качественную и доступную информацию о Коране для всех желающих изучать ислам.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1 text-gray-400">
            Создано с <Heart className="w-4 h-4 text-red-500 fill-current" /> используя{' '}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Cosmic
            </a>
            {' '}и Next.js
          </p>
          <p className="text-gray-500 mt-2">
            © {currentYear} Вера в Священные Книги. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}