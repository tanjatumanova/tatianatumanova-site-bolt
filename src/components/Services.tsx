import { Video, Film, PenTool, Clapperboard, LucideIcon } from 'lucide-react';
import { services } from '../data/content';

const iconMap: Record<string, LucideIcon> = {
  video: Video,
  film: Film,
  'pen-tool': PenTool,
  clapperboard: Clapperboard
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-[#FAF6F1]/30 to-[#FAF6F1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#3C3C3B] mb-6 font-bold">
            Услуги
          </h2>
          <p className="text-lg text-[#5C5C5A]">
            Полный цикл производства видео — от идеи до финального ролика
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-200 border border-[#A68C6D]/5 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981]/10 to-[#A68C6D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#10B981] group-hover:to-[#A68C6D] transition-all duration-200">
                  <Icon className="text-[#A68C6D] group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-serif text-[#3C3C3B] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#5C5C5A] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <p className="text-[#A68C6D] font-semibold text-lg">
                  {service.price}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#5C5C5A] text-lg mb-6">
            Нужна консультация или индивидуальное предложение?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#A68C6D] text-white rounded-full hover:bg-[#8F7759] transition-all duration-200 shadow-lg text-lg font-medium"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </section>
  );
}
