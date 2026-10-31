// Папки портфолио. Файлы: images/works/<папка>/<серия>/NN.jpg, превью — NN-t.jpg.
// covers — номера файлов (с 0) для обложки папки; по умолчанию первые три.
const FOLDERS = [
  {
    "id": "brand",
    "title": "айдентика",
    "series": [
      {
        "id": "vici",
        "title": "Vici Pinnacle — баскетбольный клуб",
        "text": "Айдентика баскетбольного клуба, в которой спортивный характер сочетается со сдержанной эстетикой. Лаконичная палитра, выразительная типографика и фирменная графика формируют цельный визуальный образ, который выходит за пределы спортивной площадки.",
        "files": [
          "images/works/brand/vici/01.jpg",
          "images/works/brand/vici/02.jpg",
          "images/works/brand/vici/03.jpg",
          "images/works/brand/vici/04.jpg",
          "images/works/brand/vici/05.jpg",
          "images/works/brand/vici/06.jpg",
          "images/works/brand/vici/07.jpg",
          "images/works/brand/vici/08.jpg",
          "images/works/brand/vici/09.jpg",
          "images/works/brand/vici/10.jpg",
          "images/works/brand/vici/11.jpg",
          "images/works/brand/vici/12.jpg"
        ]
      },
      {
        "id": "zvezdy",
        "title": "Звёзды РАНХиГС",
        "text": "Визуальное оформление конкурса «Звёзды РАНХиГС Санкт-Петербург — 2025».\nЕдиная графическая система объединяет печатные и цифровые материалы, создавая узнаваемый образ события и подчёркивая его торжественный характер.",
        "files": [
          "images/works/brand/zvezdy/01.jpg",
          "images/works/brand/zvezdy/02.jpg",
          "images/works/brand/zvezdy/03.jpg",
          "images/works/brand/zvezdy/04.jpg",
          "images/works/brand/zvezdy/05.jpg",
          "images/works/brand/zvezdy/06.jpg",
          "images/works/brand/zvezdy/07.jpg",
          "images/works/brand/zvezdy/08.jpg",
          "images/works/brand/zvezdy/09.jpg",
          "images/works/brand/zvezdy/10.jpg",
          "images/works/brand/zvezdy/11.jpg",
          "images/works/brand/zvezdy/12.jpg",
          "images/works/brand/zvezdy/13.jpg",
          "images/works/brand/zvezdy/14.jpg",
          "images/works/brand/zvezdy/15.jpg"
        ]
      },
      {
        "id": "lumina",
        "title": "lumina — уходовая косметика",
        "text": "Айдентика бренда уходовой косметики, вдохновлённая эстетикой естественности и визуальной лёгкости. Утончённая типографика, минимализм и внимание к деталям создают спокойный, современный образ бренда.",
        "files": [
          "images/works/brand/lumina/01.jpg",
          "images/works/brand/lumina/02.jpg",
          "images/works/brand/lumina/03.jpg",
          "images/works/brand/lumina/04.jpg",
          "images/works/brand/lumina/05.jpg",
          "images/works/brand/lumina/06.jpg",
          "images/works/brand/lumina/07.jpg",
          "images/works/brand/lumina/08.jpg",
          "images/works/brand/lumina/09.jpg",
          "images/works/brand/lumina/10.jpg",
          "images/works/brand/lumina/11.jpg",
          "images/works/brand/lumina/13.jpg",
          "images/works/brand/lumina/14.jpg"
        ]
      },
      {
        "id": "venera",
        "title": "(maison) venera — бренд свечей",
        "text": "Визуальная история бренда свечей, построенная на эстетике простых вещей и внимании к деталям. Лаконичная упаковка, в которой настроение бренда передаётся через цвет, типографику и минималистичные решения.",
        "files": [
          "images/works/brand/venera/01.jpg",
          "images/works/brand/venera/02.jpg",
          "images/works/brand/venera/03.jpg",
          "images/works/brand/venera/04.jpg",
          "images/works/brand/venera/05.jpg",
          "images/works/brand/venera/06.jpg",
          "images/works/brand/venera/07.jpg",
          "images/works/brand/venera/08.jpg",
          "images/works/brand/venera/09.jpg",
          "images/works/brand/venera/10.jpg",
          "images/works/brand/venera/11.jpg"
        ]
      }
    ]
  },
  {
    "id": "print",
    "title": "полиграфия",
    "coverFiles": [
      "images/works/print/card-8/02.jpg",
      "images/works/print/card-23/01.jpg",
      "images/works/print/card-8/01.jpg"
    ],
    "series": [
      {
        "id": "room-coffee",
        "title": "меню room coffee",
        "text": "",
        "files": [
          "images/works/print/room-coffee/01.jpg",
          "images/works/print/room-coffee/02.jpg"
        ]
      },
      {
        "id": "lunch",
        "title": "меню Виновник (бизнес-ланч)",
        "text": "",
        "files": [
          "images/works/print/lunch/01.jpg",
          "images/works/print/lunch/02.jpg"
        ]
      },
      {
        "id": "vinovnik",
        "title": "меню Виновник (алкоголь)",
        "text": "",
        "files": [
          "images/works/print/vinovnik/01.jpg",
          "images/works/print/vinovnik/02.jpg",
          "images/works/print/vinovnik/03.jpg",
          "images/works/print/vinovnik/04.jpg",
          "images/works/print/vinovnik/05.jpg",
          "images/works/print/vinovnik/06.jpg",
          "images/works/print/vinovnik/07.jpg",
          "images/works/print/vinovnik/08.jpg"
        ]
      },
      {
        "id": "vinovnik-menu",
        "title": "меню Виновник",
        "text": "",
        "files": [
          "images/works/print/vinovnik-menu/01.jpg",
          "images/works/print/vinovnik-menu/02.jpg",
          "images/works/print/vinovnik-menu/03.jpg",
          "images/works/print/vinovnik-menu/04.jpg"
        ]
      },
      {
        "id": "bar404",
        "title": "меню Бар 404",
        "text": "",
        "files": [
          "images/works/print/bar404/01.jpg",
          "images/works/print/bar404/02.jpg"
        ]
      },
      {
        "id": "thanks",
        "title": "благодарственные письма",
        "text": "",
        "files": [
          "images/works/print/thanks/01.jpg",
          "images/works/print/thanks-tpl/01.jpg",
          "images/works/print/diploma/01.jpg"
        ]
      },
      {
        "id": "posters",
        "title": "постеры",
        "text": "",
        "files": [
          "images/works/print/posters/01.jpg",
          "images/works/print/poster-car/01.jpg"
        ]
      },
      {
        "id": "fiero",
        "title": "листовки Бар 404",
        "text": "",
        "files": [
          "images/works/print/fiero/01.jpg",
          "images/works/print/fiero/02.jpg",
          "images/works/print/fiero/03.jpg",
          "images/works/print/fiero/04.jpg",
          "images/works/print/fiero/05.jpg"
        ]
      },
      {
        "id": "stickers",
        "title": "наклейки Пулково",
        "text": "",
        "files": [
          "images/works/print/stickers/01.jpg"
        ]
      },
      {
        "id": "card-23",
        "title": "открытка 23 февраля",
        "text": "",
        "files": [
          "images/works/print/card-23/01.jpg",
          "images/works/print/card-23/02.jpg"
        ]
      },
      {
        "id": "card-8",
        "title": "открытка 8 марта",
        "text": "",
        "files": [
          "images/works/print/card-8/01.jpg",
          "images/works/print/card-8/02.jpg"
        ]
      }
    ]
  },
  {
    "id": "posts",
    "title": "social media",
    "coverFiles": [
      "images/works/posts/lil/01.jpg",
      "images/works/posts/jin/01.jpg",
      "images/works/posts/sport-films/01.jpg"
    ],
    "series": [
      {
        "id": "sport-films",
        "title": "карусель для instagram*",
        "text": "",
        "files": [
          "images/works/posts/clinic/01.png",
          "images/works/posts/clinic/02.png",
          "images/works/posts/clinic/03.png",
          "images/works/posts/clinic/04.png"
        ]
      },
      {
        "id": "jin",
        "title": "истории для instagram*",
        "text": "",
        "files": [
          "images/works/posts/jin/01.jpg",
          "images/works/posts/jin/02.jpg",
          "images/works/posts/jin/03.jpg"
        ]
      },
      {
        "id": "lil",
        "title": "афиша Пулково",
        "text": "",
        "files": [
          "images/works/posts/lil/01.jpg"
        ]
      },
      {
        "id": "idol",
        "cover": "images/works/posts/idol/02.jpg",
        "title": "idol main page banners",
        "text": "",
        "files": [
          "images/works/posts/idol/01.jpg",
          "images/works/posts/idol/02.jpg",
          "images/works/posts/idol/03.jpg"
        ]
      },
      {
        "id": "post",
        "title": "пост для telegram",
        "text": "",
        "files": [
          "images/works/posts/post/01.jpg",
          "images/works/posts/post/02.jpg"
        ]
      }
    ]
  },
  {
    "id": "pres",
    "title": "презентации",
    "series": [
      {
        "id": "pulkovo",
        "title": "концерт на парковке Пулково",
        "text": "",
        "files": [
          "images/works/pres/pulkovo/01.jpg",
          "images/works/pres/pulkovo/02.jpg",
          "images/works/pres/pulkovo/03.jpg",
          "images/works/pres/pulkovo/04.jpg",
          "images/works/pres/pulkovo/05.jpg",
          "images/works/pres/pulkovo/06.jpg",
          "images/works/pres/pulkovo/07.jpg",
          "images/works/pres/pulkovo/08.jpg",
          "images/works/pres/pulkovo/09.jpg",
          "images/works/pres/pulkovo/10.jpg",
          "images/works/pres/pulkovo/11.jpg",
          "images/works/pres/pulkovo/12.jpg",
          "images/works/pres/pulkovo/13.jpg"
        ]
      },
      {
        "id": "slots",
        "title": "неудобные слоты Пулково",
        "text": "",
        "files": [
          "images/works/pres/slots/01.jpg",
          "images/works/pres/slots/02.jpg",
          "images/works/pres/slots/03.jpg",
          "images/works/pres/slots/04.jpg",
          "images/works/pres/slots/05.jpg",
          "images/works/pres/slots/06.jpg",
          "images/works/pres/slots/07.jpg",
          "images/works/pres/slots/08.jpg",
          "images/works/pres/slots/09.jpg",
          "images/works/pres/slots/10.jpg",
          "images/works/pres/slots/11.jpg",
          "images/works/pres/slots/12.jpg",
          "images/works/pres/slots/13.jpg"
        ]
      },
      {
        "id": "tz",
        "title": "презентация проектов Gnezdo",
        "text": "",
        "files": [
          "images/works/pres/tz/01.jpg",
          "images/works/pres/tz/02.jpg",
          "images/works/pres/tz/03.jpg",
          "images/works/pres/tz/04.jpg"
        ]
      },
      {
        "id": "territory",
        "title": "территория спорта",
        "text": "",
        "files": [
          "images/works/pres/territory/01.jpg",
          "images/works/pres/territory/02.jpg",
          "images/works/pres/territory/03.jpg",
          "images/works/pres/territory/04.jpg",
          "images/works/pres/territory/05.jpg",
          "images/works/pres/territory/06.jpg",
          "images/works/pres/territory/07.jpg",
          "images/works/pres/territory/08.jpg",
          "images/works/pres/territory/09.jpg",
          "images/works/pres/territory/10.jpg",
          "images/works/pres/territory/11.jpg",
          "images/works/pres/territory/12.jpg",
          "images/works/pres/territory/13.jpg",
          "images/works/pres/territory/14.jpg",
          "images/works/pres/territory/15.jpg",
          "images/works/pres/territory/16.jpg",
          "images/works/pres/territory/17.jpg",
          "images/works/pres/territory/18.jpg"
        ]
      },
      {
        "id": "vk",
        "title": "оформление vk (гайдлайн)",
        "text": "",
        "files": [
          "images/works/pres/vk/01.jpg",
          "images/works/pres/vk/02.jpg",
          "images/works/pres/vk/03.jpg",
          "images/works/pres/vk/04.jpg",
          "images/works/pres/vk/05.jpg",
          "images/works/pres/vk/06.jpg",
          "images/works/pres/vk/07.jpg",
          "images/works/pres/vk/08.jpg",
          "images/works/pres/vk/09.jpg",
          "images/works/pres/vk/10.jpg",
          "images/works/pres/vk/11.jpg",
          "images/works/pres/vk/12.jpg"
        ]
      },
      {
        "id": "creators",
        "title": "led medialab (креаторы Пулково)",
        "text": "",
        "files": [
          "images/works/pres/creators/01.jpg",
          "images/works/pres/creators/02.jpg",
          "images/works/pres/creators/03.jpg",
          "images/works/pres/creators/04.jpg",
          "images/works/pres/creators/05.jpg",
          "images/works/pres/creators/06.jpg",
          "images/works/pres/creators/07.jpg",
          "images/works/pres/creators/08.jpg",
          "images/works/pres/creators/09.jpg"
        ]
      }
    ]
  },
  {
    "id": "ai",
    "title": "ai-generated",
    "series": [
      {
        "id": "ballet",
        "title": "fashion series «Ballet Class»",
        "text": "",
        "files": [
          "images/works/ai/ballet/01.jpg",
          "images/works/ai/ballet/02.jpg",
          "images/works/ai/ballet/03.jpg",
          "images/works/ai/ballet/04.jpg",
          "images/works/ai/ballet/05.jpg",
          "images/works/ai/ballet/06.jpg",
          "images/works/ai/ballet/07.jpg"
        ]
      },
      {
        "id": "chinese",
        "title": "Chinese Culture",
        "text": "",
        "files": [
          "images/works/ai/chinese/01.jpg",
          "images/works/ai/chinese/02.jpg",
          "images/works/ai/chinese/03.jpg",
          "images/works/ai/chinese/04.jpg",
          "images/works/ai/chinese/05.jpg",
          "images/works/ai/chinese/06.jpg"
        ]
      },
      {
        "id": "summer",
        "title": "Summer vibes",
        "text": "",
        "files": [
          "images/works/ai/summer/01.jpg",
          "images/works/ai/summer/02.jpg",
          "images/works/ai/summer/03.jpg",
          "images/works/ai/summer/04.jpg",
          "images/works/ai/summer/05.jpg",
          "images/works/ai/summer/06.jpg",
          "images/works/ai/summer/07.jpg",
          "images/works/ai/summer/08.jpg",
          "images/works/ai/summer/09.jpg"
        ]
      }
    ]
  }
];
// Пропорции кадров (ширина/высота) — чтобы сетка не прыгала при загрузке
const RATIO = {"images/works/brand/vici/01.jpg": 0.8871, "images/works/brand/vici/02.jpg": 1.1191, "images/works/brand/vici/03.jpg": 1.8325, "images/works/brand/vici/04.jpg": 1.8301, "images/works/brand/vici/05.jpg": 0.8879, "images/works/brand/vici/06.jpg": 1.8018, "images/works/brand/vici/07.jpg": 1.8325, "images/works/brand/vici/08.jpg": 1.4894, "images/works/brand/vici/09.jpg": 1.341, "images/works/brand/vici/10.jpg": 1.8018, "images/works/brand/vici/11.jpg": 0.8636, "images/works/brand/vici/12.jpg": 0.8871, "images/works/brand/zvezdy/01.jpg": 0.7679, "images/works/brand/zvezdy/02.jpg": 1.7789, "images/works/brand/zvezdy/03.jpg": 1.7789, "images/works/brand/zvezdy/04.jpg": 0.9593, "images/works/brand/zvezdy/05.jpg": 1.7789, "images/works/brand/zvezdy/06.jpg": 2.7451, "images/works/brand/zvezdy/07.jpg": 2.7451, "images/works/brand/zvezdy/08.jpg": 0.7679, "images/works/brand/zvezdy/09.jpg": 1.7789, "images/works/brand/zvezdy/10.jpg": 0.7679, "images/works/brand/zvezdy/11.jpg": 1.7789, "images/works/brand/zvezdy/12.jpg": 1.7789, "images/works/brand/zvezdy/13.jpg": 0.7679, "images/works/brand/zvezdy/14.jpg": 0.7679, "images/works/brand/zvezdy/15.jpg": 0.7679, "images/works/brand/lumina/01.jpg": 0.8464, "images/works/brand/lumina/02.jpg": 1.275, "images/works/brand/lumina/03.jpg": 1.275, "images/works/brand/lumina/04.jpg": 2.2436, "images/works/brand/lumina/05.jpg": 1.7789, "images/works/brand/lumina/06.jpg": 1.275, "images/works/brand/lumina/07.jpg": 1.275, "images/works/brand/lumina/08.jpg": 1.275, "images/works/brand/lumina/09.jpg": 1.275, "images/works/brand/lumina/10.jpg": 1.275, "images/works/brand/lumina/11.jpg": 1.275, "images/works/brand/lumina/12.jpg": 1.275, "images/works/brand/lumina/13.jpg": 1.275, "images/works/brand/lumina/14.jpg": 1.275, "images/works/brand/venera/01.jpg": 0.8371, "images/works/brand/venera/02.jpg": 1.7789, "images/works/brand/venera/03.jpg": 1.7789, "images/works/brand/venera/04.jpg": 0.7007, "images/works/brand/venera/05.jpg": 1.7789, "images/works/brand/venera/06.jpg": 1.7789, "images/works/brand/venera/07.jpg": 1.7789, "images/works/brand/venera/08.jpg": 1.7789, "images/works/brand/venera/09.jpg": 1.7789, "images/works/brand/venera/10.jpg": 1.7789, "images/works/brand/venera/11.jpg": 1.7789, "images/works/print/card-8/02.jpg": 0.7044, "images/works/print/card-23/01.jpg": 0.7044, "images/works/print/card-8/01.jpg": 0.7044, "images/works/print/room-coffee/01.jpg": 0.7067, "images/works/print/room-coffee/02.jpg": 0.7067, "images/works/print/lunch/01.jpg": 0.7067, "images/works/print/lunch/02.jpg": 0.7067, "images/works/print/vinovnik/01.jpg": 0.7067, "images/works/print/vinovnik/02.jpg": 0.7067, "images/works/print/vinovnik/03.jpg": 0.7067, "images/works/print/vinovnik/04.jpg": 0.7067, "images/works/print/vinovnik/05.jpg": 0.7067, "images/works/print/vinovnik/06.jpg": 0.7067, "images/works/print/vinovnik/07.jpg": 0.7067, "images/works/print/vinovnik/08.jpg": 0.7067, "images/works/print/vinovnik-menu/01.jpg": 0.7067, "images/works/print/vinovnik-menu/02.jpg": 0.7067, "images/works/print/vinovnik-menu/03.jpg": 0.7067, "images/works/print/vinovnik-menu/04.jpg": 0.7067, "images/works/print/bar404/01.jpg": 0.7067, "images/works/print/bar404/02.jpg": 0.7067, "images/works/print/thanks/01.jpg": 0.7067, "images/works/print/thanks-tpl/01.jpg": 0.7067, "images/works/print/diploma/01.jpg": 0.7067, "images/works/print/posters/01.jpg": 0.6656, "images/works/print/poster-car/01.jpg": 0.6656, "images/works/print/fiero/01.jpg": 0.74, "images/works/print/fiero/02.jpg": 0.74, "images/works/print/fiero/03.jpg": 0.74, "images/works/print/fiero/04.jpg": 0.74, "images/works/print/fiero/05.jpg": 0.74, "images/works/print/stickers/01.jpg": 0.8889, "images/works/print/card-23/02.jpg": 0.7044, "images/works/posts/lil/01.jpg": 0.7067, "images/works/posts/jin/01.jpg": 0.5622, "images/works/posts/sport-films/01.jpg": 0.75, "images/works/posts/sport-films/02.jpg": 0.75, "images/works/posts/sport-films/03.jpg": 0.75, "images/works/posts/sport-films/04.jpg": 0.75, "images/works/posts/sport-films/05.jpg": 0.75, "images/works/posts/sport-films/06.jpg": 0.75, "images/works/posts/jin/02.jpg": 0.5622, "images/works/posts/jin/03.jpg": 0.5622, "images/works/posts/idol/01.jpg": 1.7787, "images/works/posts/idol/02.jpg": 0.6667, "images/works/posts/idol/03.jpg": 1.7787, "images/works/posts/post/01.jpg": 1.7787, "images/works/posts/post/02.jpg": 1.7787, "images/works/posts/posters-04/01.jpg": 1.505, "images/works/posts/posters/01.jpg": 1.5075, "images/works/pres/pulkovo/01.jpg": 1.7789, "images/works/pres/pulkovo/02.jpg": 1.7789, "images/works/pres/pulkovo/03.jpg": 1.7789, "images/works/pres/pulkovo/04.jpg": 1.7789, "images/works/pres/pulkovo/05.jpg": 1.7789, "images/works/pres/pulkovo/06.jpg": 1.7789, "images/works/pres/pulkovo/07.jpg": 1.7789, "images/works/pres/pulkovo/08.jpg": 1.7789, "images/works/pres/pulkovo/09.jpg": 1.7789, "images/works/pres/pulkovo/10.jpg": 1.7789, "images/works/pres/pulkovo/11.jpg": 1.7789, "images/works/pres/pulkovo/12.jpg": 1.7789, "images/works/pres/pulkovo/13.jpg": 1.7789, "images/works/pres/slots/01.jpg": 1.7789, "images/works/pres/slots/02.jpg": 1.7789, "images/works/pres/slots/03.jpg": 1.7789, "images/works/pres/slots/04.jpg": 1.7789, "images/works/pres/slots/05.jpg": 1.7789, "images/works/pres/slots/06.jpg": 1.7789, "images/works/pres/slots/07.jpg": 1.7789, "images/works/pres/slots/08.jpg": 1.7789, "images/works/pres/slots/09.jpg": 1.7789, "images/works/pres/slots/10.jpg": 1.7789, "images/works/pres/slots/11.jpg": 1.7789, "images/works/pres/slots/12.jpg": 1.7789, "images/works/pres/slots/13.jpg": 1.7789, "images/works/pres/tz/01.jpg": 1.7789, "images/works/pres/tz/02.jpg": 1.7789, "images/works/pres/tz/03.jpg": 1.7789, "images/works/pres/tz/04.jpg": 1.7789, "images/works/pres/territory/01.jpg": 1.7789, "images/works/pres/territory/02.jpg": 1.7789, "images/works/pres/territory/03.jpg": 1.7789, "images/works/pres/territory/04.jpg": 1.7789, "images/works/pres/territory/05.jpg": 1.7789, "images/works/pres/territory/06.jpg": 1.7789, "images/works/pres/territory/07.jpg": 1.7789, "images/works/pres/territory/08.jpg": 1.7789, "images/works/pres/territory/09.jpg": 1.7789, "images/works/pres/territory/10.jpg": 1.7789, "images/works/pres/territory/11.jpg": 1.7789, "images/works/pres/territory/12.jpg": 1.7789, "images/works/pres/territory/13.jpg": 1.7789, "images/works/pres/territory/14.jpg": 1.7789, "images/works/pres/territory/15.jpg": 1.7789, "images/works/pres/territory/16.jpg": 1.7789, "images/works/pres/territory/17.jpg": 1.7789, "images/works/pres/territory/18.jpg": 1.7789, "images/works/pres/vk/01.jpg": 1.7789, "images/works/pres/vk/02.jpg": 1.7789, "images/works/pres/vk/03.jpg": 1.7789, "images/works/pres/vk/04.jpg": 1.7789, "images/works/pres/vk/05.jpg": 1.7789, "images/works/pres/vk/06.jpg": 1.7789, "images/works/pres/vk/07.jpg": 1.7789, "images/works/pres/vk/08.jpg": 1.7789, "images/works/pres/vk/09.jpg": 1.7789, "images/works/pres/vk/10.jpg": 1.7789, "images/works/pres/vk/11.jpg": 1.7789, "images/works/pres/vk/12.jpg": 1.7789, "images/works/pres/creators/01.jpg": 1.7789, "images/works/pres/creators/02.jpg": 1.7789, "images/works/pres/creators/03.jpg": 1.7789, "images/works/pres/creators/04.jpg": 1.7789, "images/works/pres/creators/05.jpg": 1.7789, "images/works/pres/creators/06.jpg": 1.7789, "images/works/pres/creators/07.jpg": 1.7789, "images/works/pres/creators/08.jpg": 1.7789, "images/works/pres/creators/09.jpg": 1.7789, "images/works/ai/ballet/01.jpg": 0.7464, "images/works/ai/ballet/02.jpg": 0.7464, "images/works/ai/ballet/03.jpg": 0.7464, "images/works/ai/ballet/04.jpg": 0.7464, "images/works/ai/ballet/05.jpg": 0.7464, "images/works/ai/ballet/06.jpg": 0.7464, "images/works/ai/ballet/07.jpg": 0.7464, "images/works/ai/chinese/01.jpg": 0.7464, "images/works/ai/chinese/02.jpg": 0.7464, "images/works/ai/chinese/03.jpg": 0.7464, "images/works/ai/chinese/04.jpg": 0.7464, "images/works/ai/chinese/05.jpg": 0.7464, "images/works/ai/chinese/06.jpg": 0.7464, "images/works/ai/summer/01.jpg": 0.7464, "images/works/ai/summer/02.jpg": 0.7464, "images/works/ai/summer/03.jpg": 0.7464, "images/works/ai/summer/04.jpg": 0.7464, "images/works/ai/summer/05.jpg": 0.7464, "images/works/ai/summer/06.jpg": 0.7464, "images/works/ai/summer/07.jpg": 0.7464, "images/works/ai/summer/08.jpg": 0.7464, "images/works/ai/summer/09.jpg": 0.7464};
