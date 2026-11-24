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
    hightLight: "GARANSI RESMI iBOX",
    type: "Computer",
    category: "computer",
    productName: "MacBook Pro 14 M3 512GB Space Gray",
    price: 24999000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Laptop pro bertenaga chip Apple M3 dengan layar Liquid Retina XDR 120Hz dan daya tahan baterai hingga 22 jam.",
    bestFor:
      "Penyuntingan video resolusi 4K/8K, pengembangan software atau programming skala besar, desain grafis profesional, serta efisiensi daya luar biasa sepanjang hari.",
    discount: 8,
    tag: ["Apple M3", "16GB Unified RAM", "512GB SSD", "Liquid Retina XDR"],
    specs: {
      Processor: "Apple M3 Chip (8-core CPU, 10-core GPU)",
      "RAM & Storage": "16GB Unified Memory / 512GB SSD",
      Layar: "14.2 inci Liquid Retina XDR, ProMotion 120Hz",
      Port: "MagSafe 3, 2x Thunderbolt / USB 4, HDMI, SDXC",
      Baterai: "Hingga 22 Jam Pemutaran Film",
    },
    brand: "Iphone",
    class: "galaxy",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 6,
    hightLight: "BEST SELLER",
    type: "Android Phone",
    category: "phone",
    productName: "Xiaomi 14 12GB/256GB Leica",
    price: 11999000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Flagship ringkas dengan lensa optik Leica Summilux, chipset Snapdragon 8 Gen 3, dan pengisian cepat 90W HyperCharge.",
    bestFor:
      "Fotografi jalanan dan potret bernuansa khas Leica, penggunaan satu tangan yang nyaman pada layar 6.36 inci, serta pengisian daya penuh dalam 31 menit.",
    discount: 12,
    tag: ["Leica Optics", "SD 8 Gen 3", "90W HyperCharge", "LTPO 120Hz"],
    specs: {
      Chipset: "Snapdragon 8 Gen 3 (4 nm)",
      "RAM & Storage": "12GB LPDDR5X / 256GB UFS 4.0",
      "Kamera Utama": "50 MP Leica Main + 50 MP Telephoto + 50 MP Ultrawide",
      "Kamera Depan": "32 MP",
      Baterai: "4610 mAh (90W Wired, 50W Wireless)",
      Layar: "6.36 inci CrystalRes AMOLED 1.5K, 120Hz",
    },
    brand: "Xiaomi",
    class: "galaxy",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 7,
    hightLight: "PURE ANDROID",
    type: "Android Phone",
    category: "phone",
    productName: "Google Pixel 8 Pro 256GB",
    price: 15499000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Kamera komputasional terbaik dari Google dengan chip Tensor G3, Magic Editor AI, dan dukungan update OS hingga 7 tahun.",
    bestFor:
      "Hasil foto point-and-shoot paling natural di segala kondisi cahaya, penyuntingan foto berbasis AI, serta pengalaman Android murni yang bersih.",
    discount: 10,
    tag: ["Google Tensor G3", "Pixel Camera", "Super Actua", "7-Yr Updates"],
    specs: {
      Chipset: "Google Tensor G3 (4 nm)",
      "RAM & Storage": "12GB RAM / 256GB Storage",
      "Kamera Utama": "50 MP Wide + 48 MP Ultrawide + 48 MP 5x Telephoto",
      "Kamera Depan": "10.5 MP Autofocus",
      Baterai: "5050 mAh (30W Fast Charging)",
      Layar: "6.7 inci Super Actua LTPO OLED, 120Hz",
    },
    brand: "Google",
    class: "galaxy",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 8,
    hightLight: "FLAGSHIP KILLER",
    type: "Android Phone",
    category: "phone",
    productName: "OnePlus 12 16GB/512GB Emerald",
    price: 14299000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Performa ekstrem dengan RAM 16GB, kamera Hasselblad generasi ke-4, dan baterai jumbo 5400mAh dengan 100W SUPERVOOC.",
    bestFor:
      "Multitasking berat tanpa kompromi, sesi gaming marathon dengan sistem pendingin Dual Cryo-velocity VC, serta pengisian baterai kilat 26 menit.",
    discount: 15,
    tag: ["Hasselblad", "16GB RAM", "100W SUPERVOOC", "SD 8 Gen 3"],
    specs: {
      Chipset: "Snapdragon 8 Gen 3 (4 nm)",
      "RAM & Storage": "16GB LPDDR5X / 512GB UFS 4.0",
      "Kamera Utama": "50 MP Sony LYT-808 + 64 MP Periscope + 48 MP Ultrawide",
      "Kamera Depan": "32 MP",
      Baterai: "5400 mAh (100W Wired, 50W Wireless)",
      Layar: "6.82 inci 2K ProXDR LTPO AMOLED, 120Hz",
    },
    brand: "One Plus",
    class: "galaxy",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 9,
    hightLight: "NOISE CANCELLING PRO",
    type: "Audio Gadget",
    category: "tws",
    productName: "Sony WF-1000XM5 Wireless ANC",
    price: 3899000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Peredam bising aktif (ANC) kelas dunia dengan prosesor ganda dan audio resolusi tinggi LDAC yang jernih.",
    bestFor:
      "Perjalanan pesawat atau komuter harian yang bising, penikmat musik audiophile yang menginginkan detail suara presisi, serta panggilan telepon jernih.",
    discount: 18,
    tag: ["Best-in-Class ANC", "Hi-Res LDAC", "8.4mm Driver", "Multipoint"],
    specs: {
      Chipset: "Integrated Processor V2 + HD Noise Cancelling Processor QN2e",
      "Daya Tahan": "8 Jam (ANC On) + 16 Jam (Charging Case)",
      Driver: "8.4mm Dynamic Driver X",
      "Ketahanan Air": "IPX4 Splash-proof",
      Konektivitas: "Bluetooth 5.3 (SBC, AAC, LDAC, LC3)",
    },
    brand: "Sony",
    class: "tws",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 10,
    hightLight: "SUPER FAST CHARGING",
    type: "Power Accessories",
    category: "powerbank",
    productName: "Samsung Powerbank 20.000mAh 45W",
    price: 799000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Kapasitas ekstra besar 20.000mAh dengan 3 port USB-C yang mendukung Super Fast Charging 2.0 hingga 45W.",
    bestFor:
      "Mengisi daya hingga 3 perangkat sekaligus (smartphone, tablet, maupun laptop ringan) saat perjalanan jauh atau berkemah.",
    discount: 15,
    tag: ["20000mAh", "45W Super Fast", "Triple USB-C", "Eco Design"],
    specs: {
      Kapasitas: "20000 mAh",
      "Output Max": "45W Super Fast Charging 2.0 (PD 3.0 PPS)",
      Port: "3x USB Type-C",
      Fitur: "Simultaneous Multi-Device Charging",
      Dimensi: "152 x 76 x 25.5 mm (402g)",
    },
    brand: "Samsung",
    class: "anker",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 11,
    hightLight: "TIPIS & RINGAN",
    type: "Computer",
    category: "computer",
    productName: "MacBook Air 13 M3 8GB/256GB Midnight",
    price: 17499000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Desain super tipis 1,13 cm tanpa kipas yang hening, bertenaga chip Apple M3 dan dukungan hingga dua layar eksternal.",
    bestFor:
      "Mahasiswa, pekerja mobile, dan eksekutif yang membutuhkan laptop ultra-portabel berbobot hanya 1,24 kg namun tetap kencang untuk kerja harian.",
    discount: 7,
    tag: ["Apple M3", "Ultra Thin 1.13cm", "18h Battery", "Liquid Retina"],
    specs: {
      Processor: "Apple M3 Chip (8-core CPU, 8-core GPU)",
      "RAM & Storage": "8GB Unified Memory / 256GB SSD",
      Layar: "13.6 inci Liquid Retina True Tone",
      Port: "MagSafe 3, 2x Thunderbolt / USB 4, Audio Jack",
      Baterai: "Hingga 18 Jam Pemakaian Nirkabel",
    },
    brand: "Iphone",
    class: "galaxy",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 12,
    hightLight: "VALUE FOR MONEY",
    type: "Android Phone",
    category: "phone",
    productName: "Redmi Note 13 Pro+ 5G 12GB/512GB",
    price: 5799000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Kamera flagship 200MP OIS, layar lengkung AMOLED 1.5K, tahan air IP68, dan charger kilat 120W HyperCharge di dalam kotak.",
    bestFor:
      "Pengguna yang menginginkan fitur rasa flagship seperti sertifikasi tahan air IP68, layar lengkung mewah, dan kamera 200MP dengan harga terjangkau.",
    discount: 12,
    tag: ["200MP OIS", "120W HyperCharge", "IP68 Waterproof", "Curved AMOLED"],
    specs: {
      Chipset: "MediaTek Dimensity 7200-Ultra (4 nm)",
      "RAM & Storage": "12GB RAM / 512GB Storage",
      "Kamera Utama": "200 MP OIS + 8 MP Ultrawide + 2 MP Macro",
      "Kamera Depan": "16 MP",
      Baterai: "5000 mAh (120W HyperCharge - Penuh 19 Menit)",
      Layar: "6.67 inci 1.5K CrystalRes Curved AMOLED, 120Hz",
    },
    brand: "Xiaomi",
    class: "galaxy",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 13,
    hightLight: "ULTRA FLAGSHIP",
    type: "Android Phone",
    category: "phone",
    productName: "Samsung Galaxy S24 Ultra 512GB",
    price: 21999000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Rangka Titanium tangguh dengan S Pen terintegrasi, Snapdragon 8 Gen 3 for Galaxy, dan kamera telefoto periskop 50MP 5x zoom.",
    bestFor:
      "Produktivitas tingkat tinggi dengan stylus S Pen, konser atau fotografi jarak jauh dengan zoom optik tajam, serta performa gaming maksimal.",
    discount: 9,
    tag: ["S Pen Built-in", "Titanium Frame", "SD 8 Gen 3", "200MP Quad Tele"],
    specs: {
      Chipset: "Snapdragon 8 Gen 3 for Galaxy (4 nm)",
      "RAM & Storage": "12GB RAM / 512GB Storage",
      "Kamera Utama": "200 MP + 50 MP (5x) + 10 MP (3x) + 12 MP",
      "Kamera Depan": "12 MP Dual Pixel",
      Baterai: "5000 mAh (45W Super Fast Charging 2.0)",
      Layar: "6.8 inci QHD+ Dynamic AMOLED 2X Anti-Reflective",
    },
    brand: "Samsung",
    class: "galaxy",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 14,
    hightLight: "WORKSTATION PRO",
    type: "Computer",
    category: "computer",
    productName: "ASUS Zenbook 14 OLED UX3405",
    price: 16499000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Laptop Windows ultra-ringan 1,2 kg dengan prosesor Intel Core Ultra 7 AI, layar 3K Lumina OLED 120Hz, dan baterai 75Wh.",
    bestFor:
      "Pekerja kantoran, analis data, dan kreator konten berbasis Windows yang membutuhkan akurasi warna 100% DCI-P3 dalam bodi metal tipis.",
    discount: 11,
    tag: [
      "Intel Core Ultra 7",
      "16GB LPDDR5X",
      "1TB NVMe SSD",
      "3K OLED 120Hz",
    ],
    specs: {
      Processor: "Intel Core Ultra 7 155H (16-core, Intel AI Boost)",
      "RAM & Storage": "16GB LPDDR5X / 1TB PCIe 4.0 SSD",
      Layar: "14.0 inci 3K (2880x1800) OLED 120Hz, 100% DCI-P3",
      Port: "2x Thunderbolt 4, 1x USB-A 3.2, HDMI 2.1, Audio Jack",
      Baterai: "75Wh (Hingga 15 Jam Pemakaian)",
    },
    brand: "Samsung",
    class: "galaxy",
    tagColor: "blueTag",
    count: 0,
  },
  {
    id: 15,
    hightLight: "STUDIO HEADPHONE",
    type: "Audio Gadget",
    category: "tws",
    productName: "Sony WH-1000XM5 Over-Ear ANC",
    price: 4999000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Headphone nirkabel premium dengan 8 mikrofon peredam bising, bantalan kulit lembut tanpa tekanan, dan baterai 30 jam.",
    bestFor:
      "Fokus kerja di kantor terbuka atau kafe ramai, penerbangan jarak jauh lintas benua, serta kenyamanan pemakaian berjam-jam tanpa pegal.",
    discount: 14,
    tag: ["8-Mic ANC", "30h Battery", "3-Min Quick Charge", "LDAC Hi-Res"],
    specs: {
      Chipset: "Integrated Processor V1 + QN1",
      "Daya Tahan": "30 Jam (ANC On) / 40 Jam (ANC Off)",
      Driver: "30mm Precision-Engineered Carbon Fiber",
      Mikrofon: "8 Mikrofon dengan AI Noise Reduction",
      Konektivitas: "Bluetooth 5.2 Multipoint + Kabel 3.5mm",
    },
    brand: "Sony",
    class: "tws",
    tagColor: "orangeTag",
    count: 0,
  },
  {
    id: 16,
    hightLight: "MAGSAFE WIRELESS",
    type: "Power Accessories",
    category: "powerbank",
    productName: "Anker MagGo 10.000mAh Qi2 Magnetic",
    price: 899000,
    currency: "id",
    link: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=600&q=80",
    displayText:
      "Powerbank magnetik bersertifikat Qi2 15W yang menempel kuat di punggung iPhone lengkap dengan layar pintar & kickstand lipat.",
    bestFor:
      "Pengguna iPhone 12 hingga iPhone 15 series yang ingin mengisi daya tanpa kabel sambil tetap nyaman menggenggam atau menonton video.",
    discount: 16,
    tag: ["Qi2 15W Magnetic", "10000mAh", "Smart Display", "Built-in Stand"],
    specs: {
      Kapasitas: "10000 mAh",
      "Output Max": "15W Qi2 Wireless / 27W USB-C PD",
      Fitur: "Smart OLED Battery Display & Foldable Kickstand",
      Kompatibilitas: "MagSafe / Qi2 Certified Devices",
      Keamanan: "ActiveShield 2.0 Thermal Control",
    },
    brand: "Anker",
    class: "anker",
    tagColor: "orangeTag",
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
      };
    }
  });
});

function FilterUnik(tipe) {
  const key = tipe === "brand" ? "brand" : "type";
  return [...new Set(katalogItem.map((item) => item[key]))];
}

renderFilterBtn(FilterUnik("brand"), "brand");
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
        const key = tipe === "brand" ? "brand" : "type";
        const filtered = katalogItem.filter(
          (n) => n[key] === tagBtn.textContent,
        );
        renderKatalog(filtered);
      }
    });
    fragment.append(tagBtn);
  }
  searchTipe.append(fragment);
}

filterOpt.addEventListener("change", (event) => {
  renderFilterBtn(FilterUnik(event.target.value), event.target.value);
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
