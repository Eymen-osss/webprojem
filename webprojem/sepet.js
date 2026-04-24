function sepetRendirle() {
  var sepet = sepetiAl();
  var hedef = document.getElementById("sepetUrunleri");
  var toplamEleman = document.getElementById("toplamFiyat");
  if (!hedef || !toplamEleman) return;

  if (!sepet.length) {
    hedef.innerHTML = "<p class='soluk'>Sepetiniz bos.</p>";
    toplamEleman.textContent = "0 TL";
    sepetSayisiniGuncelle();
    return;
  }

  var html = "";
  for (var i = 0; i < sepet.length; i++) {
    var urun = sepet[i];
    var toplam = urun.price * urun.qty;
    html += "<div class='cart-item'><img src='" + urun.image + "' alt='" + urun.title + "'><div><h4>" + urun.title + "</h4>";
    html += "<p class='soluk'>" + urun.price + " TL</p><div class='qty-controls'>";
    html += "<button data-dec='" + urun.id + "'>-</button><span>" + urun.qty + "</span>";
    html += "<button data-inc='" + urun.id + "'>+</button><button data-remove='" + urun.id + "'>Sil</button>";
    html += "</div></div><strong>" + toplam + " TL</strong></div>";
  }
  hedef.innerHTML = html;

  var toplamTutar = 0;
  for (var i = 0; i < sepet.length; i++) {
    toplamTutar += sepet[i].price * sepet[i].qty;
  }
  toplamEleman.textContent = toplamTutar + " TL";
  sepetSayisiniGuncelle();

  var artiBtnleri = hedef.querySelectorAll("[data-inc]");
  for (var i = 0; i < artiBtnleri.length; i++) {
    artiBtnleri[i].addEventListener("click", function () {
      miktarDegistir(this.dataset.inc, 1);
    });
  }
  
  var eksiBleri = hedef.querySelectorAll("[data-dec]");
  for (var i = 0; i < eksiBleri.length; i++) {
    eksiBleri[i].addEventListener("click", function () {
      miktarDegistir(this.dataset.dec, -1);
    });
  }
  
  var silBtnleri = hedef.querySelectorAll("[data-remove]");
  for (var i = 0; i < silBtnleri.length; i++) {
    silBtnleri[i].addEventListener("click", function () {
      urunSil(this.dataset.remove);
    });
  }
}

function miktarDegistir(urunId, fark) {
  var sepet = sepetiAl();
  var urun = null;
  for (var i = 0; i < sepet.length; i++) {
    if (sepet[i].id === urunId) {
      urun = sepet[i];
      break;
    }
  }
  if (!urun) return;
  urun.qty += fark;
  if (urun.qty <= 0) {
    var yeniSepet = [];
    for (var i = 0; i < sepet.length; i++) {
      if (sepet[i].id !== urunId) {
        yeniSepet.push(sepet[i]);
      }
    }
    sepetKaydet(yeniSepet);
  } else {
    sepetKaydet(sepet);
  }
  sepetRendirle();
}

function urunSil(urunId) {
  var sepet = sepetiAl();
  var yeniSepet = [];
  for (var i = 0; i < sepet.length; i++) {
    if (sepet[i].id !== urunId) {
      yeniSepet.push(sepet[i]);
    }
  }
  sepetKaydet(yeniSepet);
  sepetRendirle();
}


document.addEventListener("DOMContentLoaded", function () {
  sepetRendirle();

  var musteriFormu = document.getElementById("musteriFormu");
  var odemeFormu = document.getElementById("odemeFormu");
  var odemeModal = document.getElementById("odemeModal");
  var kapatModal = document.getElementById("kapatModal");
  var telefonGirdisi = document.getElementById("telefon");
  var sureGirdisi = document.getElementById("kartSonKullanma");
  var kartNumarasiGirdileri = [
    document.getElementById("kartNum1"),
    document.getElementById("kartNum2"),
    document.getElementById("kartNum3"),
    document.getElementById("kartNum4")
  ];

  function telefonFormatla(raw) {
    var rakamlar = raw.replace(/\D/g, "").slice(0, 10);
    if (!rakamlar.length) return "";
    var p1 = rakamlar.slice(0, 3);
    var p2 = rakamlar.slice(3, 10);
    return "(" + p1 + (p1.length < 3 ? "" : ")") + p2;
  }

  function sureFormatla(raw) {
    var rakamlar = raw.replace(/\D/g, "").slice(0, 4);
    if (rakamlar.length < 3) return rakamlar;
    return rakamlar.slice(0, 2) + "/" + rakamlar.slice(2);
  }

  telefonGirdisi.addEventListener("input", function () {
    telefonGirdisi.value = telefonFormatla(telefonGirdisi.value);
  });

  sureGirdisi.addEventListener("input", function () {
    sureGirdisi.value = sureFormatla(sureGirdisi.value);
  });

  for (var i = 0; i < kartNumarasiGirdileri.length; i++) {
    (function (index) {
      var input = kartNumarasiGirdileri[index];
      input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "").slice(0, 4);
        if (input.value.length === 4 && index < kartNumarasiGirdileri.length - 1) {
          kartNumarasiGirdileri[index + 1].focus();
        }
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !input.value && index > 0) {
          kartNumarasiGirdileri[index - 1].focus();
        }
      });
    })(i);
  }

  musteriFormu.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!sepetiAl().length) {
      bildiriGoster("Sepet bos. Once urun ekleyin.");
      return;
    }
    odemeModal.classList.add("open");
  });

  kapatModal.addEventListener("click", function () {
    odemeModal.classList.remove("open");
  });
  
  odemeModal.addEventListener("click", function (e) {
    if (e.target === odemeModal) odemeModal.classList.remove("open");
  });

  odemeFormu.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!sepetiAl().length) {
      bildiriGoster("Sepet bos.");
      return;
    }
    var tamMi = true;
    for (var i = 0; i < kartNumarasiGirdileri.length; i++) {
      if (kartNumarasiGirdileri[i].value.length !== 4) {
        tamMi = false;
        break;
      }
    }
    if (!tamMi) {
      bildiriGoster("Kart numarasini tam giriniz.");
      return;
    }
    localStorage.removeItem("kaynakBilgiCart");
    sepetRendirle();
    odemeFormu.reset();
    odemeModal.classList.remove("open");
    bildiriGoster("Satin alma basariyla tamamlandi.");
  });
});



