# Everydaysworks Blogs

`everydaysworks.neumedialab.org` altında yayımlanacak kaynaklı araştırma dosyalarının repository’si.

## Yeni yayın akışı

1. `content/blog/` altında `GG.AA.YYYY.md` adıyla yeni içerik kaydı oluşturulur.
2. Front matter içinde `title`, `date`, `slug`, `section`, `summary` ve `status` alanları doldurulur.
3. Görseller ve videolar `client/public/media/` içine anlamlı dosya adlarıyla eklenir.
4. Sayfa bileşeni içinde içerik, kaynakça ve medya yolları güncellenir.
5. `pnpm check && pnpm build` çalıştırılır.
6. Değişiklikler `main` branch’ine push edilir.
7. Cloudflare Pages otomatik build alır ve production yayını günceller.

## URL standardı

İlk yayın:

```text
/blog/20.09.2026
```

İleride konu başlığına dayalı kalıcı slug kullanılabilir; tarihli URL, araştırma dosyalarının arşiv niteliğini korur.

## Editoryal standart

Her dosyada açık kanun hükmü, haber/yorum ve eleştiri birbirinden ayrılmalıdır. Birincil kaynaklar, bağımsız kaynaklar ve hak arama rehberleri ayrı etiketlerle verilmelidir. Hukuki uyarı metni her yayında korunmalı; güncelleme tarihi görünür tutulmalıdır.
