/**
 * uygulama.js
 * Sepet işlemleri, ürün listeleme ve arama fonksiyonlarını içerir.
 */

function sepetiAl() {
  return JSON.parse(localStorage.getItem("kaynakBilgiCart") || "[]");
}

function sepetKaydet(sepet) {
  localStorage.setItem("kaynakBilgiCart", JSON.stringify(sepet));
  sepetSayisiniGuncelle();
}

function bildiriGoster(mesaj) {
  var sarici = document.getElementById("bildirimKapsayici");
  if (!sarici) {
    sarici = document.createElement("div");
    sarici.id = "bildirimKapsayici";
    sarici.className = "bildirim-kapsayici";
    document.body.appendChild(sarici);
  }
  var bildiri = document.createElement("div");
  bildiri.className = "bildirim";
  bildiri.textContent = mesaj;
  sarici.appendChild(bildiri);
  setTimeout(function () {
    bildiri.remove();
  }, 2800);
}

function sepetSayisiniGuncelle() {
  var sepet = sepetiAl();
  var toplam = 0;
  for (var i = 0; i < sepet.length; i++) {
    toplam += sepet[i].qty;
  }
  var sayaclar = document.querySelectorAll("[data-cart-count]");
  for (var i = 0; i < sayaclar.length; i++) {
    sayaclar[i].textContent = toplam;
  }
}

function sepeteEkle(kitap) {
  var sepet = sepetiAl();
  var varolan = null;
  for (var i = 0; i < sepet.length; i++) {
    if (sepet[i].id === kitap.id) {
      varolan = sepet[i];
      break;
    }
  }
  if (varolan) {
    varolan.qty += 1;
  } else {
    sepet.push({
      id: kitap.id,
      title: kitap.title,
      author: kitap.author,
      price: kitap.price,
      image: kitap.image,
      description: kitap.description,
      qty: 1
    });
  }
  sepetKaydet(sepet);
  bildiriGoster("Kitap sepete eklendi.");
}

function kitaplariRendirle(hedefId, kitaplar) {
  var hedef = document.getElementById(hedefId);
  if (!hedef) return;
  var html = "";
  for (var i = 0; i < kitaplar.length; i++) {
    var kitap = kitaplar[i];
    html += "<article class='kitap'><img src='" + kitap.image + "' alt='" + kitap.title + "'>";
    html += "<div class='kitap-govde'><h3>" + kitap.title + "</h3>";
    html += "<p class='soluk'>" + kitap.author + "</p>";
    html += "<p class='soluk'>" + kitap.description + "</p>";
    html += "<p class='fiyat'>" + kitap.price + " TL</p>";
    html += "<div class='kitap-eylemleri'><button class='dugme' data-add='" + kitap.id + "'>Sepete Ekle</button></div>";
    html += "</div></article>";
  }
  hedef.innerHTML = html;

  var ekleButonlari = hedef.querySelectorAll("[data-add]");
  for (var i = 0; i < ekleButonlari.length; i++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var tumKitaplar = tumKitaplariAl();
        var bulunanKitap = null;
        for (var j = 0; j < tumKitaplar.length; j++) {
          if (tumKitaplar[j].id === btn.dataset.add) {
            bulunanKitap = tumKitaplar[j];
            break;
          }
        }
        if (bulunanKitap) sepeteEkle(bulunanKitap);
      });
    })(ekleButonlari[i]);
  }
}

function aramaKurulus(girdiId, sonucId, sakliBolumler, aramaSilindi) {
  sakliBolumler = sakliBolumler || [];
  var girdi = document.getElementById(girdiId);
  var sonuc = document.getElementById(sonucId);
  if (!girdi || !sonuc) return;

  girdi.addEventListener("input", function (e) {
    var sorgu = e.target.value.trim().toLowerCase();
    if (!sorgu) {
      sonuc.innerHTML = "";
      for (var i = 0; i < sakliBolumler.length; i++) {
        var elem = document.querySelector(sakliBolumler[i]);
        if (elem) elem.classList.remove("gizli");
      }
      if (aramaSilindi) aramaSilindi();
      return;
    }
    var tumKitaplar = tumKitaplariAl();
    var filtrelenmiş = [];
    for (var i = 0; i < tumKitaplar.length; i++) {
      var k = tumKitaplar[i];
      var baslik = k.title.toLowerCase();
      var yazar = k.author.toLowerCase();
      var kategori = k.category.toLowerCase();
      if (baslik.indexOf(sorgu) !== -1 || yazar.indexOf(sorgu) !== -1 || kategori.indexOf(sorgu) !== -1) {
        filtrelenmiş.push(k);
      }
    }
    for (var i = 0; i < sakliBolumler.length; i++) {
      var elem = document.querySelector(sakliBolumler[i]);
      if (elem) elem.classList.add("gizli");
    }
    sonuc.innerHTML = '<h2 class="bolum-baslik">Arama Sonuclari (' + filtrelenmiş.length + ')</h2><div id="aramaKafesi" class="kitaplar-kafes"></div>';
    kitaplariRendirle("aramaKafesi", filtrelenmiş);
  });
}

document.addEventListener("DOMContentLoaded", sepetSayisiniGuncelle);