"use strict";

delete localStorage.buy;

let buy = localStorage.buy ? JSON.parse(localStorage.buy) : [];
let wishlist = JSON.parse(localStorage.getItem("gv_wishlist")) || [];

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
    displayText: "Kamera utama 48MP Pro dengan sensor canggih, chip A17 Pro super cepat untuk gaming berat, bodi berbahan titanium kelas dirgantara.",
    bestFor: "Fotografi profesional tingkat tinggi, perekaman video sinematik format ProRes, performa gaming kelas berat tanpa lag, serta daya tahan bodi titanium premium.",
    discount: 15,
    tag: ["A17 Pro", "Titanium", "5G Ready", "Dynamic Island"],
    specs: {
      "Chipset": "Apple A17 Pro (3 nm)",
      "RAM & Storage": "8GB RAM / 128GB Storage",
      "Kamera Utama": "48 MP + 12 MP + 12 MP",
      "Kamera Depan": "12 MP TrueDepth",
      "Baterai": "3274 mAh (Fast Charging)",
      "Layar": "6.1 inci Super Retina XDR OLED, 120Hz"
    },
    brand: "Iphone",
    class: "iphone",
    tagColor: "orangeTag",
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
    displayText: "Fitur cerdas Galaxy AI, layar Dynamic AMOLED 2X super cerah, dan performa baterai awet sepanjang hari.",
    bestFor: "Integrasi fitur AI canggih (Galaxy AI untuk penerjemah & ringkasan otomatis), visibilitas layar luar biasa di bawah terik matahari, serta produktivitas multitasking harian yang optimal.",
    discount: 10,
    tag: ["Galaxy AI", "Exynos 2400", "AMOLED 2X", "50MP Camera"],
    specs: {
      "Chipset": "Exynos 2400 (4 nm)",
      "RAM & Storage": "8GB RAM / 256GB Storage",
      "Kamera Utama": "50 MP + 10 MP + 12 MP",
      "Kamera Depan": "12 MP",
      "Baterai": "4000 mAh (Super Fast Charging)",
      "Layar": "6.2 inci Dynamic AMOLED 2X, 120Hz"
    },
    brand: "Samsung",
    class: "galaxy",
    tagColor: "blueTag",
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
    displayText: "Powerbank mungil berkecepatan 30W Power Delivery dengan kabel Type-C built-in yang praktis.",
    bestFor: "Mobilitas perjalanan tinggi, pengisian daya darurat super cepat berstandar 30W, serta kepraktisan maksimal karena dilengkapi kabel bawaan tanpa perlu repot membawa kabel terpisah.",
    discount: 20,
    tag: ["10000mAh", "30W PD", "Built-in Cable", "Ultra Compact"],
    specs: {
      "Kapasitas": "10000 mAh",
      "Output Max": "30W Power Delivery",
      "Port": "USB-C Built-in Cable + USB-A Port",
      "Fitur": "ActiveShield 2.0 Temperature Safety",
      "Dimensi": "Sangat Ringkas & Portabel"
    },
    brand: "Anker",
    class: "anker",
    tagColor: "orangeTag",
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
    displayText: "TWS bluetooth dengan bass mantap, tahan cipratan air IPX5, dan total daya baterai awet hingga 30 jam.",
    bestFor: "Pengalaman mendengarkan musik dengan dentuman bass bertenaga, ketahanan fisik dari keringat atau cipratan air saat berolahraga, serta daya tahan baterai berhari-hari.",
    discount: 15,
    tag: ["Bluetooth 5.3", "IPX5 Water", "30h Playtime", "BassUp Tech"],
    specs: {
      "Bluetooth": "Versi 5.3",
      "Daya Tahan": "10 Jam (Earbuds) + 30 Jam (Case)",
      "Driver": "10mm High-Performance Drivers",
      "Ketahanan Air": "IPX5 Waterproof",
      "Aplikasi": "Soundcore App Support (22 EQ Presets)"
    },
    brand: "Soundcore",
    class: "tws",
    tagColor: "blueTag",
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
    displayText: "Laptop berperforma tinggi dengan chip M3 untuk kebutuhan kerja berat dan editing.",
    bestFor: "Penyuntingan video resolusi 4K/8K, pengembangan software atau programming skala besar, serta efisiensi daya luar biasa untuk para pekerja profesional kreatif.",
    discount: 5,
    tag: ["Apple M3", "16GB RAM", "512GB SSD", "Liquid Retina XDR"],
    specs: {
      "Processor": "Apple M3 Chip (8-core CPU)",
      "RAM & Storage": "16GB Unified RAM / 512GB SSD",
      "Grafis": "10-core GPU",
      "Layar": "14.2 inci Liquid Retina XDR",
      "Baterai": "Hingga 22 Jam Pemutaran Film"
    },
    brand: "Apple",
    class: "computer",
    tagColor: "blueTag",
  }
];

const searchBar = document.querySelector(".search-wrap");
const searchInput = document.getElementById("search-bar");
const searchTagType = brands.map((n) => n.brandName);
const searchTipe = document.getElementById("search-tipe-container");
const clearBtn = document.getElementById("clear-button");
const filterOpt = document.getElementById("filter-option");
const countText = document.querySelector(".search p");
const bucket = document.getElementById("bucket");

countText.textContent = `Menampilkan ${katalogItem.length} dari ${katalogItem.length} item.`;

document.addEventListener("DOMContentLoaded", function () {
  const bucketBtn = document.getElementById("bucket");
  if (bucketBtn) {
    bucketBtn.textContent = `Keranjang (${buy.length})`;

    const wishlistNavBtn = document.createElement("button");
    wishlistNavBtn.id = "wishlist-nav-btn";
    wishlistNavBtn.innerHTML = `Wishlist (<span id="wishlist-count">${wishlist.length}</span>)`;
    wishlistNavBtn.style.cssText = `
      background: #f1f5f9; border: 1.5px solid #cbd5e1; padding: 8px 14px; border-radius: 100px;
      cursor: pointer; color: #334155; font-weight: bold; font-size: 13px; display: inline-flex;
      align-items: center; gap: 6px; margin-left: 10px; vertical-align: middle;
    `;
    bucketBtn.insertAdjacentElement("afterend", wishlistNavBtn);

    const wishlistModal = document.createElement("div");
    wishlistModal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(5px);
      display: none; justify-content: center; align-items: center; z-index: 10000;
      padding: 20px; box-sizing: border-box;
    `;
    wishlistModal.innerHTML = `
      <div style="
        background: #fff; width: 100%; max-width: 480px; border-radius: 16px;
        padding: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        position: relative; max-height: 85vh; overflow-y: auto; font-family: inherit;
      ">
        <button id="wishlist-modal-close" style="
          position: absolute; top: 14px; right: 16px; background: #f1f5f9; border: none;
          width: 32px; height: 32px; border-radius: 50%; font-size: 18px; font-weight: bold;
          cursor: pointer; color: #475569;
        ">&times;</button>
        <h3 style="margin: 0 0 16px; font-size: 18px; color: #0f172a;">Daftar Wishlist Kamu</h3>
        <div id="wishlist-modal-list"></div>
      </div>
    `;
    document.body.appendChild(wishlistModal);

    document.getElementById("wishlist-modal-close").addEventListener("click", () => {
      wishlistModal.style.display = "none";
    });
    wishlistModal.addEventListener("click", (e) => {
      if (e.target === wishlistModal) wishlistModal.style.display = "none";
    });

    function renderWishlistModal() {
      const listContainer = document.getElementById("wishlist-modal-list");
      if (wishlist.length === 0) {
        listContainer.innerHTML = `<p style="color: #64748b; font-size: 13px; text-align: center; padding: 20px 0;">Belum ada produk di Wishlist.</p>`;
        return;
      }

      listContainer.innerHTML = wishlist
        .map((id) => {
          const item = katalogItem.find(k => k.id === id);
          if (!item) return "";
          return `
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${item.link}" style="width: 52px; height: 52px; object-fit: contain; border-radius: 8px; border: 1px solid #e2e8f0; background: #f8fafc;" />
                <div>
                  <div style="font-size: 13px; font-weight: 700; color: #0f172a;">${item.productName}</div>
                  <div style="font-size: 12px; color: #0099ff; font-weight: 600;">Rp ${item.price.toLocaleString("ID")}</div>
                </div>
              </div>
              <button class="remove-wish-item" data-id="${id}" style="
                background: #fee2e2; color: #dc2626; border: none; padding: 6px 10px;
                border-radius: 6px; font-size: 11px; font-weight: 700; cursor: pointer;
              ">Hapus</button>
            </div>
          `;
        })
        .join("");

      listContainer.querySelectorAll(".remove-wish-item").forEach((btn) => {
        btn.addEventListener("click", function () {
          const targetId = parseInt(this.getAttribute("data-id"));
          wishlist = wishlist.filter((item) => item !== targetId);
          localStorage.setItem("gv_wishlist", JSON.stringify(wishlist));
          const countEl = document.getElementById("wishlist-count");
          if (countEl) countEl.textContent = wishlist.length;

          const cardWishBtn = document.querySelector(`.gv-wish-btn[data-id="${targetId}"]`);
          if (cardWishBtn) {
            cardWishBtn.textContent = "Tambah ke Wishlist";
            cardWishBtn.style.background = "#f1f5f9";
            cardWishBtn.style.color = "#334155";
            cardWishBtn.style.borderColor = "#c7c7c7";
          }
          renderWishlistModal();
        });
      });
    }

    wishlistNavBtn.addEventListener("click", () => {
      renderWishlistModal();
      wishlistModal.style.display = "flex";
    });
  }

  const searchContainer = document.querySelector(".search");
  if (searchContainer) {
    const compareNavBtn = document.createElement("button");
    compareNavBtn.id = "compare-nav-btn";
    compareNavBtn.textContent = "⚖️ Bandingkan Spesifikasi Produk";
    compareNavBtn.style.cssText = `
      display: block; width: 100%; max-width: 100%; margin: 16px 0;
      background: linear-gradient(135deg, #3410ff, #1d4ed8); border: none; padding: 14px 20px; border-radius: 14px;
      cursor: pointer; color: #fff; font-weight: bold; font-size: 15px; text-align: center;
      box-shadow: 0 10px 15px -3px rgba(52, 16, 255, 0.25);
    `;
    searchContainer.insertAdjacentElement("beforebegin", compareNavBtn);

    compareNavBtn.addEventListener("click", () => {
      openCompareModal();
    });
  }

  const compareModal = document.createElement("div");
  compareModal.id = "compare-modal-overlay";
  compareModal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(5px);
    display: none; justify-content: center; align-items: center; z-index: 10000;
    padding: 20px; box-sizing: border-box;
  `;
  compareModal.innerHTML = `
    <div style="
      background: #fff; width: 100%; max-width: 950px; border-radius: 18px;
      padding: 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      position: relative; max-height: 90vh; overflow-y: auto; font-family: inherit;
    ">
      <button id="compare-modal-close" style="
        position: absolute; top: 16px; right: 20px; background: #f1f5f9; border: none;
        width: 34px; height: 34px; border-radius: 50%; font-size: 20px; font-weight: bold;
        cursor: pointer; color: #475569; display: flex; align-items: center; justify-content: center;
      ">&times;</button>
      <h3 style="margin: 0 0 16px; font-size: 20px; color: #0f172a; font-weight: 800;">Perbandingan Spesifikasi & Statistik</h3>
      
      <div style="display: flex; gap: 16px; margin-bottom: 20px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px;">
          <label style="font-size: 12px; font-weight: 700; color: #555; display: block; margin-bottom: 6px;">PILIH KATEGORI:</label>
          <select id="compare-category-select" style="width: 100%; padding: 12px; border-radius: 10px; border: 1.5px solid #cbd5e1; font-weight: 600; font-size: 14px;">
            <option value="phone">Handphone / Smartphone</option>
            <option value="powerbank">Powerbank</option>
            <option value="tws">TWS / Audio Gadget</option>
            <option value="computer">Komputer / Laptop</option>
          </select>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <label style="font-size: 12px; font-weight: 700; color: #555; display: block; margin-bottom: 6px;">PRODUK PERTAMA:</label>
          <select id="compare-prod-a-select" style="width: 100%; padding: 12px; border-radius: 10px; border: 1.5px solid #cbd5e1; font-weight: 600; font-size: 14px;"></select>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <label style="font-size: 12px; font-weight: 700; color: #555; display: block; margin-bottom: 6px;">PRODUK KEDUA (PEMBANDING):</label>
          <select id="compare-prod-b-select" style="width: 100%; padding: 12px; border-radius: 10px; border: 1.5px solid #cbd5e1; font-weight: 600; font-size: 14px;"></select>
        </div>
      </div>

      <div id="compare-content-area"></div>
    </div>
  `;
  document.body.appendChild(compareModal);

  document.getElementById("compare-modal-close").addEventListener("click", () => {
    compareModal.style.display = "none";
  });
  compareModal.addEventListener("click", (e) => {
    if (e.target === compareModal) compareModal.style.display = "none";
  });

  const categorySelect = document.getElementById("compare-category-select");
  const prodASelect = document.getElementById("compare-prod-a-select");
  const prodBSelect = document.getElementById("compare-prod-b-select");

  categorySelect.addEventListener("change", function() {
    updateDropdowns(this.value);
  });

  prodASelect.addEventListener("change", function() {
    renderComparisonTable();
  });

  prodBSelect.addEventListener("change", function() {
    renderComparisonTable();
  });

  function openCompareModal() {
    compareModal.style.display = "flex";
    categorySelect.value = "phone";
    updateDropdowns("phone");
  }

  function updateDropdowns(category) {
    const itemsInCat = katalogItem.filter(item => item.category === category);
    
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

    const prodA = katalogItem.find(item => item.id === idA);
    const prodB = katalogItem.find(item => item.id === idB);

    if (!prodA) {
      container.innerHTML = `<div style="text-align: center; padding: 20px; color: #64748b;">Silakan pilih produk terlebih dahulu.</div>`;
      return;
    }

    if (!prodB || isNaN(idB)) {
      let specRows = "";
      for (const [key, val] of Object.entries(prodA.specs)) {
        specRows += `<tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 40%;">${key}</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${val}</td></tr>`;
      }

      container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
          <div style="background: #f8fafc; padding: 20px; border-radius: 14px; border: 1.5px solid #cbd5e1; text-align: center;">
            <div style="width: 100%; height: 260px; background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; padding: 10px; box-sizing: border-box;">
              <img src="${prodA.link}" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <h4 style="font-size: 16px; color: #0f172a; margin: 0 0 6px;">${prodA.productName}</h4>
            <p style="font-size: 14px; color: #0099ff; font-weight: 700; margin: 0 0 10px;">Rp ${prodA.price.toLocaleString("ID")}</p>
            <p style="font-size: 13px; color: #334155; background: #eff6ff; padding: 10px; border-radius: 8px; margin-bottom: 14px; line-height: 1.5;"><b>Keunggulan Utama:</b> ${prodA.bestFor}</p>
            
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
              ${specRows}
            </table>
          </div>
          <div style="text-align: center; padding: 15px; background: #fef9c3; border-radius: 10px; border: 1px solid #fde047;">
            <p style="font-size: 13px; color: #854d0e; font-weight: 600; margin: 0;">⚠️ Belum ada produk pembanding yang dipilih atau tersedia di kategori ini.</p>
          </div>
        </div>
      `;
      return;
    }

    let allSpecKeys = new Set([...Object.keys(prodA.specs), ...Object.keys(prodB.specs)]);
    let tableRows = "";

    allSpecKeys.forEach(key => {
      let valA = prodA.specs[key] || "-";
      let valB = prodB.specs[key] || "-";
      tableRows += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; background: #f8fafc; width: 30%;">${key}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a; width: 35%;">${valA}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a; width: 35%;">${valB}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div style="overflow-x: auto;">
        <div style="display: grid; grid-template-columns: 30% 35% 35%; gap: 12px; background: #f1f5f9; border-radius: 12px 12px 0 0; padding: 16px; border: 1.5px solid #cbd5e1; border-bottom: none; text-align: center; align-items: center;">
          <div></div>
          <div style="padding: 0 4px; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 100%; height: 180px; background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; padding: 8px; box-sizing: border-box;">
              <img src="${prodA.link}" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div style="font-size: 13px; font-weight: 800; color: #0f172a;">${prodA.productName}</div>
            <div style="font-size: 12px; color: #0099ff; font-weight: 700;">Rp ${prodA.price.toLocaleString("ID")}</div>
          </div>
          <div style="padding: 0 4px; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 100%; height: 180px; background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; padding: 8px; box-sizing: border-box;">
              <img src="${prodB.link}" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div style="font-size: 13px; font-weight: 800; color: #0f172a;">${prodB.productName}</div>
            <div style="font-size: 12px; color: #0099ff; font-weight: 700;">Rp ${prodB.price.toLocaleString("ID")}</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 30% 35% 35%; gap: 12px; background: #eff6ff; padding: 14px 16px; border-left: 1.5px solid #cbd5e1; border-right: 1.5px solid #cbd5e1; font-size: 12px; font-weight: bold; color: #1d4ed8; text-align: center; align-items: center;">
          <div style="text-align: left;">KEUNGGULAN UTAMA</div>
          <div style="padding: 0 4px; line-height: 1.4; font-weight: 600;">${prodA.bestFor}</div>
          <div style="padding: 0 4px; line-height: 1.4; font-weight: 600;">${prodB.bestFor}</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: #fff; border: 1.5px solid #cbd5e1; border-top: none; font-size: 13px; text-align: left;">
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
        "Desert Titanium": "https://techoasis.ie/cdn/shop/files/AppleiPhone15ProMaxDesertTitanium_VerifiedQuality_1.png?v=1760092821",
        "Natural Titanium": "assets/iphone-1200.png",
        "Black Titanium": "assets/iphone-1200.png"
      },
      stock: 5
    },
    2: {
      type: "phone",
      capacities: { "256GB": 13499000, "512GB": 15499000 },
      colors: {
        "Amber Yellow": "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzyqxid-539294567?$720_576_JPG$",
        "Onyx Black": "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzkaxid-539294589?$720_576_JPG$",
        "Marble Gray": "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-sm-s921bzaaxid-539294578?$720_576_JPG$"
      },
      stock: 3
    },
    3: {
      type: "accessory",
      colors: { 
        "Black": "https://m.media-amazon.com/images/I/61y8v4zW2SL._AC_SL1500_.jpg", 
        "White": "https://m.media-amazon.com/images/I/51g1K6fL2cL._AC_SL1500_.jpg",
        "Blue": "https://m.media-amazon.com/images/I/61r5o6zW2SL._AC_SL1500_.jpg"
      },
      stock: 8
    },
    4: {
      type: "accessory",
      colors: { 
        "Black": "https://m.media-amazon.com/images/I/61p3l9S3-xL._AC_SL1500_.jpg", 
        "White": "https://m.media-amazon.com/images/I/61tJtN89-xL._AC_SL1500_.jpg",
        "Pink": "https://m.media-amazon.com/images/I/61k8w9S3-xL._AC_SL1500_.jpg"
      },
      stock: 4
    },
    5: {
      type: "computer",
      colors: { "Space Gray": "assets/social.png", "Silver": "assets/social.png" },
      stock: 5
    }
  };

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "product-modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(5px);
    display: none; justify-content: center; align-items: center; z-index: 10000; 
    padding: 20px; box-sizing: border-box;
  `;
  modalOverlay.innerHTML = `
    <div id="product-modal-content" style="
      background: #fff; width: 100%; max-width: 780px; border-radius: 18px;
      padding: 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      position: relative; font-family: inherit; max-height: 92vh; overflow-y: auto;
    ">
      <button id="modal-close" style="
        position: absolute; top: 16px; right: 20px; background: #f1f5f9; border: none;
        width: 34px; height: 34px; border-radius: 50%; font-size: 20px; font-weight: bold;
        cursor: pointer; color: #475569; display: flex; align-items: center; justify-content: center;
        z-index: 10;
      ">&times;</button>
      <div id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  document.getElementById("modal-close").addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = "none";
  });

  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("beli-button")) {
      e.preventDefault();
      const card = e.target.closest(".card");
      if (!card) return;
      const productName = card.querySelector(".tech-name").textContent;
      const elem = katalogItem.find(k => k.productName === productName);
      if (!elem) return;

      const prodData = extendedProductData[elem.id] || { type: "accessory", colors: { "Default": elem.link }, stock: 5 };
      
      if (prodData.stock <= 0) {
        alert("Maaf, stok produk ini habis!");
        return;
      }

      const modalBody = document.getElementById("modal-body");
      let currentActiveColor = Object.keys(prodData.colors)[0];
      let initialImgSrc = prodData.colors[currentActiveColor];

      let modalHtml = `
        <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: stretch;">
          <div style="flex: 1 1 260px; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f8fafc; border-radius: 14px; padding: 16px; border: 1px solid #c7c7c7;">
            <img id="modal-product-img" src="${initialImgSrc}" alt="${elem.productName}" style="width: 100%; max-height: 250px; object-fit: contain;" />
            <span id="modal-color-caption" style="margin-top: 10px; font-size: 12px; font-weight: 600; color: #555555;">Warna: ${currentActiveColor}</span>
          </div>

          <div style="flex: 1.3 1 320px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span style="font-size: 11px; font-weight: bold; color: #0099ff; text-transform: uppercase;">GadgetVerse Official</span>
              <h3 style="margin: 4px 0 16px; font-size: 18px; color: #000;">${elem.productName}</h3>

              <div style="margin-bottom: 14px;">
                <label style="font-size: 12px; font-weight: 600; color: #555555; display: block; margin-bottom: 6px;">PILIH WARNA:</label>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  ${Object.keys(prodData.colors).map((color, i) => `
                    <button class="modal-color-btn" data-color="${color}" data-img="${prodData.colors[color]}" style="
                      padding: 7px 12px; border: 1.5px solid ${i === 0 ? '#3410ff' : '#c7c7c7'}; 
                      background: ${i === 0 ? '#eff6ff' : '#fff'}; color: ${i === 0 ? '#1d4ed8' : '#334155'}; 
                      border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600;
                    ">${color}</button>
                  `).join('')}
                </div>
              </div>
      `;

      if (prodData.type === "phone") {
        modalHtml += `
              <div style="margin-bottom: 14px;">
                <label style="font-size: 12px; font-weight: 600; color: #555555; display: block; margin-bottom: 6px;">PILIH KAPASITAS STORAGE:</label>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  ${Object.keys(prodData.capacities).map((cap, i) => `
                    <button class="modal-cap-btn" data-cap="${cap}" style="
                      padding: 7px 12px; border: 1.5px solid ${i === 0 ? '#3410ff' : '#c7c7c7'}; 
                      background: ${i === 0 ? '#eff6ff' : '#fff'}; color: ${i === 0 ? '#1d4ed8' : '#334155'}; 
                      border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600;
                    ">${cap}</button>
                  `).join('')}
                </div>
              </div>
        `;
      }

      modalHtml += `
              <div style="margin-bottom: 14px; background: #f8fafc; padding: 10px 12px; border-radius: 10px; border: 1.5px solid #c7c7c7;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: #334155; font-size: 12px;">
                  <input type="checkbox" id="modal-addon" value="150000" style="cursor: pointer; width: 16px; height: 16px; accent-color: #3410ff;">
                  <span>Tambah Proteksi Extra & Tempered Glass (<b>+Rp 150.000</b>)</span>
                </label>
              </div>

              <div style="margin-bottom: 14px;">
                <label style="font-size: 12px; font-weight: 600; color: #555555; display: block; margin-bottom: 6px;">METODE PEMBAYARAN:</label>
                <div style="display: flex; gap: 8px;">
                  <button class="modal-pay-btn" data-method="full" style="
                    flex: 1; padding: 8px; border: 1.5px solid #3410ff; background: #eff6ff; 
                    color: #1d4ed8; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 700;
                  ">💳 Bayar Full</button>
                  <button class="modal-pay-btn" data-method="cicil" style="
                    flex: 1; padding: 8px; border: 1.5px solid #c7c7c7; background: #fff; 
                    color: #334155; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 700;
                  ">📅 Nyicil 6 Bulan</button>
                </div>
              </div>

              <div id="installment-panel" style="display: none; background: #fef9c3; padding: 10px 12px; border-radius: 10px; margin-bottom: 14px; border: 1px solid #fde047;">
                <div style="font-size: 11px; font-weight: 700; color: #854d0e; margin-bottom: 4px;">SKEMA NYICIL:</div>
                <div style="font-size: 12px; color: #713f12;">
                  Tenor: <b>6 Bulan</b> (Bunga 0%)<br>Tagihan: <b id="modal-installment" style="font-size: 14px;">Rp 0</b> /bln
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #c7c7c7; padding-top: 14px; margin-top: 8px;">
              <div>
                <span id="modal-price-label" style="font-size: 11px; color: #555555; display: block;">Total Bayar Lunas:</span>
                <span id="modal-total-price" style="font-size: 18px; font-weight: 800; color: #0099ff;">Rp 0</span>
              </div>
              <button id="modal-confirm-buy" style="
                background: #3410ff; color: #fff; border: none; padding: 10px 18px;
                border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px;
              ">Konfirmasi Pesanan</button>
            </div>
          </div>
        </div>
      `;

      modalBody.innerHTML = modalHtml;
      modalOverlay.style.display = "flex";

      let selectedCapacity = prodData.type === "phone" ? Object.keys(prodData.capacities)[0] : null;
      let currentModalPrice = prodData.type === "phone" ? prodData.capacities[selectedCapacity] : elem.price;
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

      modalBody.querySelectorAll(".modal-color-btn").forEach(btn => {
        btn.addEventListener("click", function() {
          modalBody.querySelectorAll(".modal-color-btn").forEach(b => {
            b.style.background = "#fff"; b.style.color = "#334155"; b.style.borderColor = "#c7c7c7";
          });
          this.style.background = "#eff6ff"; this.style.color = "#1d4ed8"; this.style.borderColor = "#3410ff";
          document.getElementById("modal-product-img").src = this.getAttribute("data-img");
          document.getElementById("modal-color-caption").textContent = `Warna: ${this.getAttribute("data-color")}`;
        });
      });

      if (prodData.type === "phone") {
        modalBody.querySelectorAll(".modal-cap-btn").forEach(btn => {
          btn.addEventListener("click", function() {
            modalBody.querySelectorAll(".modal-cap-btn").forEach(b => {
              b.style.background = "#fff"; b.style.color = "#334155"; b.style.borderColor = "#c7c7c7";
            });
            this.style.background = "#eff6ff"; this.style.color = "#1d4ed8"; this.style.borderColor = "#3410ff";
            currentModalPrice = prodData.capacities[this.getAttribute("data-cap")];
            updatePricing();
          });
        });
      }

      modalAddonCheckbox.addEventListener("change", () => {
        addonChecked = modalAddonCheckbox.checked;
        updatePricing();
      });

      modalBody.querySelectorAll(".modal-pay-btn").forEach(btn => {
        btn.addEventListener("click", function() {
          modalBody.querySelectorAll(".modal-pay-btn").forEach(b => {
            b.style.background = "#fff"; b.style.color = "#334155"; b.style.borderColor = "#c7c7c7";
          });
          this.style.background = "#eff6ff"; this.style.color = "#1d4ed8"; this.style.borderColor = "#3410ff";
          paymentMethod = this.getAttribute("data-method");
          installmentPanel.style.display = paymentMethod === "cicil" ? "block" : "none";
          updatePricing();
        });
      });

      document.getElementById("modal-confirm-buy").onclick = function() {
        prodData.stock--;
        buy.push(elem);
        const bucketEl = document.getElementById("bucket");
        if (bucketEl) bucketEl.textContent = `Keranjang (${buy.length})`;
        modalOverlay.style.display = "none";
        alert(`🎉 Pesanan Berhasil!\nProduk: ${elem.productName}\nMetode: ${paymentMethod === 'full' ? 'Bayar Lunas' : 'Cicilan 6 Bulan'}`);
      };
    }
  });
});

renderFilterBtn(searchTagType, "brand");
function renderFilterBtn(filter, tipe) {
  searchTipe.textContent = "";
  let fragment = document.createDocumentFragment();
  for (const type of filter) {
    const tagBtn = document.createElement("button");
    tagBtn.textContent = type;
    tagBtn.classList.add("filter-btn");
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
    searchTipe.append(fragment);
  }
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
    let text = document.createElement("strong");
    text.textContent = elem.displayName;
    image.src = elem.img;
    image.loading = "lazy";
    image.decoding = "async";
    fig.appendChild(image);

    item.appendChild(fig);
    item.append(text);
    fragment.append(item);
  }
  Brand.append(fragment);
}
renderBrand(brands);

renderKatalog(katalogItem);
function renderKatalog(item) {
  let fragment = document.createDocumentFragment();
  for (let elem of item) {
    let cardItem = document.createElement("article");
    cardItem.classList.add(elem.class, "card");
    let top = document.createElement("div");
    top.classList.add("card-top");

    let highLight = document.createElement("span");
    highLight.textContent = elem.hightLight;
    highLight.className = elem.tagColor;
    top.appendChild(highLight);

    let type = document.createElement("span");
    type.textContent = elem.type;
    type.className = "grayTag grayed";
    top.appendChild(type);

    let fig = document.createElement("figure");
    let discount = document.createElement("span");
    discount.textContent = `-${elem.discount}%`;
    discount.className = "diskon";

    let img = document.createElement("img");
    img.src = elem.link;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = elem.brand;
    fig.append(discount, img);

    let price = document.createElement("p");
    price.textContent = `Rp ${elem.price.toLocaleString("ID")}`;
    price.classList.add("price-tag", "blue");

    let techName = document.createElement("p");
    techName.textContent = elem.productName;
    techName.className = "tech-name";
    cardItem.append(techName);

    let text = document.createElement("p");
    text.textContent = elem.displayText;

    let div = document.createElement("div");
    div.classList.add("card-tag");

    for (let t of elem.tag) {
      let span = document.createElement("span");
      span.textContent = t;
      div.append(span);
    }

    let bottom = document.createElement("div");
    bottom.classList.add("mainButton-container");
    let beliBtn = document.createElement("button");
    beliBtn.textContent = "Beli Sekarang";
    beliBtn.classList.add("beli-button");

    let spekBtn = document.createElement("button");
    spekBtn.textContent = "Spesifikasi";
    spekBtn.classList.add("spesifikasi-button");

    bottom.append(beliBtn, spekBtn);

    let isFav = wishlist.includes(elem.id);
    let wishBtn = document.createElement("button");
    wishBtn.className = "gv-wish-btn";
    wishBtn.setAttribute("data-id", elem.id);
    wishBtn.textContent = isFav ? "Tersimpan di Wishlist" : "Tambah ke Wishlist";
    wishBtn.style.cssText = `
      width: 100%; margin-top: 6px; padding: 8px 12px; background: ${isFav ? '#e0f2fe' : '#f1f5f9'};
      color: ${isFav ? '#0369a1' : '#334155'}; border: 1.5px solid ${isFav ? '#bae6fd' : '#c7c7c7'};
      border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer;
    `;

    wishBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const idx = wishlist.indexOf(elem.id);
      if (idx > -1) {
        wishlist.splice(idx, 1);
        wishBtn.textContent = "Tambah ke Wishlist";
        wishBtn.style.background = "#f1f5f9";
        wishBtn.style.color = "#334155";
        wishBtn.style.borderColor = "#c7c7c7";
      } else {
        wishlist.push(elem.id);
        wishBtn.textContent = "Tersimpan di Wishlist";
        wishBtn.style.background = "#e0f2fe";
        wishBtn.style.color = "#0369a1";
        wishBtn.style.borderColor = "#bae6fd";
      }
      localStorage.setItem("gv_wishlist", JSON.stringify(wishlist));
    });

    cardItem.append(top, fig, price, techName, text, div, bottom, wishBtn);

    spekBtn.addEventListener("click", () => {
      if (cardItem.querySelector(".spek")) {
        cardItem.querySelector(".spek").remove();
      } else {
        let spek = document.createElement("section");
        spek.classList.add("spek");
        for (const textSpek of elem.tag) {
          spek.textContent += `${textSpek} . `;
        }
        spek.style.padding = "10px";
        spek.style.borderLeft = "5px solid var(--green-bg)";
        spek.style.backgroundColor = "var(--gray-bg)";
        spek.style.borderRadius = "8px";
        bottom.before(spek);
      }
    });

    fragment.append(cardItem);
  }
  countText.textContent =
    item.length > 0
      ? `Menampilkan ${item.length} dari ${katalogItem.length}`
      : "Tidak ada produk yang cocok";
  let katalog = document.querySelector(".main-article");
  katalog.innerHTML = "";
  katalog.append(fragment);
}

searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "inline" : "none";
  const filtered = katalogItem.filter((n) => {
    const includeName = n.productName
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
    return includeName;
  });
  renderKatalog(filtered);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  renderKatalog(katalogItem);
  searchInput.focus();
});

searchInput.addEventListener("focus", () => {
  searchInput.style.outline = "none";
  searchBar.style.border = "var(--gray-border)";
});

searchInput.addEventListener("blur", () => {
  searchBar.style.border = "none";
});