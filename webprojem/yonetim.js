/**
 * ADMIN PANELİ (yonetim.html)
 * Not: Bu panel sadece istemci tarafında örnek bir giriş kontrolü kullanır.
 */
const YONETICI_AYARLARI = {
  KULLANICI_ADI: "admin",
  SIFRE: "1234",
  OTURUM_ANAHTARI: "kaynakBilgiAdminSession",
  API_JETONU: "dev-token-1234"
};

// DOM
const girisBolumu = document.getElementById("girisBolumu");
const yonetimBolumu = document.getElementById("yonetimBolumu");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");

const urunListesi = document.getElementById("productList");
const urunFormu = document.getElementById("productForm");
const categorySelect = document.getElementById("productCategory");
const dinAltKategoriKapsayici = document.getElementById("dinSubcategoryContainer");
const dinSubcategorySelect = document.getElementById("productDinSubcategory");
const imageFileInput = document.getElementById("productImageFile");
const resimOnizleme = document.getElementById("imagePreview");
const productSubmitBtn = document.getElementById("productSubmitBtn");
const editCancelBtn = document.getElementById("editCancelBtn");
const productFormMessage = document.getElementById("productFormMessage");

let duzenlemeKitapId = null;
let duzenlemeKitapKaynakKategori = null;
let resimOnizlemeNesneUrl = null;

/**
 * Giriş Durumu Kontrolleri
 */
function isAdminLoggedIn() {
  return sessionStorage.getItem(YONETICI_AYARLARI.OTURUM_ANAHTARI) === "true";
}

function setAdminSession(value) {
  if (value) {
    sessionStorage.setItem(YONETICI_AYARLARI.OTURUM_ANAHTARI, "true");
    sessionStorage.setItem("kaynakBilgiAdminApiToken", YONETICI_AYARLARI.API_JETONU);
  } else {
    sessionStorage.removeItem(YONETICI_AYARLARI.OTURUM_ANAHTARI);
    sessionStorage.removeItem("kaynakBilgiAdminApiToken");
  }
}

/**
 * Resim İşlemleri (Önizleme ve Boyutlandırma)
 */
function clearImagePreview() {
  if (resimOnizlemeNesneUrl) URL.revokeObjectURL(resimOnizlemeNesneUrl);
  resimOnizlemeNesneUrl = null;
  if (resimOnizleme) {
    resimOnizleme.classList.add("gizli");
    resimOnizleme.src = "";
  }
}

async function kucukResimDataUrl(file, maxWidth = 800) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Ürün Formu Yönetimi
 */
function kategoriSecenekleriniDoldur() {
  if (!categorySelect) return;
  // yonetim.html zaten statik option’larla geliyor; yine de ileride dinamik gerekirse:
  // categorySelect.innerHTML = ...
}

function dinAltKategoriKontrol() {
  const isDin = categorySelect && categorySelect.value === "din";
  if (dinAltKategoriKapsayici) dinAltKategoriKapsayici.classList.toggle("gizli", !isDin);
  if (dinSubcategorySelect) dinSubcategorySelect.required = !!isDin;
}

function duzenleModunaGir(book) {
  duzenlemeKitapId = book.id;
  duzenlemeKitapKaynakKategori = book.category;

  document.getElementById("productTitle").value = book.title;
  document.getElementById("productAuthor").value = book.author;
  document.getElementById("productPrice").value = book.price;
  document.getElementById("productDescription").value = book.description;
  categorySelect.value = book.category;
  
  dinAltKategoriKontrol();
  if (book.subcategory && dinSubcategorySelect) {
    dinSubcategorySelect.value = book.subcategory;
  }

  if (book.image) {
    resimOnizleme.src = book.image;
    resimOnizleme.classList.remove("gizli");
  }

  if (productSubmitBtn) productSubmitBtn.textContent = "Guncelle";
  if (editCancelBtn) editCancelBtn.classList.remove("hidden");
  urunFormu.scrollIntoView({ behavior: "smooth" });
}

function formuSifirla() {
  duzenlemeKitapId = null;
  duzenlemeKitapKaynakKategori = null;
  urunFormu.reset();
  clearImagePreview();
  if (productSubmitBtn) productSubmitBtn.textContent = "Ürün Ekle";
  if (editCancelBtn) editCancelBtn.classList.add("hidden");
  dinAltKategoriKontrol();
}

/**
 * Listeleme ve Silme
 */
function urunleriRendirle() {
  if (!isAdminLoggedIn()) {
    if (urunListesi) urunListesi.innerHTML = "";
    return;
  }
  const allBooks = tumKitaplariAl();
  if (!allBooks.length) {
    if (urunListesi) urunListesi.innerHTML = "<p class='soluk'>Henuz urun bulunmuyor.</p>";
    return;
  }

  urunListesi.innerHTML = allBooks.map((book) => `
    <article class="admin-product-item">
      <div>
        <strong>${book.title}</strong>
        <p class="soluk">${book.author} - ${book.price} TL (${book.category})</p>
      </div>
      <div class="admin-product-actions">
        <button class="dugme" onclick="adminDuzenle('${book.id}', '${book.category}')">Duzenle</button>
        <button class="dugme hata" onclick="adminSil('${book.id}', '${book.category}')">Sil</button>
      </div>
    </article>
  `).join("");
}

// Global fonksiyonlar (onclick için)
window.adminDuzenle = (id, cat) => {
  const book = (kitapVerisiniAl()[cat] || []).find(b => b.id === id);
  if (book) duzenleModunaGir({ ...book, category: cat });
};

window.adminSil = async (id, cat) => {
  if (!confirm("Bu urunu silmek istediginize emin misiniz?")) return;
  const data = kitapVerisiniAl();
  data[cat] = data[cat].filter(b => b.id !== id);
  await kitapVerisiniKaydet(data);
  urunleriRendirle();
};

/**
 * Olay Dinleyicileri
 */
document.addEventListener("DOMContentLoaded", () => {
  katalogBaslat().then(() => {
    panelGuncelle();
    dinAltKategoriKontrol();
  });

  categorySelect?.addEventListener("change", dinAltKategoriKontrol);

  imageFileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
    resimOnizlemeNesneUrl = URL.createObjectURL(file);
    resimOnizleme.src = resimOnizlemeNesneUrl;
      resimOnizleme.classList.remove("gizli");
    }
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("loginUsername").value.trim();
    const p = document.getElementById("loginPassword").value;

    if (u === YONETICI_AYARLARI.KULLANICI_ADI && p === YONETICI_AYARLARI.SIFRE) {
      setAdminSession(true);
      if (loginMessage) loginMessage.textContent = "";
      panelGuncelle();
    } else {
      if (loginMessage) loginMessage.textContent = "Hatalı giriş. Tekrar deneyin.";
    }
  });

  logoutBtn?.addEventListener("click", () => {
    setAdminSession(false);
    formuSifirla();
    if (productFormMessage) productFormMessage.textContent = "";
    panelGuncelle();
  });

  editCancelBtn?.addEventListener("click", formuSifirla);

  urunFormu?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!isAdminLoggedIn()) {
      if (productFormMessage) productFormMessage.textContent = "Giriş yapmadan işlem yapılamaz.";
      return;
    }
    const cat = categorySelect.value;
    const file = imageFileInput.files[0];
    
    let image = resimOnizleme.src;
    if (file) image = await kucukResimDataUrl(file);
    if (!duzenlemeKitapId && (!image || image.trim() === "")) {
      if (productFormMessage) productFormMessage.textContent = "Yeni ürün için resim yükleyiniz.";
      return;
    }

    const bookData = {
      id: duzenlemeKitapId || `${cat}-${Date.now()}`,
      title: document.getElementById("productTitle").value,
      author: document.getElementById("productAuthor").value,
      price: Number(document.getElementById("productPrice").value),
      description: document.getElementById("productDescription").value,
      image: image
    };

    if (cat === "din") bookData.subcategory = dinSubcategorySelect.value;

    const data = kitapVerisiniAl();
    
    // Eski kategoriden sil (kategori degismis olabilir)
    if (duzenlemeKitapKaynakKategori) {
      data[duzenlemeKitapKaynakKategori] = data[duzenlemeKitapKaynakKategori].filter(b => b.id !== duzenlemeKitapId);
    }

    // Yeni kategoriye ekle
    if (!data[cat]) data[cat] = [];
    data[cat].push(bookData);

    try {
      await kitapVerisiniKaydet(data);
      formuSifirla();
      urunleriRendirle();
      if (productFormMessage) productFormMessage.textContent = "İşlem başarılı.";
    } catch (err) {
      if (productFormMessage) productFormMessage.textContent = "Hata: " + err.message;
    }
  });
});

function panelGuncelle() {
  if (isAdminLoggedIn()) {
    if (girisBolumu) girisBolumu.classList.add("gizli");
    if (yonetimBolumu) yonetimBolumu.classList.remove("gizli");
    urunleriRendirle();
  } else {
    if (yonetimBolumu) yonetimBolumu.classList.add("gizli");
    if (girisBolumu) girisBolumu.classList.remove("gizli");
    if (urunListesi) urunListesi.innerHTML = "";
  }
}