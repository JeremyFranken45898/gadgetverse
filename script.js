"use strict";

let buy = 0;
let wishlist = [];

let brands = [
  {
    displayName: "Apple IBox",
    brandName: "Iphone",
    img: "assets/social.png",
    addr: "ibox.co.id",
    slug: "ibox",
  },
  {
    displayName: "samsung TAM",
    brandName: "Samsung",
    img: "assets/samsung.png",
    addr: "samsung.com",
    slug: "samsung",
  },
  {
    displayName: "Xiaomi",
    brandName: "Xiaomi",
    img: "assets/xiaomi.png",
    addr: "mi.co.id",
    slug: "mi",
  },
  {
    displayName: "Google Pixel",
    brandName: "Google",
    img: "assets/google.png",
    addr: "store.google.com",
    slug: "google store",
  },
  {
    displayName: "Sony Audio",
    brandName: "Sony",
    img: "assets/sony.png",
    addr: "sony.co.id",
    slug: "sony",
  },
  {
    displayName: "OnePlus",
    brandName: "One Plus",
    img: "assets/plus-one.png",
    addr: "www.oneplus.com",
    slug: "oneplus",
  },
];

let katalogItem = [
  {
    id: 1,
    hightLight: "PROMO UTAMA iBOX",
    type: "Featured Phone",
    category: "phone",
    productName: "iPhone 15 Pro 128GB Titanium",
    price: 18999000,
    currency: "id",
    link: "assets/iphone-1200.png",
    displayText:
      "Kamera utama 48MP Pro dengan sensor canggih, chip A17 Pro super cepat untuk gaming berat, bodi berbahan titanium kelas dirgantara.",
    bestFor:
      "Fotografi profesional tingkat tinggi, perekaman video sinematik format ProRes, performa gaming kelas berat tanpa lag, serta daya tahan bodi titanium premium.",
    discount: 15,
    tag: ["A17 Pro", "Titanium", "5G Ready", "Dynamic Island"],
    specs: {
      Chipset: "Apple A17 Pro (3 nm)",
      "RAM & Storage": "8GB RAM / 128GB Storage",
      "Kamera Utama": "48 MP + 12 MP + 12 MP",
      "Kamera Depan": "12 MP TrueDepth",
      Baterai: "3274 mAh (Fast Charging)",
      Layar: "6.1 inci Super Retina XDR OLED, 120Hz",
    },
    brand: "Iphone",
    class: "iphone",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 2,
    hightLight: "GARANSI TAM",
    type: "Android Phone",
    category: "phone",
    productName: "Samsung Galaxy S24 256GB",
    price: 13499000,
    currency: "id",
    link: "assets/s26-1200.webp",
    displayText:
      "Fitur cerdas Galaxy AI, layar Dynamic AMOLED 2X super cerah, dan performa baterai awet sepanjang hari.",
    bestFor:
      "Integrasi fitur AI canggih (Galaxy AI untuk penerjemah & ringkasan otomatis), visibilitas layar luar biasa di bawah terik matahari, serta produktivitas multitasking harian yang optimal.",
    discount: 10,
    tag: ["Galaxy AI", "Exynos 2400", "AMOLED 2X", "50MP Camera"],
    specs: {
      Chipset: "Exynos 2400 (4 nm)",
      "RAM & Storage": "8GB RAM / 256GB Storage",
      "Kamera Utama": "50 MP + 10 MP + 12 MP",
      "Kamera Depan": "12 MP",
      Baterai: "4000 mAh (Super Fast Charging)",
      Layar: "6.2 inci Dynamic AMOLED 2X, 120Hz",
    },
    brand: "Samsung",
    class: "galaxy",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 3,
    hightLight: "PILIHAN",
    type: "Power Accessories",
    category: "powerbank",
    productName: "Powerbank Anker 10k PD",
    price: 349000,
    currency: "id",
    link: "assets/anker-1200.jpg",
    displayText:
      "Powerbank mungil berkecepatan 30W Power Delivery dengan kabel Type-C built-in yang praktis.",
    bestFor:
      "Mobilitas perjalanan tinggi, pengisian daya darurat super cepat berstandar 30W, serta kepraktisan maksimal karena dilengkapi kabel bawaan tanpa perlu repot membawa kabel terpisah.",
    discount: 20,
    tag: ["10000mAh", "30W PD", "Built-in Cable", "Ultra Compact"],
    specs: {
      Kapasitas: "10000 mAh",
      "Output Max": "30W Power Delivery",
      Port: "USB-C Built-in Cable + USB-A Port",
      Fitur: "ActiveShield 2.0 Temperature Safety",
      Dimensi: "Sangat Ringkas & Portabel",
    },
    brand: "Anker",
    class: "anker",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 4,
    hightLight: "STOK TERBATAS",
    type: "Audio Gadget",
    category: "tws",
    productName: "TWS Soundcore R50i",
    price: 199000,
    currency: "id",
    link: "assets/tws-1200.webp",
    displayText:
      "TWS bluetooth dengan bass mantap, tahan cipratan air IPX5, dan total daya baterai awet hingga 30 jam.",
    bestFor:
      "Pengalaman mendengarkan musik dengan dentuman bass bertenaga, ketahanan fisik dari keringat atau cipratan air saat berolahraga, serta daya tahan baterai berhari-hari.",
    discount: 15,
    tag: ["Bluetooth 5.3", "IPX5 Water", "30h Playtime", "BassUp Tech"],
    specs: {
      Bluetooth: "Versi 5.3",
      "Daya Tahan": "10 Jam (Earbuds) + 30 Jam (Case)",
      Driver: "10mm High-Performance Drivers",
      "Ketahanan Air": "IPX5 Waterproof",
      Aplikasi: "Soundcore App Support (22 EQ Presets)",
    },
    brand: "Soundcore",
    class: "tws",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 5,
    hightLight: "NEW RELEASE",
    type: "Computer",
    category: "computer",
    productName: "MacBook Pro M3 (Contoh Komputer)",
    price: 24999000,
    currency: "id",
    link: "assets/social.png",
    displayText:
      "Laptop berperforma tinggi dengan chip M3 untuk kebutuhan kerja berat dan editing.",
    bestFor:
      "Penyuntingan video resolusi 4K/8K, pengembangan software atau programming skala besar, serta efisiensi daya luar biasa untuk para pekerja profesional kreatif.",
    discount: 5,
    tag: ["Apple M3", "16GB RAM", "512GB SSD", "Liquid Retina XDR"],
    specs: {
      Processor: "Apple M3 Chip (8-core CPU)",
      "RAM & Storage": "16GB Unified RAM / 512GB SSD",
      Grafis: "10-core GPU",
      Layar: "14.2 inci Liquid Retina XDR",
      Baterai: "Hingga 22 Jam Pemutaran Film",
    },
    brand: "Apple",
    class: "computer",
    tagColor: "blueTag",
    count: 0,
  },
];

const searchBar = document.querySelector(".search-wrap");
const searchInput = document.getElementById("search-bar");
const searchTagType = brands.map((n) => n.brandName);
const searchTipe = document.getElementById("search-tipe-container");
const clearBtn = document.getElementById("clear-button");
const filterOpt = document.getElementById("filter-option");
const countText = document.querySelector(".search p");
const bucket = document.getElementById("bucket");
const popUp = document.querySelector(".overlay");

// Custom framework (bikin sendiri)
function renderObj(type, Class, Content) {
  const doc = document.createElement(type);
  if (Array.isArray(Class)) {
    Class.forEach((element) => doc.classList.add(element));
  }
  doc.textContent = Content;
  return doc;
}

function updateBucketDisplay() {
  if (bucket) {
    bucket.textContent = buy > 0 ? `Keranjang (${buy})` : "Keranjang";
  }
}

countText.textContent = `Menampilkan ${katalogItem.length} dari ${katalogItem.length} item.`;

document.addEventListener("DOMContentLoaded", function () {
  updateBucketDisplay();

  if (bucket) {
    const wishlistNavBtn = document.createElement("button");
    wishlistNavBtn.id = "wishlist-nav-btn";
    wishlistNavBtn.innerHTML = `Wishlist (<span id="wishlist-count">${wishlist.length}</span>)`;
    bucket.insertAdjacentElement("afterend", wishlistNavBtn);

    const wishlistModal = document.createElement("div");
    wishlistModal.className = "gv-modal-backdrop";
    wishlistModal.innerHTML = `
      <div class="gv-modal-box gv-modal-box--sm">
        <button id="wishlist-modal-close" class="gv-modal-close">&times;</button>
        <h3 class="gv-modal-title">Daftar Wishlist Kamu</h3>
        <div id="wishlist-modal-list"></div>
      </div>
    `;
    document.body.appendChild(wishlistModal);

    document
      .getElementById("wishlist-modal-close")
      .addEventListener("click", () => {
        wishlistModal.classList.remove("open");
      });
    wishlistModal.addEventListener("click", (e) => {
      if (e.target === wishlistModal) wishlistModal.classList.remove("open");
    });

    function renderWishlistModal() {
      const listContainer = document.getElementById("wishlist-modal-list");
      if (wishlist.length === 0) {
        listContainer.innerHTML = `<p class="wishlist-empty-msg">Belum ada produk di Wishlist.</p>`;
        return;
      }

      listContainer.innerHTML = wishlist
        .map((id) => {
          const item = katalogItem.find((k) => k.id === id);
          if (!item) return "";
          return `
            <div class="wishlist-item-row">
              <div class="wishlist-item-info">
                <img src="${item.link}" class="wishlist-item-img" />
                <div>
                  <div class="wishlist-item-name">${item.productName}</div>
                  <div class="wishlist-item-price">Rp ${item.price.toLocaleString("ID")}</div>
                </div>
              </div>
              <button class="remove-wish-item" data-id="${id}">Hapus</button>
            </div>
          `;
        })
        .join("");

      listContainer.querySelectorAll(".remove-wish-item").forEach((btn) => {
        btn.addEventListener("click", function () {
          const targetId = parseInt(this.getAttribute("data-id"));
          wishlist = wishlist.filter((item) => item !== targetId);
          const countEl = document.getElementById("wishlist-count");
          if (countEl) countEl.textContent = wishlist.length;

          const cardWishBtn = document.querySelector(
            `.gv-wish-btn[data-id="${targetId}"]`,
          );
          if (cardWishBtn) {
            cardWishBtn.textContent = "Tambah ke Wishlist";
            cardWishBtn.classList.remove("saved");
          }
          renderWishlistModal();
        });
      });
    }

    wishlistNavBtn.addEventListener("click", () => {
      renderWishlistModal();
      wishlistModal.classList.add("open");
    });
  }

  const searchContainer = document.querySelector(".search");
  if (searchContainer) {
    const compareNavBtn = document.createElement("button");
    compareNavBtn.id = "compare-nav-btn";
    compareNavBtn.textContent = "Bandingkan Spesifikasi Produk";
    searchContainer.insertAdjacentElement("beforebegin", compareNavBtn);

    compareNavBtn.addEventListener("click", () => {
      openCompareModal();
    });
  }

  const compareModal = document.createElement("div");
  compareModal.id = "compare-modal-overlay";
  compareModal.className = "gv-modal-backdrop";
  compareModal.innerHTML = `
    <div class="gv-modal-box gv-modal-box--lg">
      <button id="compare-modal-close" class="gv-modal-close">&times;</button>
      <h3 class="gv-modal-title">Perbandingan Spesifikasi & Statistik</h3>
      
      <div class="compare-controls">
        <div class="compare-control-group">
          <label class="compare-label">PILIH KATEGORI:</label>
          <select id="compare-category-select" class="compare-select">
            <option value="phone">Handphone / Smartphone</option>
            <option value="powerbank">Powerbank</option>
            <option value="tws">TWS / Audio Gadget</option>
            <option value="computer">Komputer / Laptop</option>
          </select>
        </div>
        <div class="compare-control-group">
          <label class="compare-label">PRODUK PERTAMA:</label>
          <select id="compare-prod-a-select" class="compare-select"></select>
        </div>
        <div class="compare-control-group">
          <label class="compare-label">PRODUK KEDUA (PEMBANDING):</label>
          <select id="compare-prod-b-select" class="compare-select"></select>
        </div>
      </div>

      <div id="compare-content-area"></div>
    </div>
  `;
  document.body.appendChild(compareModal);

  document
    .getElementById("compare-modal-close")
    .addEventListener("click", () => {
      compareModal.classList.remove("open");
    });
  compareModal.addEventListener("click", (e) => {
    if (e.target === compareModal) compareModal.classList.remove("open");
  });

  const categorySelect = document.getElementById("compare-category-select");
  const prodASelect = document.getElementById("compare-prod-a-select");
  const prodBSelect = document.getElementById("compare-prod-b-select");

  categorySelect.addEventListener("change", function () {
    updateDropdowns(this.value);
  });

  prodASelect.addEventListener("change", renderComparisonTable);
  prodBSelect.addEventListener("change", renderComparisonTable);

  function openCompareModal() {
    compareModal.classList.add("open");
    categorySelect.value = "phone";
    updateDropdowns("phone");
  }

  function updateDropdowns(category) {
    const itemsInCat = katalogItem.filter((item) => item.category === category);

    prodASelect.innerHTML = "";
    prodBSelect.innerHTML = "";

    if (itemsInCat.length === 0) {
      prodASelect.innerHTML = `<option value="">Tidak ada produk</option>`;
      prodBSelect.innerHTML = `<option value="">Tidak ada produk</option>`;
      renderComparisonTable();
      return;
    }

    itemsInCat.forEach((item) => {
      prodASelect.add(new Option(item.productName, item.id));
      prodBSelect.add(new Option(item.productName, item.id));
    });

    if (itemsInCat.length > 1) {
      prodBSelect.selectedIndex = 1;
    } else {
      prodBSelect.innerHTML = `<option value="">(Belum ada produk pembanding)</option>`;
    }

    renderComparisonTable();
  }

  function renderComparisonTable() {
    const container = document.getElementById("compare-content-area");
    const idA = parseInt(prodASelect.value);
    const idB = parseInt(prodBSelect.value);

    const prodA = katalogItem.find((item) => item.id === idA);
    const prodB = katalogItem.find((item) => item.id === idB);

    if (!prodA) {
      container.innerHTML = `<div class="compare-empty">Silakan pilih produk terlebih dahulu.</div>`;
      return;
    }

    if (!prodB || isNaN(idB)) {
      let specRows = "";
      for (const [key, val] of Object.entries(prodA.specs)) {
        specRows += `<tr><td class="spec-key">${key}</td><td>${val}</td></tr>`;
      }

      container.innerHTML = `
        <div class="compare-single-grid">
          <div class="compare-single-card">
            <div class="compare-single-img-wrap">
              <img src="${prodA.link}" />
            </div>
            <h4 class="compare-single-title">${prodA.productName}</h4>
            <p class="compare-single-price">Rp ${prodA.price.toLocaleString("ID")}</p>
            <p class="compare-single-bestfor"><b>Keunggulan Utama:</b> ${prodA.bestFor}</p>
            
            <table class="compare-table compare-table--single">
              ${specRows}
            </table>
          </div>
          <div class="compare-warning">
            <p>⚠️ Belum ada produk pembanding yang dipilih atau tersedia di kategori ini.</p>
          </div>
        </div>
      `;
      return;
    }

    let allSpecKeys = new Set([
      ...Object.keys(prodA.specs),
      ...Object.keys(prodB.specs),
    ]);
    let tableRows = "";

    allSpecKeys.forEach((key) => {
      let valA = prodA.specs[key] || "-";
      let valB = prodB.specs[key] || "-";
      tableRows += `
        <tr>
          <td class="spec-key">${key}</td>
          <td class="spec-val">${valA}</td>
          <td class="spec-val">${valB}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="compare-scroll-wrap">
        <div class="compare-header-grid">
          <div></div>
          <div class="compare-col">
            <div class="compare-col-img-wrap">
              <img src="${prodA.link}" />
            </div>
            <div class="compare-col-name">${prodA.productName}</div>
            <div class="compare-col-price">Rp ${prodA.price.toLocaleString("ID")}</div>
          </div>
          <div class="compare-col">
            <div class="compare-col-img-wrap">
              <img src="${prodB.link}" />
            </div>
            <div class="compare-col-name">${prodB.productName}</div>
            <div class="compare-col-price">Rp ${prodB.price.toLocaleString("ID")}</div>
          </div>
        </div>

        <div class="compare-bestfor-grid">
          <div class="compare-bestfor-label">KEUNGGULAN UTAMA</div>
          <div class="compare-bestfor-val">${prodA.bestFor}</div>
          <div class="compare-bestfor-val">${prodB.bestFor}</div>
        </div>

        <table class="compare-table">
          ${tableRows}
        </table>
      </div>
    `;
  }

  const extendedProductData = {
    1: {
      type: "phone",
      capacities: { "128GB": 18999000, "256GB": 21999000 },
      colors: {
        "Desert Titanium":
          "https://techoasis.ie/cdn/shop/files/AppleiPhone15ProMaxDesertTitanium_VerifiedQuality_1.png?v=1760092821",
        "Natural Titanium": "assets/iphone-1200.png",
        "Black Titanium": "assets/iphone-1200.png",
      },
      stock: 5,
    },
    2: {
      type: "phone",
      capacities: { "256GB": 13499000, "512GB": 15499000 },
      colors: {
        "Amber Yellow":
          "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzyqxid-539294567?$720_576_JPG$",
        "Onyx Black":
          "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzkaxid-539294589?$720_576_JPG$",
        "Marble Gray":
          "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzaaxid-539294578?$720_576_JPG$",
      },
      stock: 3,
    },
    3: {
      type: "accessory",
      colors: {
        Black:
          "https://m.media-amazon.com/images/I/61y8v4zW2SL._AC_SL1500_.jpg",
        White:
          "https://m.media-amazon.com/images/I/51g1K6fL2cL._AC_SL1500_.jpg",
        Blue: "https://m.media-amazon.com/images/I/61r5o6zW2SL._AC_SL1500_.jpg",
      },
      stock: 8,
    },
    4: {
      type: "accessory",
      colors: {
        Black:
          "https://m.media-amazon.com/images/I/61p3l9S3-xL._AC_SL1500_.jpg",
        White:
          "https://m.media-amazon.com/images/I/61tJtN89-xL._AC_SL1500_.jpg",
        Pink: "https://m.media-amazon.com/images/I/61k8w9S3-xL._AC_SL1500_.jpg",
      },
      stock: 4,
    },
    5: {
      type: "computer",
      colors: {
        "Space Gray": "assets/social.png",
        Silver: "assets/social.png",
      },
      stock: 5,
    },
  };

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "product-modal-overlay";
  modalOverlay.className = "gv-modal-backdrop";
  modalOverlay.innerHTML = `
    <div id="product-modal-content" class="gv-modal-box gv-modal-box--md">
      <button id="modal-close" class="gv-modal-close">&times;</button>
      <div id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  document.getElementById("modal-close").addEventListener("click", () => {
    modalOverlay.classList.remove("open");
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("open");
  });

  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("beli-button")) {
      e.preventDefault();
      const card = e.target.closest(".card");
      if (!card) return;
      const productName = card.querySelector(".tech-name").textContent;
      const elem = katalogItem.find((k) => k.productName === productName);
      if (!elem) return;

      const prodData = extendedProductData[elem.id] || {
        type: "accessory",
        colors: { Default: elem.link },
        stock: 5,
      };

      if (prodData.stock <= 0) {
        alert("Maaf, stok produk ini habis!");
        return;
      }

      const modalBody = document.getElementById("modal-body");
      let currentActiveColor = Object.keys(prodData.colors)[0];
      let initialImgSrc = prodData.colors[currentActiveColor];

      let modalHtml = `
        <div class="pmodal-layout">
          <div class="pmodal-left">
            <img id="modal-product-img" src="${initialImgSrc}" alt="${elem.productName}" />
            <span id="modal-color-caption" class="pmodal-color-caption">Warna: ${currentActiveColor}</span>
          </div>

          <div class="pmodal-right">
            <div>
              <span class="pmodal-badge">GadgetVerse Official</span>
              <h3 class="pmodal-title">${elem.productName}</h3>

              <div class="pmodal-group">
                <label class="pmodal-label">PILIH WARNA:</label>
                <div class="pmodal-opt-row">
                  ${Object.keys(prodData.colors)
                    .map(
                      (color, i) => `
                    <button class="modal-color-btn ${i === 0 ? "selected" : ""}" data-color="${color}" data-img="${prodData.colors[color]}">${color}</button>
                  `,
                    )
                    .join("")}
                </div>
              </div>
      `;

      if (prodData.type === "phone") {
        modalHtml += `
              <div class="pmodal-group">
                <label class="pmodal-label">PILIH KAPASITAS STORAGE:</label>
                <div class="pmodal-opt-row">
                  ${Object.keys(prodData.capacities)
                    .map(
                      (cap, i) => `
                    <button class="modal-cap-btn ${i === 0 ? "selected" : ""}" data-cap="${cap}">${cap}</button>
                  `,
                    )
                    .join("")}
                </div>
              </div>
        `;
      }

      modalHtml += `
              <div class="pmodal-addon-box">
                <label class="pmodal-addon-label">
                  <input type="checkbox" id="modal-addon" value="150000">
                  <span>Tambah Proteksi Extra & Tempered Glass (<b>+Rp 150.000</b>)</span>
                </label>
              </div>

              <div class="pmodal-group">
                <label class="pmodal-label">METODE PEMBAYARAN:</label>
                <div class="pmodal-opt-row">
                  <button class="modal-pay-btn selected" data-method="full">Bayar Full</button>
                  <button class="modal-pay-btn" data-method="cicil">Nyicil 6 Bulan</button>
                </div>
              </div>

              <div id="installment-panel" class="pmodal-installment">
                <div class="pmodal-installment-title">SKEMA NYICIL:</div>
                <div class="pmodal-installment-body">
                  Tenor: <b>6 Bulan</b> (Bunga 0%)<br>Tagihan: <b id="modal-installment">Rp 0</b> /bln
                </div>
              </div>
            </div>

            <div class="pmodal-footer">
              <div>
                <span id="modal-price-label" class="pmodal-price-label">Total Bayar Lunas:</span>
                <span id="modal-total-price" class="pmodal-total-price">Rp 0</span>
              </div>
              <button id="modal-confirm-buy">Konfirmasi Pesanan</button>
            </div>
          </div>
        </div>
      `;

      modalBody.innerHTML = modalHtml;
      modalOverlay.classList.add("open");

      let selectedCapacity =
        prodData.type === "phone" ? Object.keys(prodData.capacities)[0] : null;
      let currentModalPrice =
        prodData.type === "phone"
          ? prodData.capacities[selectedCapacity]
          : elem.price;
      let addonChecked = false;
      let paymentMethod = "full";

      const modalPriceLabelEl = document.getElementById("modal-price-label");
      const modalTotalPriceEl = document.getElementById("modal-total-price");
      const modalInstallmentEl = document.getElementById("modal-installment");
      const modalAddonCheckbox = document.getElementById("modal-addon");
      const installmentPanel = document.getElementById("installment-panel");

      function updatePricing() {
        let finalPrice = currentModalPrice + (addonChecked ? 150000 : 0);
        let monthly = Math.round(finalPrice / 6);
        if (paymentMethod === "full") {
          modalPriceLabelEl.textContent = "Total Bayar Lunas:";
          modalTotalPriceEl.textContent = `Rp ${finalPrice.toLocaleString("ID")}`;
        } else {
          modalPriceLabelEl.textContent = `Cicilan 6x (Total Rp ${finalPrice.toLocaleString("ID")}):`;
          modalTotalPriceEl.textContent = `Rp ${monthly.toLocaleString("ID")} /bln`;
          modalInstallmentEl.textContent = `Rp ${monthly.toLocaleString("ID")}`;
        }
      }
      updatePricing();

      modalBody.querySelectorAll(".modal-color-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalBody
            .querySelectorAll(".modal-color-btn")
            .forEach((b) => b.classList.remove("selected"));
          this.classList.add("selected");
          document.getElementById("modal-product-img").src =
            this.getAttribute("data-img");
          document.getElementById("modal-color-caption").textContent =
            `Warna: ${this.getAttribute("data-color")}`;
        });
      });

      if (prodData.type === "phone") {
        modalBody.querySelectorAll(".modal-cap-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            modalBody
              .querySelectorAll(".modal-cap-btn")
              .forEach((b) => b.classList.remove("selected"));
            this.classList.add("selected");
            currentModalPrice =
              prodData.capacities[this.getAttribute("data-cap")];
            updatePricing();
          });
        });
      }

      modalAddonCheckbox.addEventListener("change", () => {
        addonChecked = modalAddonCheckbox.checked;
        updatePricing();
      });

      modalBody.querySelectorAll(".modal-pay-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalBody
            .querySelectorAll(".modal-pay-btn")
            .forEach((b) => b.classList.remove("selected"));
          this.classList.add("selected");
          paymentMethod = this.getAttribute("data-method");
          installmentPanel.classList.toggle(
            "visible",
            paymentMethod === "cicil",
          );
          updatePricing();
        });
      });

      // Logika tambah count & keranjang dipindahkan ke Konfirmasi Pesanan, modal tidak langsung ditutup
      document.getElementById("modal-confirm-buy").onclick = function () {
        if (prodData.stock <= 0) {
          alert("Maaf, stok produk ini sudah habis!");
          return;
        }
        prodData.stock--;
        elem.count++;
        buy++;
        updateBucketDisplay();

        alert(
          `🎉 Pesanan Berhasil!\nProduk: ${elem.productName}\nMetode: ${paymentMethod === "full" ? "Bayar Lunas" : "Cicilan 6 Bulan"}\nJumlah di keranjang: ${elem.count} (Sisa stok: ${prodData.stock})`,
        );
      };
    }
  });
});

renderFilterBtn(searchTagType, "brand");
function renderFilterBtn(filter, tipe) {
  searchTipe.textContent = "";
  let fragment = document.createDocumentFragment();
  for (const type of filter) {
    const tagBtn = renderObj("button", ["filter-btn"], type);
    tagBtn.addEventListener("click", () => {
      if (tagBtn.classList.contains("aktif")) {
        tagBtn.classList.remove("aktif");
        renderKatalog(katalogItem);
      } else {
        searchTipe
          .querySelectorAll(".filter-btn")
          .forEach((n) => n.classList.remove("aktif"));
        tagBtn.classList.add("aktif");
        const filtered =
          tipe === "brand"
            ? katalogItem.filter((n) => n.brand === tagBtn.textContent)
            : katalogItem.filter((n) => n.type === tagBtn.textContent);
        renderKatalog(filtered);
      }
    });
    fragment.append(tagBtn);
  }
  searchTipe.append(fragment);
}

filterOpt.addEventListener("change", (event) => {
  let filter;
  if (event.target.value === "brand") {
    filter = brands.map((n) => n.brandName);
  } else if (event.target.value === "tipe") {
    filter = katalogItem.map((n) => n.type);
  }
  renderFilterBtn(filter, event.target.value);
  renderKatalog(katalogItem);
});

function renderBrand() {
  let fragment = document.createDocumentFragment();
  const Brand = document.querySelector(".brand");
  for (let elem of brands) {
    let item = document.createElement("div");
    item.classList.add("brand-card");
    let fig = document.createElement("figure");
    let image = document.createElement("img");
    image.src = elem.img;
    image.loading = "lazy";
    image.decoding = "async";
    fig.appendChild(image);

    item.append(fig, renderObj("strong", [], elem.displayName));
    fragment.append(item);
  }
  Brand.append(fragment);
}
renderBrand();

function renderBelanja() {
  popUp.querySelector(".belanja").textContent = "";
  const fragment = document.createDocumentFragment();
  for (const item of katalogItem) {
    if (!item.count) continue;
    const div = renderObj("div", ["belanja-card"], "");
    const img = renderObj("img", [], "");
    img.src = item.link;
    img.decoding = "async";
    img.loading = "lazy";
    const fig = document.createElement("figure");
    fig.append(img);
    div.append(
      fig,
      renderObj("p", ["belanja-cardName", "blue"], item.productName),
      renderObj(
        "p",
        ["belanja-cardHarga"],
        `Total: Rp ${(((item.price * (100 - item.discount)) / 100) * item.count).toLocaleString("ID")}`,
      ),
    );
    const bottom = renderObj("div", ["belanja-cardBottom"], "");
    bottom.append(
      renderObj("p", ["belanja-cardCount"], `Jumlah : ${item.count}`),
    );
    const btn = renderObj("button", ["belanja-cardBtn"], "-");
    btn.addEventListener("click", (event) => {
      const cd = event.target.closest(".belanja-card");
      const targetItem = katalogItem.find((n) => n === item);
      targetItem.count--;
      cd.querySelector(".belanja-cardHarga").textContent =
        `Total: Rp ${(((item.price * (100 - item.discount)) / 100) * targetItem.count).toLocaleString("ID")}`;
      cd.querySelector(".belanja-cardCount").textContent =
        `Jumlah : ${targetItem.count}`;
      if (targetItem.count === 0) {
        cd.remove();
      }
      buy--;
      updateBucketDisplay();
      if (buy === 0) {
        popUp.querySelector(".belanja").textContent =
          "Oops! Sepertinya belum ada belanjaan.";
      }
    });
    bottom.append(btn);
    div.append(bottom);
    fragment.append(div);
  }
  popUp.querySelector(".belanja").append(fragment);
}

renderKatalog(katalogItem);
function renderKatalog(items) {
  let fragment = document.createDocumentFragment();
  for (let elem of items) {
    const cardItem = renderObj("article", [elem.class, "card"], "");
    const top = renderObj("div", ["card-top"], "");

    top.append(
      renderObj("span", [elem.tagColor], elem.hightLight),
      renderObj("span", ["grayTag", "grayed"], elem.type),
    );

    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = elem.link;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = elem.brand;
    fig.append(renderObj("span", ["diskon"], `-${elem.discount}%`), img);

    const div = renderObj("div", ["card-tag"], "");
    elem.tag.forEach((n) => div.append(renderObj("span", [], n)));

    const bottom = renderObj("div", ["mainButton-container"], "");
    const beliBtn = renderObj("button", ["beli-button"], "Beli Sekarang");
    const spekBtn = renderObj("button", ["spesifikasi-button"], "Spesifikasi");
    bottom.append(beliBtn, spekBtn);

    spekBtn.addEventListener("click", () => {
      if (cardItem.querySelector(".spek")) {
        cardItem.querySelector(".spek").remove();
      } else {
        const spek = renderObj("section", ["spek"], "");
        for (const textSpek of elem.tag) {
          spek.textContent += `${textSpek} . `;
        }
        bottom.before(spek);
      }
    });

    const isFav = wishlist.includes(elem.id);
    const wishBtn = document.createElement("button");
    wishBtn.className = isFav ? "gv-wish-btn saved" : "gv-wish-btn";
    wishBtn.setAttribute("data-id", elem.id);
    wishBtn.textContent = isFav
      ? "Tersimpan di Wishlist"
      : "Tambah ke Wishlist";

    wishBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const idx = wishlist.indexOf(elem.id);
      if (idx > -1) {
        wishlist.splice(idx, 1);
        wishBtn.textContent = "Tambah ke Wishlist";
        wishBtn.classList.remove("saved");
      } else {
        wishlist.push(elem.id);
        wishBtn.textContent = "Tersimpan di Wishlist";
        wishBtn.classList.add("saved");
      }
      const countEl = document.getElementById("wishlist-count");
      if (countEl) countEl.textContent = wishlist.length;
    });

    cardItem.append(
      top,
      fig,
      renderObj(
        "p",
        ["price-tag", "blue"],
        `Rp ${elem.price.toLocaleString("ID")}`,
      ),
      renderObj("p", ["tech-name"], elem.productName),
      renderObj("p", [], elem.displayText),
      div,
      bottom,
      wishBtn,
    );

    fragment.append(cardItem);
  }

  countText.textContent =
    items.length > 0
      ? `Menampilkan ${items.length} dari ${katalogItem.length} item.`
      : "Tidak ada produk yang cocok";
  const katalog = document.querySelector(".main-article");
  katalog.innerHTML = "";
  katalog.append(fragment);
}

searchInput.addEventListener("input", () => {
  clearBtn.classList.toggle("visible", Boolean(searchInput.value));
  const filtered = katalogItem.filter((n) =>
    n.productName.toLowerCase().includes(searchInput.value.toLowerCase()),
  );
  renderKatalog(filtered);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.remove("visible");
  renderKatalog(katalogItem);
  searchInput.focus();
});

searchInput.addEventListener("focus", () => {
  searchBar.classList.add("focused");
});

searchInput.addEventListener("blur", () => {
  searchBar.classList.remove("focused");
});

bucket.addEventListener("click", () => {
  if (!buy) {
    popUp.querySelector(".belanja").textContent =
      "Oops! Sepertinya belum ada belanjaan.";
  } else {
    renderBelanja();
  }
  popUp.classList.toggle("aktif");
});

popUp.addEventListener("click", (event) => {
  if (event.target === popUp) popUp.classList.remove("aktif");
});

// darren
const targetDate = new Date("2027-01-01T00:00:00Z").getTime();
const display = document.getElementById("global-countdown");

const countdownInterval = setInterval(() => {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    display.textContent = "Promo Telah Berakhir!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const d = String(days).padStart(2, "0");
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  display.textContent = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
