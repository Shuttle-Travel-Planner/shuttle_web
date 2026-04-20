# Shuttle Travel — Web Tanıtım Sitesi

## Proje Özeti

Shuttle Travel, AI destekli bir gezi planlama uygulamasıdır (Flutter, iOS & Android). Bu repo, uygulamanın **pre-launch landing page** web sitesidir — mağaza linkleri henüz aktif değil, "Coming Soon" durumunda.

| Alan | Değer |
|------|-------|
| Uygulama | Shuttle Travel |
| Tagline (TR) | "Hayalindeki yolculuğu planla. Shuttle halleder." |
| Tagline (EN) | "Plan your dream trip. Shuttle handles the rest." |
| Platform | iOS & Android (Flutter) |
| Durum | Pre-launch — App Store & Google Play yakında |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Stil:** Tailwind CSS
- **Font:** [Urbanist](https://fonts.google.com/specimen/Urbanist) — Google Fonts (uygulamayla aynı)
- **Animasyon:** Framer Motion veya Intersection Observer API
- **Dil:** TypeScript

---

## Renk Paleti

| Token | Hex | Kullanım |
|-------|-----|---------|
| `primary500` | `#5C3E94` | Ana marka rengi (mor) |
| `primary600` | `#4D2E83` | Hover, koyu vurgu |
| `primary300` | `#C4B6EC` | Açık mor, highlight |
| `secondary500` | `#00C2AF` | Teal/mint — CTA, badge |
| `secondary400` | `#1EE3CF` | Parlak teal, ikon vurgusu |
| `labelPrimary` | `#211832` | Ana metin |
| `labelSecondary` | `#5A6574` | Açıklama metni |
| `backgroundSecondary` | `#F2F6F9` | Section arka planı |

Gradient: `#5C3E94` → `#00C2AF` (plan oluşturma ekranlarında teal-to-purple)

---

## Site Yapısı (8 Section)

### 1. Hero
- **TR Başlık:** "Hayalindeki Yolculuğu Planla"
- **EN Başlık:** "Plan Your Dream Trip"
- Alt başlık + App Store / Google Play CTA butonları
- "Yakında Yayında" / "Coming Soon" badge'i butonların yanında
- Arka plan: mor→teal gradient overlay, seyahat fotoğrafı veya globe illustration

### 2. Nasıl Çalışır (How It Works)
6 adımlı plan oluşturma akışı — uygulamada gerçek ekranlar mevcut:

| Adım | Başlık (TR) | Başlık (EN) |
|------|-------------|-------------|
| 1 | Nereye Gidiyorsun? | Where Do You Want to Go? |
| 2 | Ne Zaman Gidiyorsun? | When Are You Traveling? |
| 3 | Bütçen Ne Kadar? | What's Your Budget? |
| 4 | Ne Yapmak İstiyorsun? | What Do You Want to Do? |
| 5 | Eklemek İstediğin Bir Şey Var Mı? | Anything to Add? |
| 6 | Kiminle Gidiyorsun? | Who Are You Going With? |
| + | AI Planını Oluşturuyor | AI Is Building Your Plan |

### 3. Özellikler (Features) — 2x3 grid
1. ✨ Sadece Sana Özel Plan / A Plan Made Just for You
2. 🗓️ Saate Kadar Planlı / Planned Down to the Hour
3. 🗺️ Haritada Gör / See It on the Map
4. ✏️ Planını Kendin Şekillendir / Shape Your Own Plan
5. ❤️ Beğendiğin Planları Kaydet / Save Plans You Love
6. 📖 Şehir Rehberi Dahil / City Guide Included

### 4. Uygulama Ekranları (App Screenshots)
Karusel/side-scroll. Gerçek ekranlar `shuttle_screenshot/` klasöründe mevcut (21 PNG, iPhone 17 simulator).

Gösterilecek ekranlar:
- Ana Sayfa (Home) — aktif/yaklaşan geziler
- Lokasyon Seçimi — globe illustration + şehir arama
- İlgi Alanı Seçimi — pill-button grid
- AI Yükleme ekranı
- Plan Detayı (Plan | Map | Guide sekmeleri)
- Plan Düzenleme — aktivite listesi, saat + süre etiketleri
- Favoriler — Missed/Planned/Completed badge'leri

### 5. İlgi Alanları (Interests) — 3x3 grid
Pill-shaped kutular, hover'da scale animasyonu:

| Emoji | TR | EN |
|-------|----|----|
| 🎨 | Kültür & Sanat | Culture & Art |
| 🍽️ | Gastronomi | Gastronomy |
| 🌲 | Doğa | Nature |
| 🏛️ | Tarih | History |
| 🛍️ | Alışveriş | Shopping |
| 🧘 | Rahatlama | Relaxation |
| ⛰️ | Macera | Adventure |
| ⚽ | Spor | Sports |
| 🌃 | Gece Hayatı | Nightlife |

### 6. Sosyal Kanıt (Quote Section)
Placeholder quote kartları:
- **TR:** "Roma gezisini Shuttle ile planladım..." — Ayşe K., İstanbul
- **EN:** "I planned my Barcelona trip with Shuttle..." — Emma L., London

### 7. Download CTA
- **TR:** "Bir Sonraki Gezin Seni Bekliyor" — e-posta input + "Beni Haberdar Et" butonu
- **EN:** "Your Next Adventure Awaits" — email input + "Notify Me" button
- App Store/Play Store badge'leri (link placeholder)

### 8. Footer
- Logo + kısa açıklama
- Bağlantılar: Ana Sayfa, Özellikler, Bildirim Al
- İletişim: destek e-postası placeholder
- Dil seçici (TR / EN)
- © 2025 Shuttle Travel. Tüm hakları saklıdır.

---

## UI Tasarım Referansları (Uygulamadan)

- **Kart tasarımı:** Beyaz, rounded-2xl, subtle shadow
- **Butonlar:** Full-width, rounded-full, koyu (`#211832`) veya primary mor
- **Interest butonları:** Pill-shaped, emoji + text, seçilince mor fill
- **Gradient arka plan:** Teal (#1EE3CF) → mor (#5C3E94) — dikey
- **Aktivite kartları:** Sol kenar saat etiketi, sağda kategori badge'i
- **Navigation:** Alt tab bar (Home, My Plans, +create, Favorites, Profile)

---

## Dil Desteği

- **Varsayılan:** Türkçe (`lang="tr"`)
- **Depolama:** `localStorage.setItem('lang', 'tr' | 'en')`
- **İçerik yapısı:** Tüm metinler iki dilli JS/JSON objesi olarak saklanır
- **Toggle:** Header'da `TR | EN` butonu

---

## SEO

```html
<title>Shuttle Travel — AI Destekli Gezi Planlayıcısı</title>
<meta name="description" content="Seyahat tercihlerine göre kişiselleştirilmiş günlük program oluşturan AI uygulaması." />
<meta property="og:description" content="AI-powered travel planner that builds personalized daily itineraries." />
<link rel="canonical" href="https://shuttletravel.app" />
```

---

## Animasyonlar

- **Scroll-triggered fade-in:** Intersection Observer veya `framer-motion` `whileInView`
- **Hero:** Parallax efekti
- **How It Works kartları:** Sıralı (staggered) görünüm
- **Interest grid:** `hover:scale-105` transition

---

## Görseller & Kaynaklar

- **Gerçek uygulama ekranları:** `shuttle_screenshot/` — 21 PNG (iPhone 17 simulator)
- **Seyahat fotoğrafları:** Unsplash veya Pexels (royalty-free)
- **App Store badge SVG:** Apple marka kiti
- **Google Play badge SVG:** Google marka kiti
- **Telefon mockup:** CSS ile veya mockupworld.co

---

## Geliştirici Notları

- **Responsive:** Mobile-first. Breakpoint'ler: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- **CTA linkleri:** Şimdilik `href="#"` placeholder — mağaza linkleri hazır olduğunda güncelle
- **Email formu:** Şimdilik static (backend yok) — launch öncesi entegrasyon yapılacak
- **Screenshot karusel:** `shuttle_screenshot/` klasöründen gerçek görseller kullanılacak, telefon frame CSS ile eklenecek
- **İçerik kaynağı:** Tüm copy `shuttle_web_döküman.md` dosyasında — değişiklik gerekirse oradan al
