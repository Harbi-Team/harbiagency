# Harbi Agency Website

Modern ve profesyonel bir ajans web sitesi.

## Özellikler

- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Modern animasyonlar (GSAP + ScrollTrigger)
- ✅ Smooth scroll (Lenis)
- ✅ İletişim formu (PocketBase entegrasyonu)
- ✅ Ekip ve projeler için ayrı sayfalar
- ✅ Kurumsal tasarım

## Sayfalar

1. **Ana Sayfa** (`index.html`) - Hero, hizmetler, ekip ve proje önizlemeleri
2. **Ekibimiz** (`ekibimiz.html`) - Detaylı ekip üyeleri sayfası
3. **Projelerimiz** (`projelerimiz.html`) - Tamamlanmış projeler portföyü
4. **İletişim** (`iletisim.html`) - İletişim formu ve bilgileri

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## Teknolojiler

- HTML5, CSS3, JavaScript
- GSAP (animasyonlar)
- Lenis (smooth scroll)
- PocketBase (backend)
- Vite (build tool)

## İletişim Formu

İletişim formu PocketBase'e bağlı ve aşağıdaki alanları içerir:
- Ad Soyad *
- Şirket
- Telefon
- Email *
- Mesaj *

Tüm formlar otomatik olarak PocketBase'deki `harbiagencycom_contact` koleksiyonuna kaydedilir.

## Sunucu

Geliştirme sunucusu: `http://localhost:5173/`

## Lisans

© 2025 Harbi Agency. Tüm hakları saklıdır.
