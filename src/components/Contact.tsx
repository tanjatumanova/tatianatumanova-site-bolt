import { useState } from 'react';
import { Send, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', telegram: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#3C3C3B] mb-6 font-bold">
              Контакты
            </h2>
            <p className="text-lg text-[#5C5C5A] max-w-2xl mx-auto">
              Расскажите, какое видео вам нужно — и я помогу сделать его простым,
              понятным и работающим
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3C3C3B] mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#A68C6D]/20 focus:border-[#A68C6D] focus:outline-none focus:ring-2 focus:ring-[#A68C6D]/20 transition-colors bg-[#FAF6F1]"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#3C3C3B] mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#A68C6D]/20 focus:border-[#A68C6D] focus:outline-none focus:ring-2 focus:ring-[#A68C6D]/20 transition-colors bg-[#FAF6F1]"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-[#3C3C3B] mb-2">
                    Telegram
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#A68C6D]/20 focus:border-[#A68C6D] focus:outline-none focus:ring-2 focus:ring-[#A68C6D]/20 transition-colors bg-[#FAF6F1]"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3C3C3B] mb-2">
                    Краткое описание проекта *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#A68C6D]/20 focus:border-[#A68C6D] focus:outline-none focus:ring-2 focus:ring-[#A68C6D]/20 transition-colors bg-[#FAF6F1] resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#A68C6D] text-white rounded-full hover:bg-[#8F7759] transition-all duration-200 shadow-lg text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Отправка...</span>
                  ) : (
                    <>
                      <span>Отправить заявку</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                    Спасибо! Я свяжусь с вами в ближайшее время.
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-6 lg:pl-8">
              <div>
                <h3 className="text-2xl font-serif text-[#3C3C3B] mb-6 font-semibold">
                  Свяжитесь со мной
                </h3>
                <p className="text-[#5C5C5A] leading-relaxed mb-8">
                  Выберите удобный способ связи. Отвечаю обычно в течение часа
                  в рабочее время.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#FAF6F1] rounded-2xl hover:bg-[#A68C6D]/10 transition-colors group border border-[#A68C6D]/5"
                >
                  <div className="w-12 h-12 bg-[#A68C6D]/10 rounded-full flex items-center justify-center group-hover:bg-[#A68C6D] transition-colors">
                    <MessageCircle className="text-[#A68C6D] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-[#3C3C3B]">Telegram</p>
                    <p className="text-sm text-[#5C5C5A]">Быстрая связь</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/79999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#FAF6F1] rounded-2xl hover:bg-[#A68C6D]/10 transition-colors group border border-[#A68C6D]/5"
                >
                  <div className="w-12 h-12 bg-[#A68C6D]/10 rounded-full flex items-center justify-center group-hover:bg-[#A68C6D] transition-colors">
                    <Phone className="text-[#A68C6D] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-[#3C3C3B]">WhatsApp</p>
                    <p className="text-sm text-[#5C5C5A]">+7 (999) 999-99-99</p>
                  </div>
                </a>

                <a
                  href="https://vk.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[#FAF6F1] rounded-2xl hover:bg-[#A68C6D]/10 transition-colors group border border-[#A68C6D]/5"
                >
                  <div className="w-12 h-12 bg-[#A68C6D]/10 rounded-full flex items-center justify-center group-hover:bg-[#A68C6D] transition-colors">
                    <MessageCircle className="text-[#A68C6D] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-[#3C3C3B]">ВКонтакте</p>
                    <p className="text-sm text-[#5C5C5A]">Сообщения</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
