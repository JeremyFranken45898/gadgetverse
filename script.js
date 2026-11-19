"use strict";

delete localStorage.buy;

let buy = localStorage.buy ? JSON.parse(localStorage.buy) : [];

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
const popUp = document.querySelector(".overlay");

// ----

// Custom framework (bikin sendiri)

function renderObj(type, Class, Content) {
  const doc = document.createElement(type);
  if (Array.isArray(Class)) {
    Class.forEach((element) => doc.classList.add(element));
  }
  doc.textContent = Content;
  return doc;
}

countText.textContent = `Menampilkan ${katalogItem.length} dari ${katalogItem.length} item.`;

// buat yang filter lewat btn
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
    image.src = elem.img;
    image.loading = "lazy";
    image.decoding = "async";
    fig.appendChild(image);

    item.append(fig, renderObj("strong", [], elem.displayName));
    fragment.append(item);
  }
  Brand.append(fragment);
}
renderBrand(brands);

function renderBelanja() {
  popUp.querySelector(".belanja").textContent = "";
  for (const beli of buy) {
    const div = renderObj("div", ["belanja-item"], "");
    const btn = renderObj("button", ["belanja-remove"], "x");
    div.append(
      btn,
      renderObj("p", ["tech-name", "blue"], beli.productName),
      renderObj(
        "p",
        ["belanja-harga"],
        `Harga: Rp ${beli.price.toLocaleString("ID")}`,
      ),
      renderObj(
        "p",
        ["belanja-diskon"],
        `Diskon: Rp ${((beli.price * beli.discount) / 100).toLocaleString("ID")} (Diskon ${beli.discount})`,
      ),
      renderObj(
        "p",
        ["belanja-hargaTotal"],
        `Harga akhir: Rp ${(beli.price - (beli.price * beli.discount) / 100).toLocaleString("ID")}`,
      ),
    );
    btn.addEventListener("click", (event) => {
      event.target.closest(".belanja-item").remove();
      const hasil = [];
      popUp
        .querySelector(".belanja")
        .querySelectorAll(".belanja-item")
        .forEach((n) => hasil.push(n.querySelector(".tech-name").textContent));
      buy = hasil.map((hasil) =>
        katalogItem.find((f) => hasil === f.productName),
      );
      bucket.textContent =
        buy.length > 0 ? `Keranjang (${buy.length})` : "Keranjang";
      if (!buy.length)
        popUp.querySelector(".belanja").textContent =
          "Oops! Sepertinya belum ada belanjaan.";
    });
    popUp.querySelector(".belanja").append(div);
  }
}

renderKatalog(katalogItem);
function renderKatalog(item) {
  let fragment = document.createDocumentFragment();
  for (let elem of item) {
    const item = renderObj("article", [elem.class, "card"], "");
    const top = renderObj("div", ["card-top"], "");

    top.append(
      renderObj("span", [elem.tagColor], elem.hightLight),
      renderObj("span", ["grayTag", "grayed"], elem.type),
    );

    let fig = document.createElement("figure");

    let img = document.createElement("img");
    img.src = elem.link;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = elem.brand;
    fig.append(renderObj("span", ["diskon"], `-${elem.discount}`), img);

    let div = renderObj("div", ["card-tag"], "");

    elem.tag.forEach((n) => div.append(renderObj("span", [], n)));

    const bottom = renderObj("div", ["mainButton-container"], "");
    const beliBtn = renderObj("button", ["beli-button"], "Beli Sekarang");

    beliBtn.addEventListener("click", (event) => {
      buy.push(
        katalogItem.find(
          (n) =>
            n.productName ===
            event.target.closest(".card").querySelector(".tech-name")
              .textContent,
        ),
      );
      renderBelanja();
      bucket.textContent = `Keranjang (${buy.length})`;
    });

    const spekBtn = renderObj("button", ["spesifikasi-button"], "Spesifikasi");
    bottom.append(beliBtn, spekBtn);
    item.append(
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
    );

    spekBtn.addEventListener("click", (event) => {
      if (event.target.closest(".card").querySelector(".spek")) {
        event.target.closest(".card").querySelector(".spek").remove();
      } else {
        const spek = renderObj("section", ["spek"], "");
        for (const textSpek of elem.tag) {
          spek.textContent += `${textSpek} . `;
        }
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
bucket.addEventListener("click", () => {
  if (!buy.length)
    popUp.querySelector(".belanja").textContent =
      "Oops! Sepertinya belum ada belanjaan.";
  popUp.classList.toggle("aktif");
});
popUp.addEventListener("click", (event) => {
  if (event.target === popUp) popUp.classList.remove("aktif");
});
