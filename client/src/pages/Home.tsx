import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Copy,
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
import { useEffect, useState } from "react";

const VIDEO_URL = "/media/dijital-yas-dogrulama-aciklama.mp4";
const HERO_IMAGE = "/media/hero.jpg";
const TOKEN_IMAGE = "/media/token-network.jpg";
const RIGHTS_IMAGE = "/media/rights-path.jpg";
const ELIF_IMAGE = "/media/elif-eralp-victory.jpg";
type LanguageCode = "tr" | "en" | "de" | "fr";
const LANGUAGE_LABELS: Record<LanguageCode, string> = { tr: "TR", en: "EN", de: "DE", fr: "FR" };
const BERLIN_COPY: Record<LanguageCode, { title: string; lead: string; intro: string; quote: string; alt: string; caption: string; transcript: string; translation: string; thanks: string; factTitle: string; factDate: string; party: string; afd: string; uncertain: string; official: string; p1: string; p2: string; p3: string; p4: string; opinion: string; opinionLabel: string; share: string }> = {
  tr: { title: "Berlin’den gelen yanıt: Die Linke birinci, Elif Eralp için şimdi koalisyon sınavı", lead: "20 Eylül 2026 Berlin Eyalet Meclisi seçiminde Die Linke, resmi portalın geçici sonuçlarında yüzde 25,7 ile birinci sırada. Türkiye kökenli aday Elif Eralp’in Berlin’in Yönetici Belediye Başkanı olup olmayacağı ise henüz kesinleşmiş değil.", intro: "Şehrimizde, sevgi ve adalet nefrete karşı kazandı. Bunu bugün hep birlikte gösterdik ve bu sinyal dünyaya yayılıyor.", quote: "Bugünden itibaren Berlin’imizi birlikte değiştiriyor ve onu daha iyi bir yer haline getiriyoruz. Hep beraber.", alt: "Elif Eralp seçim gecesi Die Linke destekçilerine hitap ederken", caption: "Elif Eralp, Berlin seçiminde Die Linke’nin birinci çıkmasının ardından seçim gecesi konuşurken.", transcript: "Zafer konuşmasından alıntı ve Türkçe çeviri", translation: "Sevgili Berlin, sevgili Berlinliler. Şehrimizde sevgi ve adalet nefrete karşı kazandı. Bunu bugün hep birlikte gösterdik ve bu sinyal dünyaya yayılıyor.", thanks: "Sevgili Berlinliler, güveniniz için teşekkür ediyorum. Herkesin onurlu bir şekilde yaşayabileceği, daha iyi ve ödenebilir bir Berlin umudu taşıyan herkese teşekkürler. Bugün şehrimizdeki pek çok insanla birlikte tarih yazdık.", factTitle: "Kesin sonuç ile makamı ayır", factDate: "21 Eylül 2026 · resmi geçici sonuç", party: "İkinci oy: %25,7 · 465.949 oy.", afd: "İkinci oy: %16,2 · 2023’e göre belirgin artış.", uncertain: "Eralp’in Yönetici Belediye Başkanı olup olmayacağı koalisyon ve meclis oylamasına bağlı.", official: "Berlin resmi sonuç portalını aç", p1: "Berlin hem eyalet hem şehir statüsünde. Halkın seçtiği Eyalet Meclisi, hükümet kurulduktan sonra Yönetici Belediye Başkanı’nı seçiyor. Die Linke’nin birinci çıkması güçlü bir siyasi mandat; fakat tek başına çoğunluk anlamına gelmiyor.", p2: "Elif Eralp’in kampanyasının merkezinde yüksek kiralar, barınma ve sosyal adalet vardı. Die Linke kira artışlarını sınırlama, kiracıları koruma ve büyük konut stoklarının kamusallaştırılması gibi hedefler savundu. Bunlar seçim vaatleri; uygulanmış politika değil.", p3: "Berlin’de AfD’nin oyu da arttı. Ancak mevcut geçici tabloda AfD birinci parti değil ve diğer büyük partiler AfD ile koalisyona sıcak bakmıyor. Bu nedenle bu sonuç, Trumpizmle, teknoloji sermayesinin aşırı sağa verdiği görünür destekle ve göçmen karşıtı siyasal dalgayla kuşatılan bir dönemde Berlin’den gelen önemli bir demokratik yanıt olarak okunabilir. Bu son cümle haber olgusu değil, bu yayının editoryal yorumudur.", p4: "Elon Musk gibi teknoloji sermayesinin güçlü aktörlerinin Donald Trump çizgisini ve Avrupa’daki aşırı sağ hareketleri büyüten iletişim ağlarını desteklediği bir atmosferde, göçmen kökenli bir hukukçunun barınma, eşitlik ve toplumsal katılım başlıklarıyla Berlin’in en güçlü siyasi adaylarından birine dönüşmesi bu karşılaşmanın sembolik ağırlığını artırıyor. Yine de hükümet kurulmuş gibi sunmamak gerekir: Die Linke kazandı; Eralp’in hükümet kurup kuramayacağı koalisyon görüşmelerinde belirlenecek.", opinion: "Benim kişisel değerlendirmem: Eralp’i yakından tanımıyorum; ancak kampanya öncesi röportajlarında hazırlıklı, hukuki meselelerin farkında ve göçmenlerin temsilini önemseyen bir aday görüntüsü verdiğine inanıyorum.", opinionLabel: "Editoryal görüş · haber olgusundan ayrı tutulmuştur", share: "Berlin’den gelen yanıt: Die Linke birinci, Elif Eralp için şimdi koalisyon sınavı" },
  en: { title: "Berlin’s Answer: The Left Party Comes First as Elif Eralp Faces a Coalition Test", lead: "In Berlin’s 20 September 2026 state election, Die Linke came first in the official preliminary results with 25.7%. Whether candidate Elif Eralp becomes Governing Mayor remains undecided.", intro: "In our city, love and justice have defeated hate. We showed this together today, and this signal is going out into the world.", quote: "From today onwards, we are changing Berlin together and making it a better place. All together.", alt: "Elif Eralp speaking to Die Linke supporters on election night", caption: "Elif Eralp speaking on election night after Die Linke came first in Berlin.", transcript: "Excerpt from the victory speech and translation", translation: "Dear Berlin, dear Berliners. In our city, love and justice have defeated hate. We showed this together today, and this signal is going out into the world.", thanks: "Dear Berliners, thank you for your trust. Thank you to everyone who hopes for a better, affordable Berlin where everyone can live with dignity. Today, many people in our city wrote history together.", factTitle: "Separate the result from the office", factDate: "21 September 2026 · official preliminary result", party: "Second vote: 25.7% · 465,949 votes.", afd: "Second vote: 16.2% · a clear rise from 2023.", uncertain: "Whether Eralp becomes Governing Mayor depends on coalition talks and a parliamentary vote.", official: "Open Berlin’s official results portal", p1: "Berlin is both a state and a city. The elected state parliament chooses the Governing Mayor after a government is formed. Die Linke’s first-place result is a strong political mandate, but it is not a majority on its own.", p2: "Eralp’s campaign focused on high rents, housing and social justice. Die Linke proposed limiting rent increases, protecting tenants and bringing large housing stocks into public ownership. These are campaign promises, not implemented policies.", p3: "The AfD also increased its vote. Yet it did not come first in the preliminary Berlin result, and the other major parties are not open to a coalition with it. In this context, shaped by Trumpism, visible support for the far right from technology capital and an anti-immigrant political wave, the result can be read as an important democratic answer from Berlin. This is editorial interpretation, not a reported fact.", p4: "In a political atmosphere where powerful technology-capital actors such as Elon Musk support the Trump line and communication networks that amplify the European far right, the rise of a lawyer from a migrant family as one of Berlin’s strongest candidates gives this contest symbolic weight. The result must not be presented as a government already formed: Die Linke won; Eralp’s ability to form a government will be decided in coalition talks.", opinion: "My personal assessment: I do not know Eralp personally, but her pre-election interviews gave me the impression of a prepared candidate aware of legal questions and committed to migrant representation.", opinionLabel: "Editorial view · kept separate from reported facts", share: "Berlin’s Answer: The Left Party Comes First as Elif Eralp Faces a Coalition Test" },
  de: { title: "Berlins Antwort: Die Linke stärkste Kraft – Elif Eralp vor der Koalitionsprüfung", lead: "Bei der Berliner Abgeordnetenhauswahl am 20. September 2026 liegt Die Linke nach den vorläufigen offiziellen Ergebnissen mit 25,7 Prozent vorn. Ob Elif Eralp Regierende Bürgermeisterin wird, ist noch offen.", intro: "In unserer Stadt haben Liebe und Gerechtigkeit über den Hass gesiegt. Das haben wir heute gemeinsam gezeigt. Dieses Signal geht in die Welt.", quote: "Von heute an verändern wir Berlin gemeinsam und machen unsere Stadt zu einem besseren Ort. Gemeinsam.", alt: "Elif Eralp spricht am Wahlabend zu Unterstützerinnen und Unterstützern der Linken", caption: "Elif Eralp spricht am Wahlabend, nachdem Die Linke in Berlin stärkste Kraft wurde.", transcript: "Auszug aus der Siegesrede und Übersetzung", translation: "Liebes Berlin, liebe Berlinerinnen und Berliner. In unserer Stadt haben Liebe und Gerechtigkeit über den Hass gesiegt. Das haben wir heute gemeinsam gezeigt. Dieses Signal geht in die Welt.", thanks: "Liebe Berlinerinnen und Berliner, danke für euer Vertrauen. Danke an alle, die auf ein besseres, bezahlbares Berlin hoffen, in dem jeder Mensch in Würde leben kann. Heute haben viele Menschen in unserer Stadt gemeinsam Geschichte geschrieben.", factTitle: "Ergebnis und Amt auseinanderhalten", factDate: "21. September 2026 · vorläufiges offizielles Ergebnis", party: "Zweitstimmen: 25,7 % · 465.949 Stimmen.", afd: "Zweitstimmen: 16,2 % · deutlicher Zuwachs gegenüber 2023.", uncertain: "Ob Eralp Regierende Bürgermeisterin wird, hängt von Koalitionsverhandlungen und einer Parlamentswahl ab.", official: "Offizielles Berliner Ergebnisportal öffnen", p1: "Berlin ist zugleich Bundesland und Stadt. Das gewählte Abgeordnetenhaus wählt die Regierende Bürgermeisterin, sobald eine Regierung gebildet ist. Der erste Platz der Linken ist ein starkes politisches Mandat, aber keine alleinige Mehrheit.", p2: "Im Mittelpunkt von Eralps Wahlkampf standen hohe Mieten, Wohnen und soziale Gerechtigkeit. Die Linke forderte Begrenzungen bei Mieterhöhungen, Schutz für Mieterinnen und Mieter sowie die Vergesellschaftung großer Wohnungsbestände. Das sind Wahlversprechen und noch keine umgesetzte Politik.", p3: "Auch die AfD konnte zulegen. In Berlin wurde sie nach den vorläufigen Ergebnissen jedoch nicht stärkste Kraft; die anderen großen Parteien sind für eine Koalition mit ihr nicht offen. In einem von Trumpismus, sichtbarer Unterstützung der extremen Rechten durch Technologiekapital und einer migrationsfeindlichen Welle geprägten Kontext kann das Ergebnis als wichtige demokratische Antwort aus Berlin gelesen werden. Das ist redaktionelle Einordnung, keine berichtete Tatsache.", p4: "In einer politischen Atmosphäre, in der mächtige Akteure des Technologiekapitals wie Elon Musk die Trump-Linie und Netzwerke zur Stärkung der europäischen extremen Rechten unterstützen, erhält der Aufstieg einer Juristin aus einer Einwandererfamilie zusätzliches symbolisches Gewicht. Das Ergebnis darf nicht als bereits gebildete Regierung dargestellt werden: Die Linke hat gewonnen; ob Eralp eine Regierung bilden kann, entscheiden die Koalitionsgespräche.", opinion: "Meine persönliche Einschätzung: Ich kenne Eralp nicht persönlich, doch ihre Interviews vor der Wahl vermittelten mir den Eindruck einer gut vorbereiteten Kandidatin, die juristische Fragen versteht und die politische Teilhabe von Menschen mit Migrationsgeschichte ernst nimmt.", opinionLabel: "Redaktionelle Einschätzung · getrennt von berichteten Fakten", share: "Berlins Antwort: Die Linke stärkste Kraft – Elif Eralp vor der Koalitionsprüfung" },
  fr: { title: "La réponse de Berlin : Die Linke arrive en tête, Elif Eralp face à l’épreuve de la coalition", lead: "Lors de l’élection berlinoise du 20 septembre 2026, Die Linke arrive en tête des résultats officiels provisoires avec 25,7 %. La nomination d’Elif Eralp comme maire-gouverneure reste incertaine.", intro: "Dans notre ville, l’amour et la justice ont vaincu la haine. Nous l’avons montré ensemble aujourd’hui, et ce signal se propage dans le monde.", quote: "À partir d’aujourd’hui, nous transformons Berlin ensemble et nous en faisons une ville meilleure. Tous ensemble.", alt: "Elif Eralp s’adresse aux soutiens de Die Linke le soir de l’élection", caption: "Elif Eralp s’exprime le soir de l’élection après l’arrivée de Die Linke en tête à Berlin.", transcript: "Extrait du discours de victoire et traduction", translation: "Chers Berlin, chères Berlinoises, chers Berlinois. Dans notre ville, l’amour et la justice ont vaincu la haine. Nous l’avons montré ensemble aujourd’hui, et ce signal se propage dans le monde.", thanks: "Chères Berlinoises, chers Berlinois, merci pour votre confiance. Merci à toutes celles et ceux qui espèrent une ville meilleure et abordable où chacun puisse vivre dans la dignité. Aujourd’hui, beaucoup de personnes ont écrit l’histoire ensemble.", factTitle: "Distinguer le résultat et la fonction", factDate: "21 septembre 2026 · résultat officiel provisoire", party: "Deuxièmes voix : 25,7 % · 465 949 voix.", afd: "Deuxièmes voix : 16,2 % · nette progression depuis 2023.", uncertain: "La nomination d’Eralp dépend des négociations de coalition et d’un vote parlementaire.", official: "Ouvrir le portail officiel des résultats", p1: "Berlin est à la fois un Land et une ville. La Chambre des députés élue choisit la maire-gouverneure après la formation d’un gouvernement. L’arrivée de Die Linke en tête constitue un mandat politique fort, mais pas une majorité à elle seule.", p2: "La campagne d’Eralp s’est concentrée sur les loyers élevés, le logement et la justice sociale. Die Linke proposait de limiter les hausses de loyers, de protéger les locataires et de placer dans le domaine public une partie du parc immobilier des grands groupes. Il s’agit de promesses électorales, pas de politiques déjà appliquées.", p3: "L’AfD a également progressé. Elle n’est toutefois pas arrivée en tête à Berlin et les autres grands partis ne sont pas ouverts à une coalition avec elle. Dans un contexte marqué par le trumpisme, le soutien visible du capital technologique à l’extrême droite et une vague politique hostile aux personnes immigrées, ce résultat peut être lu comme une réponse démocratique importante venue de Berlin. Cette phrase relève de l’interprétation éditoriale, non d’un fait rapporté.", p4: "Dans une atmosphère politique où des acteurs puissants du capital technologique, comme Elon Musk, soutiennent la ligne de Trump et les réseaux qui amplifient l’extrême droite européenne, l’ascension d’une juriste issue de l’immigration prend une force symbolique particulière. Il ne faut toutefois pas présenter le résultat comme un gouvernement déjà formé : Die Linke a gagné ; la capacité d’Eralp à former un gouvernement sera décidée par les négociations de coalition.", opinion: "Mon appréciation personnelle : je ne connais pas Eralp personnellement, mais ses entretiens avant l’élection m’ont donné l’image d’une candidate préparée, attentive aux questions juridiques et engagée en faveur de la représentation des personnes issues de l’immigration.", opinionLabel: "Point de vue éditorial · distinct des faits rapportés", share: "La réponse de Berlin : Die Linke arrive en tête, Elif Eralp face à l’épreuve de la coalition" },
};

function LanguageSwitcher({ current }: { current: LanguageCode }) {
  return <div className="language-switcher" aria-label="Yayın dili">
    <span className="language-label">DİL</span>
    {(Object.keys(LANGUAGE_LABELS) as LanguageCode[]).map((code) => <a key={code} className={current === code ? "active" : ""} href={`?lang=${code}#berlin`} aria-current={current === code ? "page" : undefined}>{LANGUAGE_LABELS[code]}</a>)}
  </div>;
}

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

function ShareBar({ title, shareUrl }: { title: string; shareUrl?: string }) {
  const pageUrl = shareUrl ?? (typeof window === "undefined" ? "https://everydaysworks-blog.pages.dev/" : window.location.href);
  const url = encodeURIComponent(pageUrl);
  const text = encodeURIComponent(title);
  const links = [
    { label: "Facebook", glyph: "f", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: "Instagram", glyph: "◎", href: `https://www.instagram.com/?url=${url}` },
    { label: "X", glyph: "𝕏", href: `https://twitter.com/intent/tweet?text=${text}&url=${url}` },
    { label: "Mastodon", glyph: "m", href: `https://mastodon.social/share?text=${text}%20${url}` },
    { label: "LinkedIn", glyph: "in", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { label: "WhatsApp", glyph: "↗", href: `https://wa.me/?text=${text}%20${url}` },
  ];
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(pageUrl); } catch { /* clipboard may be unavailable */ }
  };
  return <div className="share-bar" aria-label="Bu yayını paylaş">
    <span className="share-label">PAYLAŞ</span>
    <div className="share-buttons">
      {links.map((item) => <a className="share-button" key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.label} üzerinde paylaş`} title={`${item.label} üzerinde paylaş`}><span>{item.glyph}</span></a>)}
      <button className="share-button" type="button" onClick={copyLink} aria-label="Bağlantıyı kopyala" title="Bağlantıyı kopyala"><Copy size={15} /></button>
    </div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language] = useState<LanguageCode>(() => {
    const requested = new URLSearchParams(window.location.search).get("lang") as LanguageCode | null;
    return requested && requested in BERLIN_COPY ? requested : "tr";
  });
  const berlin = BERLIN_COPY[language];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash);
      if (!target) return;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 78, behavior: "auto" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

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
            <a href="#berlin" onClick={() => setMenuOpen(false)}>Berlin</a>
            <a href="#kaynaklar" onClick={() => setMenuOpen(false)}>Kaynaklar</a>
          </nav>
          <a className="header-cta" href="#ayrim">Önce ayrımı gör <ChevronRight size={15} /></a>
          <LanguageSwitcher current={language} />
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

        <section className="container content-layout" id="berlin">
          <article className="article-column">
            <SectionLabel>02 / BERLİN</SectionLabel>
            <div className="language-inline"><span>Read this publication in your language · Bu yayını kendi dilinizde okuyun:</span><LanguageSwitcher current={language} /></div>
            <h2>{berlin.title}</h2>
            <p className="lead">{berlin.lead}</p>
            <div className="victory-intro"><p>{berlin.intro}</p><small>Elif Eralp · {language === "tr" ? "seçim gecesi zafer konuşması" : language === "de" ? "Siegesrede am Wahlabend" : language === "fr" ? "discours de victoire" : "election-night victory speech"}</small></div>
            <div className="quote-panel victory-quote"><span className="quote-mark">“</span><p>{berlin.quote}</p><small>Elif Eralp · {language === "tr" ? "DW aktarımı" : language === "de" ? "nach Angaben der DW" : language === "fr" ? "selon la DW" : "as reported by DW"}</small></div>
            <figure className="publication-figure"><img src={ELIF_IMAGE} alt={berlin.alt} /><figcaption>{berlin.caption} Fotoğraf: Axel Schmidt / REUTERS · <a href="https://www.reuters.com/world/far-left-party-wins-berlin-election-pledging-nationalise-housing-2026-09-20/" target="_blank" rel="noreferrer">Reuters</a></figcaption></figure>
            <div className="embedded-video"><div className="embedded-video-head"><span>SEÇİM GECESİ · İZLE</span><a href="https://www.youtube.com/watch?v=ZJfyL_N-ees" target="_blank" rel="noreferrer">Orijinal video <ArrowUpRight size={14} /></a></div><iframe src="https://www.youtube-nocookie.com/embed/ZJfyL_N-ees?rel=0" title="Berlin seçim gecesi: Elif Eralp ve Die Linke kutlamaları" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <div className="speech-transcript"><div className="speech-transcript-title">{berlin.transcript}</div><p className="speech-german"><em>Liebe, liebes Berlin, liebe Berlinerinnen, liebe Berliner. In unserer Stadt hat die Liebe und die Gerechtigkeit über den Hass gewonnen. Das haben wir heute alle gemeinsam gezeigt und dieses Signal geht raus in die Welt.</em></p><p>{berlin.translation}</p><p>{berlin.thanks}</p><small>Seçim gecesi video kaydı · Almanca özgün bölüm ve seçilen dilde çeviri</small></div>
            <div className="law-card">
              <div className="law-card-head"><span className="law-icon"><Check size={19} /></span><div><b>{berlin.factTitle}</b><small>{berlin.factDate}</small></div><span className="verified"><Check size={14} /> {language === "tr" ? "doğrulandı" : language === "de" ? "bestätigt" : language === "fr" ? "confirmé" : "verified"}</span></div>
              <div className="law-points"><div><strong>Die Linke</strong><span>{berlin.party}</span></div><div><strong>AfD</strong><span>{berlin.afd}</span></div><div><strong>{language === "tr" ? "Henüz kesin değil" : language === "de" ? "Noch offen" : language === "fr" ? "Pas encore définitif" : "Not yet decided"}</strong><span>{berlin.uncertain}</span></div></div>
              <SourceLink href="https://www.wahlen-berlin.de/wahlen/BE2026/Afspraes/AGH/ergebnisse.html">{berlin.official}</SourceLink>
            </div>
            <p>{berlin.p1}</p><p>{berlin.p2}</p><p>{berlin.p3}</p><p>{berlin.p4}</p>
            <div className="quote-panel"><span className="quote-mark">“</span><p>{berlin.opinion}</p><small>{berlin.opinionLabel}</small></div>
            <ShareBar title={berlin.share} shareUrl={`https://everydaysworks-blog.pages.dev/blog/21.09.2026-berlin-elif-eralp/?lang=${language}`} />
            <div className="source-grid">
              <a className="source-card" href="https://www.dw.com/tr/berlinde-bir-ilke-do%C4%9Fru-sol-partili-elif-eralp-kimdir/a-79331267" target="_blank" rel="noreferrer"><span className="source-type">HABER</span><h3>DW Türkçe</h3><p>Eralp’in biyografisi, konut politikası ve koalisyon belirsizliği.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.reuters.com/world/far-left-party-wins-berlin-election-pledging-nationalise-housing-2026-09-20/" target="_blank" rel="noreferrer"><span className="source-type">ULUSLARARASI</span><h3>Reuters</h3><p>Seçim oranları, konutların kamusallaştırılması ve koalisyon engelleri.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.euronews.com/my-europe/2026/09/19/tense-berlin-election-finale-who-is-to-emerge-strongest-in-the-capital" target="_blank" rel="noreferrer"><span className="source-type">ANALİZ</span><h3>Euronews</h3><p>Anketler, parti pozisyonları ve olası koalisyon aritmetiği.</p><ArrowUpRight size={17} /></a>
              <a className="source-card" href="https://www.youtube.com/watch?v=ZJfyL_N-ees" target="_blank" rel="noreferrer"><span className="source-type">VİDEO</span><h3>Seçim gecesi</h3><p>Die Linke destekçilerinin Berlin’deki kutlamaları ve Eralp’in konuşması.</p><ArrowUpRight size={17} /></a>
            </div>
          </article>
          <aside className="side-column"><div className="side-sticky"><div className="side-card action-card"><Sparkles size={21} /><h3>Bu haber güncellenecek</h3><p>Kesin sonuçlar ve koalisyon anlaşması açıklandığında Berlin dosyası yeniden düzenlenecek.</p><a href="https://www.wahlen-berlin.de/wahlen/BE2026/Afspraes/AGH/gewaehlte.html" target="_blank" rel="noreferrer">Seçilenler sayfasını izle <ArrowUpRight size={15} /></a></div><div className="side-card index-card"><div className="side-card-top"><span>İKİNCİ YAYIN</span><span>04</span></div><a href="#berlin"><span>01</span> Geçici sonuç ne diyor? <ChevronRight size={15} /></a><a href="#berlin"><span>02</span> Eralp kimdir? <ChevronRight size={15} /></a><a href="#berlin"><span>03</span> AfD ve koalisyon <ChevronRight size={15} /></a><a href="#berlin"><span>04</span> Türkiye için anlamı <ChevronRight size={15} /></a></div></div></aside>
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

      <footer className="site-footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><span>↗</span></span><span><strong>everydaysworks</strong><small>neumedialab.org · kaynaklı açıklama</small></span></div><div className="footer-share"><ShareBar title="everydaysworks · kaynaklı yayınlar" /><p>Yayınları beğendiyseniz paylaşarak bağımsız üretimi destekleyebilirsiniz.</p></div><span className="footer-date">20–21.09.2026</span></div></footer>
    </div>
  );
}
