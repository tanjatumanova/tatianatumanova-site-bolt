import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-[#FAF6F1] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#3C3C3B] mb-6 font-bold">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-[#5C5C5A]">
            Что говорят о работе со мной
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-200 border border-[#A68C6D]/5"
            >
              <div className="flex items-start space-x-1 mb-6">
                <Quote className="text-[#A68C6D]/30" size={32} />
              </div>

              <p className="text-[#5C5C5A] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-[#A68C6D]/10">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-[#3C3C3B]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#A68C6D]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
