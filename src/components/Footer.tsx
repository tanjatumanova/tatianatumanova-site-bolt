import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3C3C3B] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Татьяна Туманова</h3>
            <p className="text-white/70 leading-relaxed">
              Видеограф и продюсер для малого бизнеса.
              Создаю видео, которые работают.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#A68C6D]">Навигация</h4>
            <nav className="space-y-2">
              <a href="#portfolio" className="block text-white/70 hover:text-white transition-colors">
                Портфолио
              </a>
              <a href="#services" className="block text-white/70 hover:text-white transition-colors">
                Услуги
              </a>
              <a href="#testimonials" className="block text-white/70 hover:text-white transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="block text-white/70 hover:text-white transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#A68C6D]">Связь</h4>
            <div className="space-y-2 text-white/70">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://vk.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 flex items-center justify-center space-x-2">
            <span>© {currentYear} Татьяна Туманова</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Сделано с</span>
              <Heart size={14} fill="currentColor" className="text-[#A68C6D]" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
