document.addEventListener("DOMContentLoaded", function () {
  katalogBaslat().then(function () {
    var anahtar = document.body.dataset.category;
    var bilgi = KATEGORİ_BİLGİSİ[anahtar];
    var kitaplar = KİTAP_VERİSİ[anahtar] || [];

    var baslikEl =
      document.getElementById("kategoriBilgiBolumu") ||
      document.getElementById("kategoriBaslik");
    var aciklamaEl = document.getElementById("kategoriAciklama");
    var gridId = document.getElementById("kategoriKitaplarBolumu")
      ? "kategoriKitaplarBolumu"
      : "kategoriKafesi";

    if (baslikEl) baslikEl.textContent = bilgi ? bilgi.title : "Kategori";
    if (aciklamaEl) aciklamaEl.textContent = bilgi ? bilgi.desc : "";
    kitaplariRendirle(gridId, kitaplar);

    if (anahtar === "din") {
      var altKat = document.getElementById("altKategoriFiltreleri");
      if (altKat) {
        altKat.classList.remove("gizli");
        var butonlar = altKat.querySelectorAll("[data-sub]");
        for (var i = 0; i < butonlar.length; i++) {
          (function (btn) {
            btn.addEventListener("click", function () {
              var sec = btn.dataset.sub;
              for (var j = 0; j < butonlar.length; j++) {
                butonlar[j].classList.remove("active");
              }
              btn.classList.add("active");
              var filtrelenmiş;
              if (sec === "all") {
                filtrelenmiş = kitaplar;
              } else {
                filtrelenmiş = [];
                for (var k = 0; k < kitaplar.length; k++) {
                  if (!kitaplar[k].subcategory || kitaplar[k].subcategory === sec) {
                    filtrelenmiş.push(kitaplar[k]);
                  }
                }
              }
              kitaplariRendirle(gridId, filtrelenmiş);
            });
          })(butonlar[i]);
        }
      }
    }
    aramaKurulus("aramaGirdisi", "aramaSonuclari", [
      "#kategoriBilgiBolumu",
      "#kategoriBaslik",
      "#kategoriKitaplarBolumu",
      "#kategoriKafesi",
      "#altKategoriFiltreleri"
    ]);

    var aktifLink = document.querySelector(`nav a[data-key="${anahtar}"]`);
    if (!aktifLink) {
      aktifLink = document.querySelector('nav a[href="' + anahtar + '.html"]');
    }
    if (aktifLink) aktifLink.classList.add("active");
  });
});



