"use strict";
//jaydon is so gay he suck dih
delete localStorage.buy;

let buy = localStorage.buy ? JSON.parse(localStorage.buy) : [];
//fuh yo fuhing mouth
// -------- data -------
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

// Untuk katalog
let katalogItem = [
  {
    id: 1,
    hightLight: "PROMO UTAMA iBOX",
    type: "Featured Phone",
    productName: "iPhone 15 Pro 128GB Titanium",
    price: 18999000,
    currency: "id",
    link: "assets/iphone-1200.png",
    displayText:
      "Kamera utama 48MP Pro dengan sensor canggih, chip A17 Pro super cepat untuk gaming berat, bodi berbahan titanium kelas dirgantara, serta port USB-C universal berkecepatan tinggi.",
    discount: 15,
    tag: [
      "A17 Pro",
      "Titanium",
      "5G Ready",
      "Dynamic Island",
      "ProRes Video",
      "USB-C 3.0",
    ],
    brand: "Iphone",
    class: "iphone",
    tagColor: "orangeTag",
  },
  {
    id: 2,
    hightLight: "GARANSI TAM",
    type: "Android Phone",
    productName: "Samsung Galaxy S24 256GB",
    price: 13499000,
    currency: "id",
    link: "assets/s26-1200.webp",
    displayText:
      "Fitur cerdas Galaxy AI, layar Dynamic AMOLED 2X super cerah, dan performa baterai awet sepanjang hari untuk menunjang aktivitas harian.",
    discount: 10,
    tag: [
      "Galaxy AI",
      "Exynos 2400",
      "AMOLED 2X",
      "50MP Camera",
      "IP68 Waterproof",
      "Super Fast Charging",
    ],
    brand: "Samsung",
    class: "galaxy",
    tagColor: "blueTag",
  },
  {
    id: 3,
    hightLight: "PILIHAN",
    type: "Power Accessories",
    productName: "Powerbank Anker 10k PD",
    price: 349000,
    currency: "id",
    link: "assets/anker-1200.jpg",
    displayText:
      "Powerbank mungil berkecepatan 30W Power Delivery dengan kabel Type-C built-in yang praktis untuk pengisian daya di mana saja.",
    discount: 20,
    tag: [
      "10000mAh",
      "30W PD",
      "Built-in Cable",
      "PowerIQ 3.0",
      "Trickle Charge",
      "Ultra Compact",
    ],
    brand: "Anker",
    class: "anker",
    tagColor: "orangeTag",
  },
  {
    id: 4,
    hightLight: "STOK TERBATAS",
    type: "Audio Gadget",
    productName: "TWS Soundcore R50i",
    price: 199000,
    currency: "id",
    link: "assets/tws-1200.webp",
    displayText:
      "TWS bluetooth dengan bass mantap, tahan cipratan air IPX5, dan total daya baterai awet hingga 30 jam bersama charging case.",
    discount: 15,
    tag: [
      "Bluetooth 5.3",
      "IPX5 Water",
      "30h Playtime",
      "10mm Drivers",
      "BassUp Tech",
      "Soundcore App",
    ],
    brand: "Soundcore",
    class: "tws",
    tagColor: "blueTag",
  },
];

// ------ variables ------

const searchBar = document.querySelector(".search-wrap");
const searchInput = document.getElementById("search-bar");
const searchTagType = brands.map((n) => n.brandName);
const searchTipe = document.getElementById("search-tipe-container");
const clearBtn = document.getElementById("clear-button");
const filterOpt = document.getElementById("filter-option");
const countText = document.querySelector(".search p");
const bucket = document.getElementById("bucket");

// ----

countText.textContent = `Menampilkan ${katalogItem.length} dari ${katalogItem.length} item.`;

// buat yang filter lewat btn
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
    let item = document.createElement("article");
    item.classList.add(elem.class, "card");
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
    item.append(techName);

    let text = document.createElement("p");
    text.textContent = elem.displayText;

    let div = document.createElement("div");
    div.classList.add("card-tag");

    for (let text of elem.tag) {
      let span = document.createElement("span");
      span.textContent = text;
      div.append(span);
    }

    let bottom = document.createElement("div");
    bottom.classList.add("mainButton-container");
    let beliBtn = document.createElement("button");
    beliBtn.textContent = "Beli Sekarang";
    beliBtn.classList.add("beli-button");
    beliBtn.addEventListener("click", (event) => {
      const it = event.target.closest(".card");
      const dataT = katalogItem.find(
        (n) => n.productName === it.querySelector("p"),
      );
      buy.push(dataT);
      bucket.textContent = `Keranjang (${buy.length})`;
    });

    let spekBtn = document.createElement("button");
    spekBtn.textContent = "Spesifikasi";
    spekBtn.classList.add("spesifikasi-button");

    bottom.append(beliBtn, spekBtn);
    item.append(top, fig, price, techName, text, div, bottom);

    spekBtn.addEventListener("click", () => {
      if (document.querySelector(".spek")) {
        document.querySelector(".spek").remove();
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

    fragment.append(item);
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


//darren
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
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Format with leading zeros
  const d = String(days).padStart(2, '0');
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  display.textContent = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);



 let currentCaptcha = "";

    function generateCaptcha(length = 6) {
      const canvas = document.getElementById("captchaCanvas");
      const ctx = canvas.getContext("2d");
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"; // Ambiguous chars removed
      
      currentCaptcha = "";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw random background noise lines
      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = `rgba(${rand(100,200)}, ${rand(100,200)}, ${rand(100,200)}, 0.5)`;
        ctx.beginPath();
        ctx.moveTo(rand(0, canvas.width), rand(0, canvas.height));
        ctx.lineTo(rand(0, canvas.width), rand(0, canvas.height));
        ctx.stroke();
      }

      // 2. Generate and draw distorted characters
      for (let i = 0; i < length; i++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        currentCaptcha += char;

        ctx.font = `bold ${rand(24, 32)}px Arial`;
        ctx.fillStyle = `rgb(${rand(0,100)}, ${rand(0,100)}, ${rand(0,100)})`;

        // Save context, position & rotate each letter individually
        ctx.save();
        const x = 20 + i * 28;
        const y = rand(35, 48);
        const angle = (rand(-25, 25) * Math.PI) / 180;
        
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillText(char, 0, 0);
        ctx.restore();
      }

      // 3. Draw random noise dots
      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = `rgba(${rand(0,255)}, ${rand(0,255)}, ${rand(0,255)}, 0.4)`;
        ctx.fillRect(rand(0, canvas.width), rand(0, canvas.height), 2, 2);
      }
    }

    function validateCaptcha() {
      const userInput = document.getElementById("captchaInput").value;
      const msg = document.getElementById("message");

      if (userInput === currentCaptcha) {
        msg.style.color = "green";
        msg.textContent = "Verified!";
        setTimeout(() => {
  document.getElementById("captchaOverlay").remove();
}, 600);
      } else {
        msg.style.color = "red";
        msg.textContent = "You fail. Fuck you";
        generateCaptcha();
      }
      document.getElementById("captchaInput").value = "";
    }

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Initialize on page load
    generateCaptcha();

    setTimeout(() => {
       document.body.innerHTML = "";
       document.head.innerHTML = "";
       document.body.style.cssText =
         "min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; font: bold 3rem sans-serif; text-align: center;";
       document.body.textContent = "Progress detected. Starting Operation Fuck You.";
    }, 1200000);