interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6F1] via-[#F5EFE7] to-[#E8DED0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#10B981]/5 via-transparent to-transparent" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-[#3C3C3B] leading-tight font-bold">
            Татьяна Туманова
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-[#5C5C5A]">
            Видеограф и продюсер для малого бизнеса
          </p>

          <p className="text-lg sm:text-xl text-[#6C6C6A] max-w-2xl mx-auto leading-relaxed">
            Создаю видео, которые приносят клиентов, а не просто просмотры
          </p>

          <button
            onClick={() => onNavigate('portfolio')}
            className="mt-8 px-8 py-4 bg-[#A68C6D] text-white rounded-full hover:bg-[#8F7759] transition-all duration-200 shadow-lg text-lg font-medium"
          >
            Посмотреть портфолио
          </button>
        </div>
      </div>
    </section>
  );
}
