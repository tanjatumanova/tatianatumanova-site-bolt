import { useState } from 'react';
import { Play, TrendingUp } from 'lucide-react';
import { portfolioItems } from '../data/content';
import { PortfolioCategory } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const categories = [
    { id: 'all' as PortfolioCategory, label: 'Все работы' },
    { id: 'advertisement' as PortfolioCategory, label: 'Реклама' },
    { id: 'reportage' as PortfolioCategory, label: 'Репортаж' },
    { id: 'educational' as PortfolioCategory, label: 'Обучающее' },
    { id: 'seminars' as PortfolioCategory, label: 'Семинары' },
    { id: 'product-reviews' as PortfolioCategory, label: 'Обзоры' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#3C3C3B] mb-6 font-bold">
            Портфолио
          </h2>
          <p className="text-lg text-[#5C5C5A]">
            Видео, которые работают на результат
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#A68C6D] text-white shadow-lg'
                  : 'bg-[#FAF6F1] text-[#5C5C5A] hover:bg-[#A68C6D]/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-200 border border-[#A68C6D]/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="text-[#A68C6D]" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-[#3C3C3B] group-hover:text-[#A68C6D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#5C5C5A] text-sm leading-relaxed">
                  {item.description}
                </p>

                {item.result && (
                  <div className="flex items-start space-x-2 pt-2">
                    <TrendingUp className="text-[#A68C6D] flex-shrink-0 mt-1" size={18} />
                    <p className="text-[#A68C6D] font-medium text-sm">
                      {item.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
