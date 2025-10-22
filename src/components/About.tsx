export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FAF6F1]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#A68C6D]/10">
              <img
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Татьяна Туманова"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-[#10B981]/10 to-[#A68C6D]/10 rounded-3xl -z-10 blur-sm" />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#3C3C3B] font-bold">
              Обо мне
            </h2>

            <div className="space-y-4 text-[#5C5C5A] text-lg leading-relaxed">
              <p>
                Я создаю видео, которые помогают бизнесу говорить с клиентом на его языке.
              </p>

              <p>
                Работаю быстро, в рамках бюджета и понимаю маркетинговые цели заказчика.
                Каждый проект — это не просто красивая картинка, а инструмент, который приносит реальные результаты.
              </p>

              <p>
                Моя специализация — видео для малого и среднего бизнеса: кофейни, салоны,
                онлайн-школы, эксперты. Я знаю, как сделать так, чтобы ваше видео
                не затерялось в ленте, а привлекло внимание нужной аудитории.
              </p>

              <p className="text-[#A68C6D] font-medium">
                Использую современные инструменты, включая генеративное видео,
                для достижения максимального эффекта при разумном бюджете.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
