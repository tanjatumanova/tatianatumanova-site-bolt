import { Service, PortfolioItem, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Съёмка',
    description: 'Профессиональная видеосъёмка для вашего бизнеса: рекламные ролики, репортажи, обзоры продукции',
    price: 'от 15 000 ₽',
    icon: 'video'
  },
  {
    id: '2',
    title: 'Монтаж',
    description: 'Качественный монтаж видео с вниманием к деталям и маркетинговым целям вашего проекта',
    price: 'от 10 000 ₽',
    icon: 'film'
  },
  {
    id: '3',
    title: 'Сценарии',
    description: 'Разработка сценариев, которые говорят с вашей аудиторией на понятном языке',
    price: 'от 5 000 ₽',
    icon: 'pen-tool'
  },
  {
    id: '4',
    title: 'Режиссура',
    description: 'Полное сопровождение проекта от идеи до финального видео',
    price: 'от 25 000 ₽',
    icon: 'clapperboard'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Рекламный ролик для кофейни',
    category: 'advertisement',
    description: 'Увеличение трафика в будние дни через атмосферное видео',
    result: '+23% посещаемости за первый месяц',
    videoUrl: 'https://vimeo.com/123456789',
    thumbnail: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Репортаж с бизнес-конференции',
    category: 'reportage',
    description: 'Динамичная съёмка ключевых моментов мероприятия',
    videoUrl: 'https://vimeo.com/123456790',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Обучающий курс для онлайн-школы',
    category: 'educational',
    description: 'Серия видеоуроков с профессиональной постановкой света',
    videoUrl: 'https://vimeo.com/123456791',
    thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Видеообзор косметической продукции',
    category: 'product-reviews',
    description: 'Эстетичная презентация товаров для интернет-магазина',
    result: 'Конверсия в покупку выросла на 18%',
    videoUrl: 'https://vimeo.com/123456792',
    thumbnail: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Запись семинара для бизнес-тренера',
    category: 'seminars',
    description: 'Многокамерная съёмка с качественным звуком',
    videoUrl: 'https://vimeo.com/123456793',
    thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Промо салона красоты',
    category: 'advertisement',
    description: 'Стильное видео для социальных сетей и таргетированной рекламы',
    result: 'Стоимость заявки снизилась на 30%',
    videoUrl: 'https://vimeo.com/123456794',
    thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Петрова',
    company: 'Кофейня "Утро"',
    text: 'Татьяна создала видео, которое идеально передало атмосферу нашего заведения. Клиенты стали приходить чаще, многие говорят, что увидели ролик в Instagram.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    name: 'Дмитрий Соколов',
    company: 'Онлайн-школа маркетинга',
    text: 'Работали над серией обучающих видео. Всё сделано в срок, качественно и в рамках бюджета. Татьяна отлично понимает задачи бизнеса.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    name: 'Елена Воронина',
    company: 'Салон красоты "Гармония"',
    text: 'Рекламное видео получилось очень стильным и современным. Заявок стало больше, а самое главное — пришли именно наши клиенты.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];
