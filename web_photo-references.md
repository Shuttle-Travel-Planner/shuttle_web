# Web Entegrasyon Notu — Fotoğraf Kaynakları Sayfası

**Adres:** `https://shuttletravelapp.com/photo_references`

Uygulamadaki ülke, eyalet ve şehir resimlerinin çoğu Wikimedia Commons'tan alındı ve
**CC BY / CC BY-SA** lisanslı. Bu lisanslar, resimleri kullanma izninin şartı olarak
**fotoğrafçının adının ve lisansın gösterilmesini** istiyor. Bu sayfa o bilgileri
gösteriyor. Mobil uygulamadaki Hakkında → "Fotoğraf kaynakları" butonu bu sayfayı açıyor.

Sayfa yayında olmadan resimleri kullanmak lisans ihlali olur. Bu yüzden sayfanın
**her zaman erişilebilir ve güncel** olması gerekiyor: liste statik olarak sayfaya
gömülmemeli, aşağıdaki endpoint'ten canlı alınmalı.

---

## Endpoint

`GET https://api.shuttletravelapp.com/exapi/location/image_credits`

Test ortamı: `GET https://test.shuttletravelapp.com/exapi/location/image_credits`

- **Auth gerekmez** (public).
- CORS bütün kaynaklara açık, tarayıcıdan doğrudan çağrılabilir.
- Rate limit: IP başına dakikada 60 istek.
- Sadece kaynak gösterme şartı olan resimler döner. Public Domain, CC0 ve
  "Copyrighted free use" lisanslı olanlar listede yok.
- Aynı resmi paylaşan kayıtlar tek satır döner.

### Parametreler (query string)

| Parametre | Tip | Varsayılan | Açıklama |
|---|---|---|---|
| `locale` | string | `en` | Yer adlarının dili, örn. `tr`, `de`, `fr`, `es` |
| `page` | int | `1` | Sayfa numarası, 1'den başlar |
| `page_size` | int | `20` | Sayfadaki kayıt sayısı, en fazla `100` |
| `search` | string | (boş) | Yer adında arama (büyük/küçük harf duyarsız, `locale` diline göre) |

Örnek:

```
GET /exapi/location/image_credits?locale=tr&page=2&page_size=50&search=par
```

### Yanıt

```json
{
  "success": true,
  "message": "Location image credits retrieved successfully",
  "code": "...",
  "data": {
    "items": [
      {
        "name": "Abu Dabi",
        "type": "City",
        "image_url": "https://cdn.shuttletravelapp.com/locations/cities/12.jpg",
        "author": "Валерий Дед",
        "license": "CC BY 3.0",
        "license_url": "https://creativecommons.org/licenses/by/3.0/",
        "source_url": "https://commons.wikimedia.org/wiki/File:..."
      }
    ],
    "page": 1,
    "page_size": 50,
    "total_count": 311,
    "total_pages": 7,
    "has_next": true
  }
}
```

**Sayfa bilgileri (`data`):**

| Alan | Açıklama |
|---|---|
| `items` | Bu sayfadaki kayıtlar. Sonuç yoksa ya da son sayfadan sonrası istenirse boş dizi `[]` |
| `page` | İstenen sayfa. Geçersiz değer gönderildiyse `1` olarak döner |
| `page_size` | Uygulanan sayfa boyutu. 100'den büyük gönderildiyse `100` olarak döner |
| `total_count` | Arama filtresine uyan toplam kayıt sayısı |
| `total_pages` | Toplam sayfa sayısı |
| `has_next` | Sonraki sayfa var mı |

**Kayıt alanları (`items[]`):**

| Alan | Açıklama |
|---|---|
| `name` | Yer adı (`locale` diline göre) |
| `type` | `Country`, `State` veya `City`. Ekranda Ülke / Eyalet / Şehir olarak gösterilebilir |
| `image_url` | Resmin CDN adresi. Küçük önizleme için kullanılabilir |
| `author` | Fotoğrafçı. Bazen birden fazla isim ya da kullanıcı adı olabilir; olduğu gibi gösterin |
| `license` | Lisans adı, örn. `CC BY-SA 4.0`, `CC BY-SA 3.0 de`, `FAL` |
| `license_url` | Lisans metninin adresi. **Boş gelebilir**; o zaman lisans adını link olmadan gösterin |
| `source_url` | Wikimedia Commons'taki dosya sayfası |

Liste isme göre sıralı gelir. Aynı isimli yerlerin sırası her istekte aynıdır, yani
sayfalar arasında kayıt kaybolmaz ya da tekrar etmez.

Hata durumunda HTTP 400 ve `success: false` döner. Rate limit aşılırsa HTTP 429 döner.

---

## Sayfada olması gerekenler

**Zorunlu:**

1. **Başlık ve açıklama:**
   > **Fotoğraf kaynakları**
   > Uygulamadaki lokasyon görselleri Wikimedia Commons'tan alınmıştır.
   > Bazı görseller kırpılmış veya yeniden boyutlandırılmıştır.

   "Kırpılmış veya yeniden boyutlandırılmıştır" cümlesi önemli: CC 4.0 lisansları, resim
   değiştirildiyse bunun belirtilmesini istiyor. Uygulamada resimleri kartlarda kırptığımız
   için bu cümle yeterli.

2. **Her kayıt için:**
   - Yer adı
   - Fotoğrafçı (`author`)
   - Lisans adı (`license`). `license_url` doluysa lisans metnine link olmalı.
   - Kaynak linki (`source_url`), örneğin "Kaynak" ya da "Wikimedia Commons" yazısıyla.

3. **Sayfalama:** Önceki / sonraki ve sayfa numaraları. `has_next` ve `total_pages`
   değerlerini kullanın.

**Önerilen:**

- Yer adında arama kutusu (`search`). Yazarken her tuşta değil, 300 ms gibi bir
  gecikmeyle istek atın. Arama değişince `page=1`'e dönün.
- Dil seçimi ya da tarayıcı dilinden `locale` belirleme.
- Küçük önizleme resmi (`image_url`, `loading="lazy"`).
- Sayfa numarasını URL'de tutmak (`/photo_references?page=3&search=par`). Böylece link
  paylaşılabilir ve geri tuşu çalışır.
- Sayfanın arama motorlarında indekslenmesine engel yok; `noindex` koymanıza gerek yok.

### Örnek düzen

```
┌──────────────────────────────────────────────────────────┐
│ Fotoğraf kaynakları                                      │
│ Uygulamadaki lokasyon görselleri Wikimedia Commons'tan   │
│ alınmıştır. Bazı görseller kırpılmış veya yeniden        │
│ boyutlandırılmıştır.                                     │
│                                                          │
│ [ Yer ara...                    ]                        │
│                                                          │
│ [img] Abu Dabi · Şehir                                   │
│       📷 Валерий Дед · CC BY 3.0 · Kaynak                │
│ [img] Abuja · Şehir                                      │
│       📷 Ovinuchi Prince Ejiohuo · CC BY-SA 4.0 · Kaynak │
│ ...                                                      │
│                                                          │
│        ‹ Önceki   1  2  3 … 7   Sonraki ›                │
└──────────────────────────────────────────────────────────┘
```

### Örnek istek (JavaScript)

```js
const API = "https://api.shuttletravelapp.com/exapi/location/image_credits";

async function loadPhotoReferences({ page = 1, pageSize = 50, search = "", locale = "tr" } = {}) {
  const params = new URLSearchParams({ page, page_size: pageSize, locale });
  if (search.trim()) params.set("search", search.trim());

  const res = await fetch(`${API}?${params}`);
  const body = await res.json();
  if (!res.ok || !body.success) throw new Error(body.message || `HTTP ${res.status}`);
  return body.data; // { items, page, page_size, total_count, total_pages, has_next }
}
```

`author` ve diğer alanları sayfaya yazarken HTML olarak değil metin olarak ekleyin
(`textContent`, ya da kullandığınız framework'ün normal metin bağlama yöntemi).
Değerler Wikimedia'dan geliyor ve içerikleri bizim kontrolümüzde değil.

---

## Yapılacaklar

- [ ] `https://shuttletravelapp.com/photo_references` sayfası
- [ ] Başlık ve "kırpılmış veya yeniden boyutlandırılmıştır" açıklaması
- [ ] Her satırda yer adı, fotoğrafçı, lisans (`license_url` varsa link) ve kaynak linki
- [ ] Sayfalama (`page`, `page_size`, `has_next`, `total_pages`)
- [ ] (Önerilen) Arama kutusu, dil seçimi, URL'de sayfa numarası
- [ ] Liste canlı olarak endpoint'ten alınıyor, sayfaya gömülü değil
