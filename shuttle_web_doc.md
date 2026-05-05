# Shuttle Travel — Web Tanıtım Sitesi Dökümanı

## Context

Bu döküman, **Shuttle Travel** Flutter mobil uygulaması için oluşturulacak web tanıtım sitesinin içerik ve teknik altyapısını tanımlar. Amaç: yeni bir web projesinde Claude'a bu dökümanı vererek siteyi sıfırdan inşa etmek.

---

## Proje Özeti

| Alan | Değer |
|------|-------|
| Uygulama Adı | **Shuttle Travel** |
| Tagline (TR) | *"Hayalindeki yolculuğu planla. Shuttle halleder."* |
| Tagline (EN) | *"Plan your dream trip. Shuttle handles the rest."* |
| Kategori | AI destekli gezi planlama uygulaması |
| Platform | iOS & Android (Flutter) |
| Durum | Yakında yayında — App Store & Play Store |
| Dil | Türkçe + İngilizce (dil değiştirme destekli) |

---

## Sitenin Genel Yapısı

### Sayfa / Section Sırası

```
1. Hero (Üst banner)
2. Nasıl Çalışır (How It Works) — 7 adımlı akış
3. Özellikler (Features)
4. Uygulama Ekranları (App Screenshots)
5. İlgi Alanları (Interests showcase)
6. Sosyal Kanıt / Quote section
7. Yakında / Download CTA
8. Footer
```

### Site Tercihleri
- **Dil:** Türkçe + İngilizce — header'da dil değiştirme butonu
- **Stil:** Seyahat temalı — canlı renkler, fotoğraf ağırlıklı, enerjik his
- **CTA:** "App Store'da İndir" + "Google Play'de İndir" butonları (mağaza linki placeholder ile — coming soon badge'i eklenecek)
- **Font önerisi:** [Urbanist](https://fonts.google.com/specimen/Urbanist) (uygulamayla aynı)
- **Tech stack öneri:** Next.js + Tailwind CSS veya sade HTML/CSS/JS (kullanıcı tercihine göre)

---

## Renk Paleti (Uygulamadan)

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

---

## Section 1 — Hero

### Türkçe
- **Başlık:** "Hayalindeki Yolculuğu Planla"
- **Alt başlık:** "Shuttle, seyahat tercihlerini analiz eden ve sana özel günlük programlar oluşturan AI destekli gezi planlayıcısı."
- **CTA buton 1:** "App Store'da İndir" (Apple badge)
- **CTA buton 2:** "Google Play'de İndir" (Google badge)
- **Not:** "Yakında Yayında" badge'i butonların yanında

### İngilizce
- **Başlık:** "Plan Your Dream Trip"
- **Alt başlık:** "Shuttle is an AI-powered travel planner that analyzes your preferences and builds personalized daily itineraries."
- **CTA buton 1:** "Download on the App Store"
- **CTA buton 2:** "Get it on Google Play"

### Görsel Öneri
- Arka planda canlı seyahat fotoğrafı (şehir/doğa karışımı) veya mockup telefon görseli
- Hafif gradient overlay (mor → teal)

---

## Section 2 — Nasıl Çalışır (7 Adım)

Her adım bir ikon + başlık + açıklama kartıyla gösterilir. Dikey timeline veya yatay stepper.

| Adım | İkon Önerisi | TR Başlık | EN Başlık | TR Açıklama | EN Açıklama |
|------|-------------|-----------|-----------|-------------|-------------|
| 1 | 📍 | Nereye Gidiyorsun? | Where Do You Want to Go? | Şehir veya ülke seç, birden fazla yer ekleyebilirsin. | Choose a city or country — you can add multiple destinations. |
| 2 | 📅 | Ne Zaman Gidiyorsun? | When Are You Traveling? | Gidiş-dönüş tarihlerini ve günlük uygun saatlerini belirle. | Set your travel dates and daily available hours. |
| 3 | 💰 | Bütçen Ne Kadar? | What's Your Budget? | Yaklaşık bir bütçe gir, plan buna göre şekillensin. | Enter an approximate budget and the plan adapts accordingly. |
| 4 | 🎯 | Ne Yapmak İstiyorsun? | What Do You Want to Do? | Kültür, gastronomi, macera ve daha fazlasından seç. | Pick from culture, gastronomy, adventure, and more. |
| 5 | 👥 | Kiminle Gidiyorsun? | Who Are You Going With? | Yalnız, çift, aile veya arkadaş grubu seçeneklerinden birini belirle. | Solo, partner, family, or friends — your choice. |
| 6 | ✍️ | Eklemek İstediğin Bir Şey Var Mı? | Anything to Add? | Özel isteklerini yaz — "sakin bir tatil", "mutlaka görülecek yerler" gibi. | Write special requests — "peaceful trip", "must-see spots", etc. |
| 7 | 🤖 | AI Planını Oluşturuyor | AI Is Building Your Plan | 40-60 saniyede konumlar analiz edilir, rotalar hesaplanır, aktiviteler seçilir. | In 40-60 seconds: locations analyzed, routes calculated, activities selected. |

---

## Section 3 — Özellikler (Features)

6 kart, 2x3 veya 3x2 grid düzeni.

### Kart 1 — Kişiselleştirilmiş AI Planı
- **TR:** "Sadece Sana Özel Plan" — İlgi alanlarına, bütçene ve yolculuk tarzına göre AI tarafından oluşturulan günlük program.
- **EN:** "A Plan Made Just for You" — AI-generated daily itineraries tailored to your interests, budget, and travel style.
- **İkon:** ✨ veya 🧠

### Kart 2 — Günlük Program Detayı
- **TR:** "Saate Kadar Planlı" — Her gün için aktivite listesi, tahmini süreler, ulaşım bilgisi ve bütçe dağılımı.
- **EN:** "Planned Down to the Hour" — Daily activity lists with estimated durations, transportation info, and budget breakdown.
- **İkon:** 🗓️

### Kart 3 — Harita Entegrasyonu
- **TR:** "Haritada Gör" — Tüm aktivite noktalarını haritada görüntüle, konumlara direkt aç.
- **EN:** "See It on the Map" — View all activity locations on a map and open them directly.
- **İkon:** 🗺️

### Kart 4 — Plan Düzenleme
- **TR:** "Planını Kendin Şekillendir" — Aktivite ekle, çıkar, sırala. Plan tamamen senin kontrolünde.
- **EN:** "Shape Your Own Plan" — Add, remove, or reorder activities. You're fully in control.
- **İkon:** ✏️

### Kart 5 — Favoriler
- **TR:** "Beğendiğin Planları Kaydet" — İlham veren gezileri favorilere ekle, istediğin zaman geri dön.
- **EN:** "Save Plans You Love" — Bookmark inspiring trips and revisit them anytime.
- **İkon:** ❤️

### Kart 6 — Seyahat Rehberi
- **TR:** "Şehir Rehberi Dahil" — Her destinasyon için şehir hakkında bilgi, faydalı ipuçları, ulaşım ve bavul tavsiyeleri.
- **EN:** "City Guide Included" — City info, helpful tips, transportation, and packing advice for every destination.
- **İkon:** 📖

---

## Section 4 — Uygulama Ekranları (App Screenshots)

Karusel veya side-scroll ile göster. Ekran açıklamaları:

| Ekran | TR Açıklama | EN Açıklama |
|-------|-------------|-------------|
| Ana Sayfa | "Aktif ve yaklaşan gezilerini tek bakışta gör" | "See your active and upcoming trips at a glance" |
| Lokasyon Seçimi | "Şehir veya ülke ara, çoklu seçim yap" | "Search for cities or countries, select multiple" |
| İlgi Alanı Seçimi | "9 kategori arasından seni mutlu edecekleri seç" | "Choose from 9 categories what will make you happy" |
| AI Yükleme | "AI planını hazırlıyor — sadece bekle" | "AI is building your plan — just wait" |
| Plan Detayı | "Gün gün, saat saat planlanmış programın" | "Your itinerary planned day by day, hour by hour" |
| Profil | "İstatistikler, ayarlar ve geçmiş gezilerin" | "Stats, settings, and your past trips" |

> **Not:** Gerçek ekran görüntüleri yoksa placeholder mockup telefon çerçeveleri kullan.

---

## Section 5 — İlgi Alanları Showcase

Renkli ikonlu 3x3 grid. Her kutu hover'da canlanır.

| Key | Emoji | TR | EN |
|-----|-------|----|----|
| CULTURE | 🎨 | Kültür & Sanat | Culture & Art |
| GASTRONOMY | 🍽️ | Gastronomi | Gastronomy |
| NATURE | 🌲 | Doğa | Nature |
| HISTORY | 🏛️ | Tarih | History |
| SHOPPING | 🛍️ | Alışveriş | Shopping |
| RELAXATION | 🧘 | Rahatlama | Relaxation |
| ADVENTURE | ⛰️ | Macera | Adventure |
| SPORTS | ⚽ | Spor | Sports |
| NIGHTLIFE | 🌃 | Gece Hayatı | Nightlife |

---

## Section 6 — Quote / Sosyal Kanıt

Placeholder quote kartı (gerçek kullanıcı yorumu yok şimdilik).

**TR örneği:**
> *"Roma gezisini Shuttle ile planladım. Her gün saatlik program, ulaşım önerileri ve bütçe takibi — hepsi tek uygulamada."*
> — Ayşe K., İstanbul

**EN örneği:**
> *"I planned my Barcelona trip with Shuttle. Hourly schedule for each day, transport tips, and budget tracking — all in one app."*
> — Emma L., London

---

## Section 7 — Download CTA (Son Çağrı)

**TR:**
- Başlık: "Bir Sonraki Gezin Seni Bekliyor"
- Alt: "Shuttle yakında App Store ve Google Play'de. Çıkıştan haberdar olmak için e-postanı bırak."
- Input: E-posta girişi + "Beni Haberdar Et" butonu
- Alt text: "Yayında olduğunda seni ilk biz haberdar edeceğiz."

**EN:**
- Başlık: "Your Next Adventure Awaits"
- Alt: "Shuttle is coming soon to the App Store and Google Play. Leave your email to be notified at launch."
- Input: Email input + "Notify Me" button
- Alt text: "We'll be the first to let you know when it's live."

> **Not:** Uygulamanın mağaza bağlantısı hazır olduğunda bu section'a App Store / Play Store badge'leri eklenir.

---

## Section 8 — Footer

**Kolonlar:**
- Logo + kısa açıklama
- Bağlantılar: Ana Sayfa, Özellikler, İndir (veya Bildirim Al)
- İletişim: destek e-postası placeholder
- Dil seçici (TR / EN)
- Telif: © 2025 Shuttle Travel. Tüm hakları saklıdır.

---

## Teknik Notlar (Web Projesi için)

### Stack Önerisi
- **Next.js 14** (App Router) + **Tailwind CSS** — production-ready, SEO dostu
- Alternatif: Sade **HTML + CSS + Vanilla JS** — daha basit, hosting kolayı

### SEO Meta
- `<title>`: "Shuttle Travel — AI Destekli Gezi Planlayıcısı"
- `og:description`: "Seyahat tercihlerine göre kişiselleştirilmiş günlük program oluşturan AI uygulaması."
- `lang` attribute: `tr` (varsayılan), dil değişince `en`
- Canonical URL ekle

### Dil Değiştirme
- Header'da `TR | EN` toggle
- `localStorage`'da tercih sakla
- Tüm metin içeriği iki dilde JSON veya obje olarak tut

### Animasyonlar (Önerilen)
- Scroll-triggered fade-in (Intersection Observer veya Framer Motion)
- Hero'da parallax efekti
- Step kartlarında sıralı görünüm animasyonu
- İlgi alanı kartlarında hover scale efekti

### Görseller
- Unsplash veya Pexels'tan royalty-free seyahat fotoğrafları kullan
- Telefon mockup frame: [Mockup World](https://www.mockupworld.co/) veya CSS ile oluştur
- App store badge SVG'leri: Apple ve Google'ın resmi marka kitlerinden al

---

## Claude'a Kullanım Talimatı

Bu dökümanı yeni web projesinde Claude'a şu şekilde ver:

```
Bu dökümanı kullanarak Shuttle Travel uygulaması için bir web tanıtım sitesi oluştur.
Stack: [Next.js + Tailwind / HTML+CSS+JS — seçimini belirt]
Tüm section'lar dökümanın sırasına göre olsun.
Dil desteği: TR (default) + EN, header'da toggle.
Responsive olsun (mobile-first).
Renk paletini dökümanın Color Palette tablosundan kullan.
Font: Google Fonts'tan Urbanist.
```
