const KİTAP_DEPOSU_ANAHTAR = "kaynakBilgiBookData";

let KİTAP_VERİSİ = {
  "din": [
    { id: "dn1", title: "Fikih Usulune Giris", author: "M. Zuhayli", price: 189, image: "images/dn1.jpg", description: "Ibadet ve muamelat konularina usul cercevesinden giris.", subcategory: "fikih" },
    { id: "dn2", title: "Gunluk Hayatta Fikih", author: "N. Atay", price: 172, image: "images/dn2.jpg", description: "Guncel meselelerde fikhi yaklasimlari sade dille sunar.", subcategory: "fikih" },
    { id: "dn3", title: "Akaid Esaslari", author: "O. Nasuhi", price: 164, image: "images/dn3.jpg", description: "Inanc esaslarini delilleriyle anlatan temel bir kaynak.", subcategory: "akaid" },
    { id: "dn4", title: "Iman ve Delil", author: "I. Sabri", price: 176, image: "images/dn4.jpg", description: "Akaid meselelerini akli ve nakli delillerle inceler.", subcategory: "akaid" },
    { id: "dn5", title: "Kelam Ilmine Giris", author: "B. Topaloglu", price: 198, image: "images/dn5.jpg", description: "Kelam ilminin temel kavramlari ve tartisma alanlari.", subcategory: "kelam" },
    { id: "dn6", title: "Modern Donemde Kelam", author: "Y. Karadeniz", price: 205, image: "images/dn6.jpg", description: "Cagdas sorulara kelami bakis acisiyla cevaplar.", subcategory: "kelam" },
    { id: "dn7", title: "Tasavvufun Esaslari", author: "A. Avni", price: 183, image: "images/dn7.jpg", description: "Tasavvufun ahlak ve nefis terbiyesi boyutunu aciklar.", subcategory: "tasavvuf" },
    { id: "dn8", title: "Kalp Egitimi", author: "I. Gazali", price: 194, image: "images/dn8.jpg", description: "Manevi gelisim ve ic disiplin odakli klasik metinler.", subcategory: "tasavvuf" },
    { id: "dn9", title: "Sorularla Dini Cevaplar", author: "H. Koc", price: 169, image: "images/dn9.jpg", description: "Sik sorulan dini sorulara kaynakli ve acik cevaplar.", subcategory: "cevaplar" },
    { id: "dn10", title: "Gencler IcIn Dini Rehber", author: "E. Demir", price: 158, image: "images/dn10.jpg", description: "Genclerin merak ettigi dini konulara aciklayici cevaplar.", subcategory: "cevaplar" }
  ],
  "bilim": [
    { id: "bl1", title: "Evrenin Dili", author: "F. Collins", price: 219, image: "images/bl1.jpg", description: "Bilimsel kesiflerin dusunce dunyasiyla bulustugu denemeler." },
    { id: "bl2", title: "Yaratilis Tartismalari", author: "N. Meyer", price: 205, image: "images/bl2.jpg", description: "Yaratilis ve evrim konularini akademik dengede degerlendirir." },
    { id: "bl3", title: "Kuantum ve Metafizik", author: "S. Chopra", price: 229, image: "images/bl3.jpg", description: "Kuantum dusuncesinin felsefi yorumlarini tartisir." },
    { id: "bl4", title: "Bilim Felsefesi ve Din", author: "J. Polkinghorne", price: 196, image: "images/bl4.jpg", description: "Bilimsel yontem ile inanc arasindaki iliskiyi inceler." },
    { id: "bl5", title: "Kainati Okumak", author: "T. Uyar", price: 184, image: "images/bl5.jpg", description: "Dogayi okuyarak anlam arayisini guclendiren populer eser." },
    { id: "bl6", title: "Bilimsel Dusunme Becerisi", author: "C. Sagan", price: 207, image: "images/bl6.jpg", description: "Elestirel dusunmeyi gelistiren bilimsel bakis acisi." },
    { id: "bl7", title: "Dijital Donusum Cagi", author: "M. Tegmark", price: 236, image: "images/bl7.jpg", description: "Teknolojinin toplum ve gelecek uzerindeki etkilerini inceler." },
    { id: "bl8", title: "Kozmosun Hikayesi", author: "N. Tyson", price: 214, image: "images/bl8.jpg", description: "Evrenin olusumu ve buyuk olcekteki duzeni anlatir." },
    { id: "bl9", title: "Deney ve Yontem", author: "K. Popper", price: 188, image: "images/bl9.jpg", description: "Bilimde yanlislanabilirlik ve deneysel yontemin onemi." },
    { id: "bl10", title: "Genetik Devrim", author: "J. Watson", price: 221, image: "images/bl10.jpg", description: "Genetik arastirmalarin bilime kattigi buyuk donusum." }
  ],
  "siyaset": [
    { id: "sy1", title: "Siyaset Bilimine Giris", author: "A. Heywood", price: 249, image: "images/sy1.jpg", description: "Temel kavramlari acik ve anlasilir sekilde sunan baslangic kitabi." },
    { id: "sy2", title: "Devlet ve Iktidar", author: "M. Foucault", price: 235, image: "images/sy2.jpg", description: "Iktidar yapilarini tarihsel perspektifle ele alir." },
    { id: "sy3", title: "Sivil Toplumun Gucleri", author: "R. Putnam", price: 198, image: "images/sy3.jpg", description: "Toplumsal katilimin demokrasiye etkisini anlatir." },
    { id: "sy4", title: "Modern Turkiye Siyaseti", author: "I. Cem", price: 210, image: "images/sy4.jpg", description: "Turkiyenin siyasi donusum sureclerini analiz eder." },
    { id: "sy5", title: "Jeopolitik Akillar", author: "R. Kaplan", price: 260, image: "images/sy5.jpg", description: "Bolgesel guc dengelerini ve stratejik hamleleri aciklar." },
    { id: "sy6", title: "Demokrasi Tartismalari", author: "N. Bobbio", price: 190, image: "images/sy6.jpg", description: "Demokrasinin sinirlari ve imkanlari uzerine denemeler." },
    { id: "sy7", title: "Secim Sistemleri Rehberi", author: "A. Lijphart", price: 225, image: "images/sy7.jpg", description: "Dunya genelindeki secim modellerini karsilastirir." },
    { id: "sy8", title: "Siyasi Dusunceler Tarihi", author: "Q. Skinner", price: 279, image: "images/sy8.jpg", description: "Klasik donemden guncel dusunceye kadar genis bir panorama." },
    { id: "sy9", title: "Toplum Sozlesmesi Uzerine", author: "J. Rousseau", price: 159, image: "images/sy9.jpg", description: "Siyasi mesruiyetin temelini tartisan klasik eser." },
    { id: "sy10", title: "Guc ve Mesruiyet", author: "M. Weber", price: 215, image: "images/sy10.jpg", description: "Otorite tipleri ve yonetim bicimlerinin sosyolojik analizi." }
  ],
  "ekonomi": [
    { id: "ek1", title: "Ekonomi 101", author: "G. Mankiw", price: 255, image: "images/ek1.jpg", description: "Mikro ve makro ekonominin temel kavramlarini sade dille anlatir." },
    { id: "ek2", title: "Kuresel Piyasalar", author: "J. Stiglitz", price: 272, image: "images/ek2.jpg", description: "Kuresel ekonomik duzendeki dinamikleri sorgular." },
    { id: "ek3", title: "Davranissal Iktisat", author: "R. Thaler", price: 238, image: "images/ek3.jpg", description: "Insan davranislarinin ekonomik kararlara etkisini ele alir." },
    { id: "ek4", title: "Paranin Tarihi", author: "N. Ferguson", price: 228, image: "images/ek4.jpg", description: "Paranin medeniyetlerle birlikte gecirdigi donusumu anlatir." },
    { id: "ek5", title: "Finansal Okuryazarlik", author: "B. Graham", price: 199, image: "images/ek5.jpg", description: "Bireysel butce ve yatirim yonetiminde temel rehber." },
    { id: "ek6", title: "Kalkinma Ekonomisi", author: "A. Sen", price: 265, image: "images/ek6.jpg", description: "Yoksulluk, refah ve kalkinma iliskisini etik boyutla yorumlar." },
    { id: "ek7", title: "Krizlerin Anatomisi", author: "C. Reinhart", price: 242, image: "images/ek7.jpg", description: "Finansal krizlerin ortak belirtileri ve cozum yollari." },
    { id: "ek8", title: "Dijital Ekonomi", author: "E. Brynjolfsson", price: 231, image: "images/ek8.jpg", description: "Teknolojinin uretim ve tuketim kaliplarini nasil degistirdigini aciklar." },
    { id: "ek9", title: "Enflasyon ve Refah", author: "P. Krugman", price: 214, image: "images/ek9.jpg", description: "Enflasyonun hane halki ve sirketlere etkisini orneklerle anlatir." },
    { id: "ek10", title: "Iktisat Felsefesi", author: "H. Arendt", price: 188, image: "images/ek10.jpg", description: "Ekonomik dusuncenin etik ve felsefi temellerini tartisir." }
  ],
  "tarih": [
    { id: "tr1", title: "Dunya Tarihinin Donum Noktalari", author: "P. Frankopan", price: 289, image: "images/tr1.jpg", description: "Kuresel tarihin akisini degistiren olaylari bir arada sunar." },
    { id: "tr2", title: "Osmanli Medeniyeti", author: "I. Ortayli", price: 259, image: "images/tr2.jpg", description: "Osmanli kurumlarini ve toplumsal yapisini ele alir." },
    { id: "tr3", title: "Cumhuriyetin Ilk Yillari", author: "S. Akin", price: 205, image: "images/tr3.jpg", description: "Yeni devletin kurulus surecini arastirma belgeleriyle anlatir." },
    { id: "tr4", title: "Antik Cag Uygarliklari", author: "M. Grant", price: 232, image: "images/tr4.jpg", description: "Misir, Yunan ve Roma gibi uygarliklari karsilastirir." },
    { id: "tr5", title: "Savastan Barisa", author: "J. Keegan", price: 244, image: "images/tr5.jpg", description: "Buyuk savaslarin toplumsal izlerini tarihi belgeyle aciklar." },
    { id: "tr6", title: "Kultur Tarihi Atlasi", author: "F. Braudel", price: 270, image: "images/tr6.jpg", description: "Ekonomi, iklim ve kulturu birlikte ele alan uzun donem analizi." },
    { id: "tr7", title: "Orta Cag Avrupasi", author: "J. Le Goff", price: 221, image: "images/tr7.jpg", description: "Orta Cag toplumunun gunluk hayati ve kurumlarini inceler." },
    { id: "tr8", title: "Anadolu'nun Bellegi", author: "H. Inalcik", price: 285, image: "images/tr8.jpg", description: "Anadolu tarihinin katmanli yapisini belgelerle ele alir." },
    { id: "tr9", title: "Medeniyetler Catismasi Mi?", author: "S. Huntington", price: 207, image: "images/tr9.jpg", description: "Medeniyet kavrami uzerinden guncel tarih yorumlari sunar." },
    { id: "tr10", title: "Tarih Yaziciligi", author: "E. H. Carr", price: 176, image: "images/tr10.jpg", description: "Tarihci, belge ve yorum iliskisini sorgulayan klasik eser." }
  ],
  "strateji": [
    { id: "st1", title: "The Art of War", author: "Sun Tzu", price: 149, image: "https://covers.openlibrary.org/b/id/4849549-L.jpg", description: "Stratejik dusunmenin temel ilkelerini ogreten zamansiz bir klasik." },
    { id: "st2", title: "Blue Ocean Strategy", author: "W. Chan Kim", price: 239, image: "https://covers.openlibrary.org/b/id/8219313-L.jpg", description: "Rekabetten uzak yeni pazar alanlari olusturma yaklasimi." },
    { id: "st3", title: "Competitive Advantage", author: "Michael E. Porter", price: 269, image: "https://covers.openlibrary.org/b/id/4233738-L.jpg", description: "Is dunyasinda surdurulebilir ustunluk icin analitik cerceve." },
    { id: "st4", title: "Liderlik ve Karar", author: "H. Mintzberg", price: 218, image: "images/st4.jpg", description: "Liderlerin belirsizlikte karar verme sureclerini inceler." },
    { id: "st5", title: "The Fifth Discipline", author: "Peter Senge", price: 233, image: "https://covers.openlibrary.org/b/id/5306808-L.jpg", description: "Kurumlarda ogrenme ve uzun vadeli strateji gelistirme rehberi." },
    { id: "st6", title: "Satranc ve Strateji", author: "G. Kasparov", price: 224, image: "images/st6.jpg", description: "Satranc prensiplerini is ve yasam stratejilerine tasir." },
    { id: "st7", title: "Getting to Yes", author: "Roger Fisher", price: 197, image: "https://covers.openlibrary.org/b/id/96165-L.jpg", description: "Kazanc-kazanc odakli etkili muzakere teknikleri." },
    { id: "st8", title: "Kurumsal Strateji Rehberi", author: "K. Andrews", price: 246, image: "images/st8.jpg", description: "Sirketlerin vizyon, misyon ve yol haritasi olusturma sureci." },
    { id: "st9", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 254, image: "https://covers.openlibrary.org/b/id/15174454-L.jpg", description: "Biliissel yanliliklarin stratejik kararlar uzerindeki etkileri." },
    { id: "st10", title: "Stratejik Zeka", author: "A. de Bono", price: 209, image: "images/st10.jpg", description: "Yaratici dusunme ve alternatif senaryo gelistirme teknikleri." }
  ]
};

const KATEGORİ_BİLGİSİ = {
  "din": { title: "Din", desc: "Fikih, akaid, kelam, tasavvuf ve cevaplar odakli secmeler." },
  "bilim": { title: "Bilim", desc: "Bilimsel dusunce, evren ve modern arastirmalara dair kaynaklar." },
  "siyaset": { title: "Siyaset", desc: "Toplum, devlet ve guc iliskilerini inceleyen eserler." },
  "ekonomi": { title: "Ekonomi", desc: "Finans, piyasa ve kalkinma odakli modern kaynaklar." },
  "tarih": { title: "Tarih", desc: "Medeniyetleri ve gecmisi cok boyutlu ele alan kitaplar." },
  "strateji": { title: "Strateji", desc: "Liderlik, karar ve rekabet ustune guclu rehberler." }
};

const VARSAYILAN_KİTAP_VERİSİ = JSON.parse(JSON.stringify(KİTAP_VERİSİ));

let katalogUzaktan = false;
let initCatalogPromise = null;

function normalizeCategoryBooks(arr) {
  var result = [];
  if (!Array.isArray(arr)) return result;
  for (var i = 0; i < arr.length; i++) {
    var book = arr[i];
    if (!book || typeof book !== "object" || !book.id || !book.title) continue;
    result.push({
      id: String(book.id),
      title: String(book.title || ""),
      author: String(book.author || ""),
      price: Number(book.price) || 0,
      image: String(book.image || ""),
      description: String(book.description || ""),
      subcategory: book.subcategory ? String(book.subcategory) : undefined
    });
  }
  return result;
}

function normalizeFullCatalog(parsed) {
  var nextData = JSON.parse(JSON.stringify(VARSAYILAN_KİTAP_VERİSİ));
  for (var category in KATEGORİ_BİLGİSİ) {
    if (!Object.prototype.hasOwnProperty.call(KATEGORİ_BİLGİSİ, category)) continue;
    if (Array.isArray(parsed[category])) {
      nextData[category] = kategoriKitaplariniNormalizeEt(parsed[category]);
    }
  }
  return nextData;
}

function kitapVerisiniYukle() {
  try {
    var raw = localStorage.getItem(KİTAP_DEPOSU_ANAHTAR);
    if (!raw) return;
    var parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    KİTAP_VERİSİ = tamKataloguNormalizeEt(parsed);
  } catch (error) {
    console.warn("Kitap verisi okunamadi:", error);
  }
}

function sunucuKatalogAyarla(data) {
  KİTAP_VERİSİ = tamKataloguNormalizeEt(data);
  katalogUzaktan = true;
}

function katalogBaslat() {
  if (!initCatalogPromise) {
    initCatalogPromise = Promise.resolve().then(function () {
      katalogUzaktan = false;
      kitapVerisiniYukle();
      kapaklariArkaplandaGuncelle();
    });
  }
  return initCatalogPromise;
}

function katalogUzaktanMi() {
  return katalogUzaktan;
}

function kitapVerisiniAl() {
  return KİTAP_VERİSİ;
}

async function kitapVerisiniKaydet(nextBookData) {
  KİTAP_VERİSİ = nextBookData;
  if (katalogUzaktan) {
    const token = sessionStorage.getItem("kaynakBilgiAdminApiToken");
    if (!token) {
      throw new Error("Admin oturumu gerekli; panelden tekrar giris yapin.");
    }
    const res = await fetch("/api/catalog", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(KİTAP_VERİSİ)
    });
    if (!res.ok) {
      let msg = "Sunucuya kaydedilemedi";
      try {
        const err = await res.json();
        if (err.error) msg = err.error;
      } catch (_) {}
      throw new Error(msg);
    }
    return;
  }
  localStorage.setItem(KİTAP_DEPOSU_ANAHTAR, JSON.stringify(KİTAP_VERİSİ));
}

function kitapVerisiniSifirla() {
  KİTAP_VERİSİ = JSON.parse(JSON.stringify(VARSAYILAN_KİTAP_VERİSİ));
  localStorage.removeItem(KİTAP_DEPOSU_ANAHTAR);
}

function tumKitaplariAl() {
  var all = [];
  for (var category in KİTAP_VERİSİ) {
    if (!Object.prototype.hasOwnProperty.call(KİTAP_VERİSİ, category)) continue;
    var books = KİTAP_VERİSİ[category];
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      all.push({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        description: book.description,
        category: category,
        subcategory: book.subcategory
      });
    }
  }
  return all;
}

function bekle(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function kitapKapağınıGetir(title, author) {
  var attempts = [
    "https://openlibrary.org/search.json?limit=8&q=" + encodeURIComponent(title + " " + author),
    "https://openlibrary.org/search.json?limit=8&title=" + encodeURIComponent(title),
    "https://openlibrary.org/search.json?limit=8&author=" + encodeURIComponent(author)
  ];
  for (var i = 0; i < attempts.length; i++) {
    var url = attempts[i];
    try {
      var res = await fetch(url);
      if (!res.ok) continue;
      var data = await res.json();
      var docs = data.docs || [];
      for (var j = 0; j < docs.length; j++) {
        var doc = docs[j];
        if (doc.cover_i) {
          return "https://covers.openlibrary.org/b/id/" + doc.cover_i + "-L.jpg";
        }
      }
    } catch (e) {
      console.warn("Fetch error:", e);
    }
    await bekle(400);
  }
  return null;
}

async function kitapResimleriGuncelle() {
  for (var category in KİTAP_VERİSİ) {
    if (!Object.prototype.hasOwnProperty.call(KİTAP_VERİSİ, category)) continue;
    var books = KİTAP_VERİSİ[category];
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      if (!book.image || String(book.image).indexOf("images/") !== 0) continue;
      var cover = await kitapKapağınıGetir(book.title, book.author);
      if (cover) book.image = cover;
    }
  }
  await kitapVerisiniKaydet(KİTAP_VERİSİ);
}

function kapaklariArkaplandaGuncelle() {
  try {
    if (localStorage.getItem("kaynakBilgiCoversFetched") === "true") return;
    setTimeout(function () {
      kitapResimleriGuncelle()
        .then(function () {
          localStorage.setItem("kaynakBilgiCoversFetched", "true");
        })
        .catch(function (e) {
          console.warn("Kapak guncelleme hatasi:", e);
        });
    }, 600);
  } catch (_) {}
}

function varsayilanKitapIdleriAl() {
  var ids = [];
  for (var category in VARSAYILAN_KİTAP_VERİSİ) {
    if (!Object.prototype.hasOwnProperty.call(VARSAYILAN_KİTAP_VERİSİ, category)) continue;
    var books = VARSAYILAN_KİTAP_VERİSİ[category];
    for (var i = 0; i < books.length; i++) {
      ids.push(books[i].id);
    }
  }
  return new Set(ids);
}

function ozelEklenenKitaplariAl() {
  var defaults = varsayilanKitapIdleriAl();
  var all = tumKitaplariAl();
  var custom = [];
  for (var i = 0; i < all.length; i++) {
    var book = all[i];
    if (!defaults.has(book.id)) {
      custom.push(book);
    }
  }
  return custom;
}