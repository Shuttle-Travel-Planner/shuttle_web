/* Shuttle — bilingual content & state */
window.SHUTTLE_I18N = {
  tr: {
    nav: { how: "Nasıl Çalışır", features: "Özellikler", screens: "Ekranlar", download: "İndir" },
    hero: {
      badge: "Yakında · iOS & Android",
      title_1: "Hayalindeki yolculuğu",
      title_accent: "planla.",
      title_2: "Gerisini Shuttle halleder.",
      sub: "Shuttle, seyahat tercihlerini analiz eden ve sana özel günlük programlar oluşturan yapay zekâ destekli gezi planlayıcısı.",
      store_soon: "YAKINDA",
      store_app_small: "İndir",
      store_app_big: "App Store",
      store_play_small: "İndir",
      store_play_big: "Google Play",
      fc1_l: "Tahmini bütçe", fc1_v: "€830",
      fc2_l: "AI rota",        fc2_v: "Roma → Venedik",
      fc3_l: "Program",        fc3_v: "08:00 · Kolezyum",
      marquee: ["Roma", "Barselona", "Tokyo", "Bakü", "Stockholm", "Dubai", "Puebla", "Sydney", "Phuket", "Venedik"]
    },
    how: {
      eyebrow: "Nasıl çalışır?",
      title: "Bir kaç soru. Bir de fikir. Plan senin.",
      lede: "Altı adımda size özel bir gezi çıkarıyoruz. Yedincisinde yapay zekâ sahneye çıkıyor.",
      steps: [
        { emoji: "📍", h: "Nereye gidiyorsun?",        p: "Şehir veya ülke seç. Birden fazla yer ekleyebilirsin." },
        { emoji: "📅", h: "Ne zaman gidiyorsun?",      p: "Tarihleri ve günlük uygun saatlerini belirle." },
        { emoji: "💰", h: "Bütçen ne kadar?",          p: "Yaklaşık bir rakam yeter. Plan kendini buna göre şekillendirir." },
        { emoji: "🎯", h: "Ne yapmak istiyorsun?",     p: "Kültür, gastronomi, doğa, macera… hepsini veya birini seç." },
        { emoji: "👥", h: "Kiminle gidiyorsun?",       p: "Yalnız, çiftle, aileyle, arkadaşlarla — senin yolculuğun." },
        { emoji: "✍️", h: "Eklemek istediğin bir şey?", p: "“Venedik’te kanyon turu”, “sakin bir tatil”… açıkça yaz, dinliyoruz." }
      ],
      final: {
        num: "07",
        h: "AI 40 saniyede planını hazırlar.",
        p: "Rotalar hesaplanır, süreler dengelenir, ulaşım ve bütçe dağılımı çizilir. Sen gezmeye hazırlan."
      }
    },
    features: {
      eyebrow: "Özellikler",
      title: "Rehberin cebinde. Planlaman yapay zekâda.",
      lede: "Bir gezi uygulamasından bekleyeceğin her şey — ve biraz da fazlası.",
      cards: [
        { t: "Sadece sana özel plan.",  d: "Yapay zekâ; ilgi alanlarına, bütçene, ritmine göre günlük bir program kurar. Sonra istediğin kadar düzenleyebilirsin." },
        { t: "Saatlik program",          d: "Her aktivite için saat, süre, yorgunluk dengesi ve ulaşım ipucu." },
        { t: "Haritada gör",             d: "Günün rotasını tek haritada gör, tek tuşla navigasyona bağlan." },
        { t: "Kendi planını düzenle",    d: "Sürükle, bırak, sil, ekle. Plan tamamen senin kontrolünde." },
        { t: "Favoriler",                d: "Beğendiğin rotaları kaydet, sonra aynı plandan yolculuğa başla." },
        { t: "Şehir rehberi",            d: "Her destinasyon için yerel ipuçları, ulaşım, bavul tavsiyeleri." }
      ]
    },
    screens: {
      eyebrow: "Uygulama turu",
      title: "Her ekran, bir karar az.",
      lede: "Shuttle’ın içinden kısa bir gezinti — gerçek ekranlar, gerçek planlar."
    },
    interests: {
      eyebrow: "Ne seversen",
      title: "Dokuz ilgi. Bir yolculuk.",
      lede: "Planını senin keyfin belirler. Sen seç, biz rotaya bağlayalım.",
      items: [
        { e: "🎨", t: "Kültür & Sanat", c: "int-culture" },
        { e: "🍽️", t: "Gastronomi",     c: "int-gastro" },
        { e: "🌲", t: "Doğa",           c: "int-nature" },
        { e: "🏛️", t: "Tarih",          c: "int-history" },
        { e: "🛍️", t: "Alışveriş",      c: "int-shopping" },
        { e: "🧘", t: "Rahatlama",      c: "int-relax" },
        { e: "⛰️", t: "Macera",         c: "int-adventure" },
        { e: "⚽", t: "Spor",            c: "int-sports" },
        { e: "🌃", t: "Gece Hayatı",    c: "int-night" }
      ]
    },
    sample: {
      eyebrow: "Örnek plan",
      title: "Üç günde Roma ve Venedik. Tek dokunuşla.",
      lede: "AI’ın birkaç saniyede ne ürettiğine bak.",
      location: "Roma, İtalya",
      plan_title: "İtalya'da Kültür Kaçamağı",
      chips: ["Arkadaşlarla", "€830", "Kültür & Sanat", "Tarih"],
      days: [ { d: "16", m: "Nisan" }, { d: "17", m: "Nisan" }, { d: "18", m: "Nisan" } ],
      timeline: [
        { t: "08:00", h: "Kolezyum Turu",                p: "Antik gladyatör arenasının izinde tarihin kalbine in.",        tags: ["2 saat", "Tarih"] },
        { t: "10:30", h: "Roma Forumu & Palatine Tepesi", p: "Antik Roma’nın merkezinde tapınaklar ve anıtlar arasında yürüyüş.", tags: ["2 saat", "Kültür"] },
        { t: "13:00", h: "Trattoria da Enzo’da Öğle",    p: "Geleneksel Roma mutfağı. Carbonara, Cacio e Pepe ve daha fazlası.", tags: ["1.5 saat", "Gastronomi"] },
        { t: "14:30", h: "Vatikan & Sistine Şapeli",      p: "Michelangelo’nun başyapıtlarına birebir şahit ol.",             tags: ["3 saat", "Kültür"] },
        { t: "19:30", h: "Pizzeria da Baffetto’da Akşam", p: "Şehrin en sevilen pizzacılarından birinde gün sonu.",          tags: ["1.5 saat", "Gastronomi"] }
      ]
    },
    cta: {
      title: "Bir sonraki gezin seni bekliyor.",
      lede: "Shuttle yakında App Store ve Google Play’de. E-postanı bırak, çıktığında ilk sen haberdar ol.",
      placeholder: "ornek@mail.com",
      btn: "Beni haberdar et",
      thanks: "Harika — listede yerin var ✦"
    },
    footer: {
      tagline: "AI destekli gezi planlayıcısı. Sen hayal kur, Shuttle hesaplasın.",
      col_product: "Ürün",
      col_company: "Şirket",
      col_legal: "Hukuki",
      col_contact: "İletişim",
      links_product: ["Nasıl Çalışır", "Özellikler", "Ekranlar", "Örnek Plan"],
      links_company: ["Biz Kimiz", "Blog", "Kariyer"],
      links_legal:   ["Kullanım Şartları", "Gizlilik Politikası", "KVKK"],
      contact_mail: "merhaba@shuttletravel.app",
      rights: "© 2026 Shuttle Travel. Tüm hakları saklıdır.",
      made: "Türkiye’de ♡ ile yapıldı"
    },
    legal: {
      terms: {
        title: "Kullanım Şartları",
        date: "Son güncelleme: 1 Nisan 2026",
        body: [
          ["Hoş geldin.", "Shuttle Travel uygulamasını indirip kullanmaya başladığın andan itibaren aşağıdaki şartları kabul etmiş sayılırsın."],
          ["Hesap ve kullanım", "Hesabını güvenli tutmak senin sorumluluğundadır. Shuttle, hesabının yetkisiz kullanımından doğabilecek zararlardan sorumlu değildir."],
          ["İçerik ve fikri mülkiyet", "Uygulamada yer alan logolar, tasarım, metin ve yapay zekâ tarafından üretilen planlar Shuttle’a aittir. İzinsiz yeniden yayımlanamaz."],
          ["Yapay zekâ çıktıları", "AI tarafından önerilen programlar bilgilendirme amaçlıdır. Seyahat öncesi resmi kaynaklardan doğrulama yapman gerekir."],
          ["Fesih", "Bu şartları ihlal etmen durumunda hesabın herhangi bir bildirimde bulunulmadan askıya alınabilir."],
          ["İletişim", "Sorularını merhaba@shuttletravel.app adresine iletebilirsin."]
        ]
      },
      privacy: {
        title: "Gizlilik Politikası",
        date: "Son güncelleme: 1 Nisan 2026",
        body: [
          ["Kısaca", "Verilerini satmıyoruz. Sana daha iyi bir seyahat planı çıkarmak dışında hiçbir şey için kullanmıyoruz."],
          ["Topladığımız veriler", "E-posta, ad, seyahat tercihleri (şehir, tarih, bütçe, ilgi alanları) ve — izin verirsen — konum bilgisi."],
          ["Nasıl kullanılıyor?", "Bu veriler yalnızca sana özel gezi planı üretmek ve uygulamayı geliştirmek için kullanılır."],
          ["Üçüncü taraflar", "Harita hizmetleri için Apple/Google Maps, yapay zekâ altyapısı için OpenAI servislerinden faydalanıyoruz. Kimlik bilgilerini paylaşmıyoruz."],
          ["Haklarınız", "İstediğin zaman hesabını ve tüm verilerini silebilirsin. Veri erişim talepleri için merhaba@shuttletravel.app."]
        ]
      }
    }
  },
  en: {
    nav: { how: "How it works", features: "Features", screens: "Screens", download: "Download" },
    hero: {
      badge: "Coming soon · iOS & Android",
      title_1: "Plan your dream",
      title_accent: "trip.",
      title_2: "Shuttle handles the rest.",
      sub: "Shuttle is an AI-powered travel planner that analyzes your preferences and builds personalized daily itineraries.",
      store_soon: "SOON",
      store_app_small: "Download on the",
      store_app_big: "App Store",
      store_play_small: "Get it on",
      store_play_big: "Google Play",
      fc1_l: "Estimated budget", fc1_v: "€830",
      fc2_l: "AI route",         fc2_v: "Rome → Venice",
      fc3_l: "Itinerary",        fc3_v: "08:00 · Colosseum",
      marquee: ["Rome", "Barcelona", "Tokyo", "Baku", "Stockholm", "Dubai", "Puebla", "Sydney", "Phuket", "Venice"]
    },
    how: {
      eyebrow: "How it works",
      title: "Six questions. One trip. Fully yours.",
      lede: "We ask six quick questions to shape your trip. Then the AI takes the stage.",
      steps: [
        { emoji: "📍", h: "Where to?",         p: "Pick a city or a country — add as many stops as you want." },
        { emoji: "📅", h: "When?",             p: "Set your dates and the hours you're free each day." },
        { emoji: "💰", h: "What's the budget?", p: "A rough number is enough. The plan balances itself around it." },
        { emoji: "🎯", h: "What do you love?",   p: "Culture, food, nature, adventure — pick your vibe, mix and match." },
        { emoji: "👥", h: "Who's coming?",      p: "Solo, partner, family, friends — your journey, your company." },
        { emoji: "✍️", h: "Anything else?",     p: "“A canyon tour in Venice”, “a peaceful break” — just say it. We read." }
      ],
      final: {
        num: "07",
        h: "AI builds the plan in 40 seconds.",
        p: "Routes get calculated, durations balanced, transport and budget drawn. You get ready to travel."
      }
    },
    features: {
      eyebrow: "Features",
      title: "Guide in your pocket. Planning in the AI.",
      lede: "Everything you'd expect from a trip app — and a little more.",
      cards: [
        { t: "A plan made just for you.", d: "AI composes a daily schedule around your interests, budget, and pace. Then you edit it as much as you want." },
        { t: "Planned down to the hour",  d: "Time, duration, pace and transport tips for every activity." },
        { t: "See it on the map",         d: "Check the day's route on a single map, one tap to navigate." },
        { t: "Edit your own plan",        d: "Drag, drop, remove, add. The plan is fully yours." },
        { t: "Favorites",                 d: "Save routes you love, then start your own journey from the same plan." },
        { t: "City guide",                d: "Local tips, transport, packing advice for every destination." }
      ]
    },
    screens: {
      eyebrow: "Inside the app",
      title: "Every screen, one decision less.",
      lede: "A short tour through Shuttle — real screens, real plans."
    },
    interests: {
      eyebrow: "Whatever you love",
      title: "Nine interests. One itinerary.",
      lede: "Your joy shapes the plan. Pick what matters — we route it.",
      items: [
        { e: "🎨", t: "Culture & Art", c: "int-culture" },
        { e: "🍽️", t: "Gastronomy",    c: "int-gastro" },
        { e: "🌲", t: "Nature",        c: "int-nature" },
        { e: "🏛️", t: "History",       c: "int-history" },
        { e: "🛍️", t: "Shopping",      c: "int-shopping" },
        { e: "🧘", t: "Relaxation",    c: "int-relax" },
        { e: "⛰️", t: "Adventure",     c: "int-adventure" },
        { e: "⚽", t: "Sports",         c: "int-sports" },
        { e: "🌃", t: "Nightlife",     c: "int-night" }
      ]
    },
    sample: {
      eyebrow: "Sample plan",
      title: "Rome and Venice in three days. One tap.",
      lede: "Take a look at what the AI produces in a few seconds.",
      location: "Rome, Italy",
      plan_title: "Cultural Getaway in Italy",
      chips: ["With Friends", "€830", "Culture & Art", "History"],
      days: [ { d: "16", m: "April" }, { d: "17", m: "April" }, { d: "18", m: "April" } ],
      timeline: [
        { t: "08:00", h: "Colosseum Tour",            p: "Walk the ancient gladiator arena and dive into the heart of Roman history.", tags: ["2 hours", "History"] },
        { t: "10:30", h: "Roman Forum & Palatine",    p: "Stroll through temples and monuments at the center of ancient Rome.",        tags: ["2 hours", "Culture"] },
        { t: "13:00", h: "Lunch at Trattoria da Enzo", p: "Traditional Roman cuisine: Carbonara, Cacio e Pepe and more.",               tags: ["1.5 hours", "Gastronomy"] },
        { t: "14:30", h: "Vatican & Sistine Chapel",  p: "Stand face to face with Michelangelo's masterpieces.",                       tags: ["3 hours", "Culture"] },
        { t: "19:30", h: "Dinner at Pizzeria da Baffetto", p: "End the day at one of Rome's most loved pizzerias.",                     tags: ["1.5 hours", "Gastronomy"] }
      ]
    },
    cta: {
      title: "Your next adventure awaits.",
      lede: "Shuttle is coming soon to the App Store and Google Play. Leave your email — be the first to know.",
      placeholder: "you@example.com",
      btn: "Notify me",
      thanks: "You're on the list ✦"
    },
    footer: {
      tagline: "AI-powered travel planner. You dream it, Shuttle calculates it.",
      col_product: "Product",
      col_company: "Company",
      col_legal: "Legal",
      col_contact: "Contact",
      links_product: ["How it works", "Features", "Screens", "Sample plan"],
      links_company: ["About us", "Blog", "Careers"],
      links_legal:   ["Terms of use", "Privacy policy", "Cookies"],
      contact_mail: "hello@shuttletravel.app",
      rights: "© 2026 Shuttle Travel. All rights reserved.",
      made: "Made with ♡ in Türkiye"
    },
    legal: {
      terms: {
        title: "Terms of use",
        date: "Last updated: April 1, 2026",
        body: [
          ["Welcome.", "By downloading and using Shuttle Travel, you agree to the following terms of use."],
          ["Account and use", "It's your responsibility to keep your account secure. Shuttle isn't liable for damages from unauthorized account use."],
          ["Content and IP", "Logos, design, copy and AI-generated plans inside the app belong to Shuttle and may not be reused without permission."],
          ["AI outputs", "AI-generated itineraries are informational. Please verify through official sources before traveling."],
          ["Termination", "Your account may be suspended without notice if these terms are violated."],
          ["Contact", "For questions write to hello@shuttletravel.app."]
        ]
      },
      privacy: {
        title: "Privacy policy",
        date: "Last updated: April 1, 2026",
        body: [
          ["Short version", "We don't sell your data. We use it only to build a better trip for you."],
          ["What we collect", "Email, name, travel preferences (destination, dates, budget, interests) and — with permission — location."],
          ["How we use it", "Only to generate personalized trip plans and to improve the app."],
          ["Third parties", "We use Apple/Google Maps for maps and OpenAI for AI. We don't share identifying information."],
          ["Your rights", "You can delete your account and data at any time. For access requests: hello@shuttletravel.app."]
        ]
      }
    }
  }
};
