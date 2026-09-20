import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  ExternalLink,
  FileText,
  KeyRound,
  Menu,
  Play,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const VIDEO_URL = "/media/dijital-yas-dogrulama-aciklama.mp4";
const HERO_IMAGE = "/media/hero.jpg";
const TOKEN_IMAGE = "/media/token-network.jpg";
const RIGHTS_IMAGE = "/media/rights-path.jpg";

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {children} <ExternalLink size={13} strokeWidth={2.2} />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label">{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>ARAŞTIRMA DOSYASI <span className="dot">•</span> 20 EYLÜL 2026</span>
          <span className="topline-note">Kesin hüküm ile uygulama tartışmasını ayırır.</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="everydaysworks neumedialab.org ana sayfa">
            <span className="brand-mark"><span>↗</span></span>
            <span><strong>everydaysworks</strong><small>neumedialab.org · kaynaklı açıklama</small></span>
          </a>
          <button className="mobile-menu" aria-label="Menüyü aç" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#dosya" onClick={() => setMenuOpen(false)}>Dosya</a>
            <a href="#video" onClick={() => setMenuOpen(false)}>Video</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#kaynaklar" onClick={() => setMenuOpen(false)}>Kaynaklar</a>
          </nav>
          <a className="header-cta" href="#ayrim">Önce ayrımı gör <ChevronRight size={15} /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 24, 38, .97) 0%, rgba(8, 24, 38, .86) 42%, rgba(8, 24, 38, .24) 100%), url(${HERO_IMAGE})` }}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> KAYNAKLI AÇIKLAMA</div>
              <h1>Yaş doğrulama mı,<br /><em>dijital kimlik</em> mi?</h1>
              <p className="hero-dek">Türkiye’de 15 yaş altı sosyal medya düzenlemesi, e-Devlet ve “fişleme” tartışması hakkında ne kesinleşti, ne henüz teknik model?</p>
              <div className="hero-actions">
                <a className="button button-coral" href="#video"><Play size={16} fill="currentColor" /> 4 dakikalık videoyu izle</a>
                <a className="button button-ghost" href="#dosya">Makaleyi oku <ArrowDown size={16} /></a>
              </div>
              <div className="hero-meta"><span><Clock3 size={14} /> 8 dk okuma</span><span><ShieldCheck size={14} /> 5 kaynak</span><span><Sparkles size={14} /> Güncel çerçeve</span></div>
            </div>
            <div className="hero-side-note">
              <span className="side-note-index">01</span>
              <span>Önemli ayrım</span>
              <p>Kanun metni 15 yaş altına hizmet yasağını açıkça yazıyor. e-Devlet/token modeli ise ayrı bir uygulama tartışması.</p>
            </div>
          </div>
        </section>

        <section className="signal-strip" id="ayrim">
          <div className="container signal-grid">
            <div className="signal-intro"><span>HIZLI OKUMA</span><strong>Tek cümlelik yanıt</strong></div>
            <div className="signal-item"><span className="signal-number">01</span><div><b>Kesinleşen</b><p>7578 sayılı Kanun, 15 yaşını doldurmamış çocuklara sosyal ağ hizmetini yasaklıyor.</p></div></div>
            <div className="signal-item"><span className="signal-number coral">02</span><div><b>Henüz ayrıntılanmayan</b><p>Herkesin e-Devlet’le hesap eşleştirmesi ve token altyapısının saklama modeli.</p></div></div>
          </div>
        </section>

        <section className="container content-layout" id="dosya">
          <article className="article-column">
            <SectionLabel>01 / DOSYA</SectionLabel>
            <h2>Haberin kaynağı ne, kanun tam olarak ne diyor?</h2>
            <p className="lead">Sorunun kısa cevabı şu: <strong>15 yaş altına yönelik sosyal ağ yasağı kanun metninde var.</strong> Fakat sosyal medya hesabının e-Devlet üzerinden devlet kimliğiyle eşleştirilmesinin bütün teknik ayrıntıları aynı kanun metninde yazmıyor.</p>
            <p>TBMM’nin yayımladığı <strong>7578 sayılı Sosyal Hizmetler Kanunu ve Bazı Kanunlarda Değişiklik Yapılmasına Dair Kanun</strong>, 5651 sayılı İnternet Kanunu’nun sosyal ağ sağlayıcılarla ilgili ek maddesini değiştiriyor. Metne göre sosyal ağ sağlayıcı, on beş yaşını doldurmamış çocuklara hizmet sunamayacak ve bunu sağlamak için yaş doğrulama dahil gerekli tedbirleri alacak. On beş yaşını doldurmuş çocuklara özgü ayrıştırılmış hizmet ve ebeveyn kontrol araçları da öngörülüyor.</p>
            <blockquote>“Sosyal ağ sağlayıcı, onbeş yaşını doldurmamış çocuklara hizmet sunamaz ve bu hizmetin sunulmaması konusunda yaş doğrulama dâhil gerekli tedbirleri almakla yükümlüdür.”<cite>7578 sayılı Kanun, 5651 sayılı Kanun ek 4/7</cite></blockquote>
            <p>Bu hükümler kanunun yayımından altı ay sonra yürürlüğe girecek. Kanun metnindeki yürürlük maddesi altı aylık süreyi açıkça belirliyor; kaynak haberlerde yayım tarihi 1 Mayıs 2026 olarak verildiği için kamuoyunda yaklaşık 1 Kasım 2026 tarihi konuşuluyor.</p>

            <div className="law-card">
              <div className="law-card-head"><span className="law-icon"><FileText size={19} /></span><div><b>Kanun metninden çıkan çerçeve</b><small>TBMM kaynağıyla doğrulandı</small></div><span className="verified"><Check size={14} /> doğrulandı</span></div>
              <div className="law-points">
                <div><strong>15 yaş altı</strong><span>Sosyal ağ sağlayıcı hizmet sunamaz.</span></div>
                <div><strong>15 yaş üstü çocuklar</strong><span>Ayrıştırılmış hizmet ve ebeveyn araçları gündemde.</span></div>
                <div><strong>Yürürlük</strong><span>İlgili maddeler yayımından 6 ay sonra.</span></div>
              </div>
              <SourceLink href="https://cdn.tbmm.gov.tr/KKBSPublicFile/D28/Y4/KanunMetni/9bf93173-7648-4771-ab36-0e45666c423d.htm">TBMM kanun metnini aç</SourceLink>
            </div>

            <div className="split-visual">
              <div className="visual-copy"><SectionLabel>02 / KİMLİK Mİ, YAŞ MI?</SectionLabel><h2>“Token” tartışması neden çıktı?</h2><p>e-Devlet üzerinden yaşın doğrulandığını gösteren, platforma doğrudan kimlik numarası iletmemesi amaçlanan bir dijital anahtar fikri haberlerde yer aldı. Ancak modelin veri akışı, saklama süresi ve devlet ile platform arasındaki sorumluluk bölümü kamuoyuna bütün teknik ayrıntılarıyla açıklanmış değil.</p><p className="small-note"><CircleAlert size={15} /> Bu bölüm, kanunun açık hükmü değil; açıklamalar ve haber kaynaklarında aktarılan uygulama modelidir.</p></div>
              <div className="visual-image" style={{ backgroundImage: `url(${TOKEN_IMAGE})` }} aria-label="Token ve sosyal ağ bağlantılarını anlatan soyut illüstrasyon" />
            </div>

            <div className="compare-block">
              <div className="compare-card confirmed"><div className="compare-head"><span className="compare-icon"><Check size={17} /></span><span>KANUNDA AÇIK</span></div><h3>Yaş sınırı ve ebeveyn araçları</h3><p>15 yaşını doldurmamış çocuklara hizmet sunulmaması; yaş doğrulama ve ebeveyn kontrolü için tedbir alınması.</p></div>
              <div className="compare-card disputed"><div className="compare-head"><span className="compare-icon"><CircleAlert size={17} /></span><span>AYRIŞTIRILMASI GEREKEN</span></div><h3>Tüm hesapların devletle eşleştirilmesi</h3><p>Bu, eleştirmenlerin ve haberlerin tartıştığı riskli modeldir; kanun metninde tüm teknik işleyişiyle yazılı bir hüküm olarak sunulmamalı.</p></div>
            </div>

            <SectionLabel>03 / BLOG</SectionLabel>
            <div id="blog" className="blog-heading"><h2>Çocuk koruma amacı, anonimlik hakkı ve “dondurucu etki”</h2><span>Okuma notu · 6 dk</span></div>
            <p>Çocukların çevrim içi risklerden korunması meşru bir kamu amacı olabilir. Tartışmanın düğüm noktası, bu amaca ulaşmak için bütün kullanıcıların kimlik ve hesap bilgilerinin devlet tarafından ilişkilendirilebilir hale gelip gelmeyeceğidir. İki farklı tasarım aynı sonucu doğurmaz: Platformun yalnızca “bu kullanıcı 15 yaşın üzerinde” sonucunu görmesi ile devletin kişinin hangi rumuzu kullandığını sürekli bilmesi, mahremiyet açısından farklı riskler yaratır.</p>
            <p>İfade Özgürlüğü Derneği ve Prof. Dr. Yaman Akdeniz gibi eleştirmenler, hesap rumuzlarının e-Devlet kimliğiyle eşleştirilmesinin anonimlik hakkını zayıflatabileceğini ve kullanıcıları siyasi eleştiriden uzaklaştırabileceğini savunuyor. Deutsche Welle’nin aktardığı İFÖD açıklamasında bu risk, “dondurucu etki” kavramıyla anlatılıyor. Dondurucu etki, bir kişi hakkını kullanabileceği halde izlenme, yaptırım veya kimliğinin açığa çıkması endişesiyle konuşmaktan vazgeçtiğinde ortaya çıkan otosansür riskidir.</p>
            <p>Bu iddiaları aktarırken ölçülü olmak önemli. Eleştiri, henüz kanun metninin kurduğu kesin ve tamamlanmış bir veri tabanının kanıtı değildir. Asıl izlenmesi gereken belgeler; BTK’nın ikincil düzenlemeleri, yaş doğrulama tedbirlerinin platformlar tarafından nasıl yayımlanacağı, veri minimizasyonu ilkeleri ve yanlış yaş tespiti halinde itiraz mekanizmasıdır.</p>

            <div className="quote-panel"><span className="quote-mark">“</span><p>Sorulması gereken yalnızca “fişleme olacak mı?” değil; hangi verinin, hangi amaçla, kim tarafından ve ne kadar süreyle işleneceğidir.</p><small>Bu dosyanın editoryal çerçevesi</small></div>

            <div className="rights-grid" id="hak-arama">
              <div className="rights-copy"><SectionLabel>04 / HAK ARAMA</SectionLabel><h2>Vatandaşlar ve uluslararası savunucular ne yapabilir?</h2><p>İzlenecek yol, soyut bir kampanyadan önce somut uygulamayı ve ihlal iddiasını belgelendirmektir. Yönetmelik, platform şartları veya yanlış yaş tespiti gibi belirli bir işlem ortaya çıktığında idari ve yargısal yollar, olayın niteliğine göre bir hukukçu tarafından değerlendirilmelidir.</p><div className="rights-list"><div><span>01</span><b>Belgele</b><p>Uygulama ekranını, bildirimi, tarihi ve hangi verinin istendiğini sakla.</p></div><div><span>02</span><b>İç hukuk</b><p>Somut olayda ilgili idari ve yargısal başvuru yollarını tüket.</p></div><div><span>03</span><b>Uluslararası</b><p>Koşullar oluşuyorsa AYM ve iç hukuk sonrasında AİHM seçeneklerini hukukçu ile değerlendir.</p></div></div></div>
              <div className="rights-image" style={{ backgroundImage: `url(${RIGHTS_IMAGE})` }} aria-label="Hak arama yollarını anlatan illüstrasyon" />
            </div>

            <div className="disclaimer"><Scale size={18} /><p><strong>Hukuki uyarı:</strong> Bu sayfa genel bilgilendirmedir; hukuki danışmanlık veya belirli bir başvuru için talimat değildir. AİHM ve diğer uluslararası mekanizmaların kabul edilebilirlik koşulları somut olaya göre değişir.</p></div>
          </article>

          <aside className="side-column">
            <div className="side-sticky">
              <div className="side-card video-card" id="video">
                <div className="side-card-top"><span>İZLE</span><span>04:00</span></div>
                <video controls preload="metadata" poster={HERO_IMAGE}><source src={VIDEO_URL} type="video/mp4" />Tarayıcınız video etiketini desteklemiyor.</video>
                <h3>Yaş doğrulama mı, dijital kimlik mi?</h3><p>Kanun, token modeli ve hak arama yolları tek videoda.</p>
                <div className="video-meta"><span><Clock3 size={14} /> 4 dk</span><span><Smartphone size={14} /> altyazı dostu</span></div>
              </div>

              <div className="side-card index-card">
                <div className="side-card-top"><span>DOSYA İÇERİĞİ</span><span>04</span></div>
                <a href="#dosya"><span>01</span> Kanun ne diyor? <ChevronRight size={15} /></a>
                <a href="#blog"><span>02</span> Token nereden çıktı? <ChevronRight size={15} /></a>
                <a href="#blog"><span>03</span> Anonimlik ve chilling effect <ChevronRight size={15} /></a>
                <a href="#hak-arama"><span>04</span> Hak arama yolları <ChevronRight size={15} /></a>
              </div>

              <div className="side-card action-card"><KeyRound size={21} /><h3>Bir sonraki belgeyi takip et</h3><p>Yönetmelik ve teknik yaş doğrulama tedbirleri yayımlandığında dosya güncellenecek.</p><a href="#kaynaklar">Kaynakları gör <ArrowUpRight size={15} /></a></div>
            </div>
          </aside>
        </section>

        <section className="source-section" id="kaynaklar">
          <div className="container">
            <SectionLabel>05 / KAYNAKLAR</SectionLabel>
            <div className="source-heading"><h2>Birincil metin, haber ve hak rehberleri</h2><p>Kesin hukuk kuralı ile yorum ve eleştiriyi ayırmak için kaynakları birlikte okuyun.</p></div>
            <div className="source-grid">
              <a className="source-card" href="https://cdn.tbmm.gov.tr/KKBSPublicFile/D28/Y4/KanunMetni/9bf93173-7648-4771-ab36-0e45666c423d.htm" target="_blank" rel="noreferrer"><span className="source-type">BİRİNCİL KAYNAK</span><h3>7578 sayılı Kanun</h3><p>TBMM kanun metni; 5651 sayılı Kanun’daki sosyal ağ değişiklikleri.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.dw.com/tr/sosyal-medyaya-e-devlet-%C5%9Fart%C4%B1-dijital-fi%C5%9Fleme-endi%C5%9Fesi/a-76687801" target="_blank" rel="noreferrer"><span className="source-type">HABER</span><h3>DW Türkçe</h3><p>e-Devlet şartı, token modeli ve İFÖD’ün dijital fişleme eleştirisi.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.anayasa.gov.tr/tr/bireysel-basvuru/temel-hak-ve-ozgurluklerin-ihlaline-dair-emsal-kararlar/ifade-ozgurlugune-dair-emsal-kararlar/ifade-ozgurlugune-dair-emsal-kararlar/" target="_blank" rel="noreferrer"><span className="source-type">RESMÎ REHBER</span><h3>Anayasa Mahkemesi</h3><p>İfade özgürlüğünün kapsamı ve bireysel başvuru emsal kararları.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.echr.coe.int/documents/d/echr/COURTalks_Inad_Talk_TUR" target="_blank" rel="noreferrer"><span className="source-type">ULUSLARARASI</span><h3>AİHM kabul edilebilirlik</h3><p>İç hukuk yolları, süre ve kabul edilebilirlik koşulları.</p><ArrowUpRight size={17} /></a>
            </div>
            <p className="source-footnote">Editoryal not: İFÖD açıklamasının arama sonucunda görünen URL’si taramada 404 döndü. İFÖD’ün görüşleri, DW Türkçe’nin 7 Nisan 2026 tarihli haberi üzerinden ayrıca doğrulanarak aktarıldı.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><span>↗</span></span><span><strong>NET / HAK</strong><small>kaynaklı açıklama</small></span></div><p>Bu dosya, dijital haklar ve internet özgürlüğü üzerine kaynaklı bir okuma notudur.</p><span className="footer-date">20.09.2026</span></div></footer>
    </div>
  );
}
