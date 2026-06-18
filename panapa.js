// =====================================================================
//  DATA PRODUK
//  Diambil dari index.html (section #trendiing & #tokoo).
//  category: "organic" atau "anorganic"
//  -> Asumsi pengelompokan: hasil tani/tumbuhan = organic,
//     produk hewani & mineral (Telur Ayam, Ikan Kombong, Garam) = anorganic.
//     Tinggal ganti value "category" di bawah kalau mau disesuaikan.
// =====================================================================
const products = [
  { id: 1, name: "Beras Patawang", price: 650000, unit: "Karung (50kg)", img: "/produkGambar/beras-patawang.jpg", category: "organic",
    desc: "Beras Patawang adalah beras berkualitas unggul dengan tekstur pulen, rasa lezat, dan tampilan bersih. Diproses dari gabah pilihan untuk menghasilkan nasi yang nikmat, cocok untuk kebutuhan rumah tangga, restoran, maupun usaha kuliner." },
  { id: 2, name: "Gula Sabu", price: 25000, unit: "Botol Sedang", img: "/produkGambar/gula-sabu.jpg", category: "organic",
    desc: "Gula Sabu asli olahan tradisional dari nira lontar, manis alami dan cocok untuk berbagai masakan maupun minuman hangat." },
  { id: 3, name: "Jagung", price: 250000, unit: "Karung (50kg)", img: "/produkGambar/jagung.jpg", category: "organic",
    desc: "Jagung Patawang merupakan komoditas unggulan dengan kualitas yang baik, biji yang bernas, dan hasil panen yang melimpah. Cocok untuk berbagai kebutuhan serta menjadi salah satu penopang perekonomian masyarakat setempat." },
  { id: 4, name: "Telur Ayam", price: 65000, unit: "Rak", img: "/produkGambar/telur-ayam.jpg", category: "anorganic",
    desc: "Telur Ayam Patawang merupakan produk unggulan dengan kualitas yang baik, segar, dan kaya nutrisi. Cocok untuk kebutuhan rumah tangga maupun usaha kuliner, serta menjadi salah satu sumber penghasilan masyarakat setempat." },
  { id: 5, name: "Alpukat", price: 5000, unit: "Buah", img: "/TugasEas/Alpukat.jpg", category: "organic",
    desc: "Alpukat segar dengan daging buah lembut dan creamy, kaya lemak sehat dan cocok untuk jus maupun olahan lainnya." },
  { id: 6, name: "Bawang Merah", price: 30000, unit: "Kg", img: "/TugasEas/BawangMerah.jpg", category: "organic",
    desc: "Bawang merah lokal dengan aroma kuat dan rasa khas, bumbu dasar wajib untuk berbagai masakan rumahan." },
  { id: 7, name: "Belimbing Madu", price: 5000, unit: "Buah", img: "/TugasEas/BelimbingMadu.jpg", category: "organic",
    desc: "Belimbing madu manis dan segar, kaya vitamin C, enak dimakan langsung atau dijadikan jus." },
  { id: 8, name: "Beras Ciheren", price: 650000, unit: "Karung (50kg)", img: "/TugasEas/BerasCiheren.jpg", category: "organic",
    desc: "Beras Ciheren bertekstur pulen dengan butiran bersih, pilihan tepat untuk kebutuhan beras rumah tangga." },
  { id: 9, name: "Beras Impari 32", price: 650000, unit: "Karung (50kg)", img: "/TugasEas/BerasImpari32.jpg", category: "organic",
    desc: "Beras Impari 32 hasil panen unggul dengan rasa nasi yang gurih dan pulen." },
  { id: 10, name: "Beras Membramo", price: 650000, unit: "Karung (50kg)", img: "/TugasEas/BerasMembramo.jpg", category: "organic",
    desc: "Beras Membramo berkualitas baik dengan butiran utuh dan rasa nasi yang lezat." },
  { id: 11, name: "Garam", price: 5000, unit: "Mok", img: "/TugasEas/Garam.jpg", category: "anorganic",
    desc: "Garam dapur lokal, bersih dan beryodium, kebutuhan pokok dapur sehari-hari." },
  { id: 12, name: "Gula Lempeng", price: 5000, unit: "Buah", img: "/TugasEas/GulaLempeng.jpg", category: "organic",
    desc: "Gula lempeng olahan tradisional dari nira, padat dan tahan lama, manis alami tanpa bahan tambahan." },
  { id: 13, name: "Gula Sabu (Jerigen)", price: 150000, unit: "Jerigen", img: "/TugasEas/GulaSabuJerigen.jpg", category: "organic",
    desc: "Gula Sabu cair kemasan jerigen, praktis untuk kebutuhan dalam jumlah besar." },
  { id: 14, name: "Ikan Kombong", price: 50000, unit: "5 Ekor", img: "/TugasEas/IkanKombong.jpg", category: "anorganic",
    desc: "Ikan Kombong segar hasil tangkapan lokal, cocok untuk digoreng maupun dibakar." },
  { id: 15, name: "Jeruk Bali", price: 10000, unit: "Buah", img: "/TugasEas/JerukBali.jpg", category: "organic",
    desc: "Jeruk Bali berukuran besar dengan rasa manis segar, kaya vitamin C." },
  { id: 16, name: "Kacang Tanah", price: 45000, unit: "Kg", img: "/TugasEas/KacangTanah.jpg", category: "organic",
    desc: "Kacang tanah lokal berkualitas, gemuk dan renyah, cocok untuk camilan maupun bumbu masak." },
  { id: 17, name: "Kangkung", price: 5000, unit: "3 Ikat", img: "/TugasEas/Kangkung.jpg", category: "organic",
    desc: "Kangkung segar baru dipanen, renyah dan cocok untuk tumisan sehari-hari." },
  // NB: unit "5 Ekor" untuk Kelengkeng kelihatannya kebawa dari data Ikan Kombong di HTML asli — cek lagi ya.
  { id: 18, name: "Kelengkeng", price: 50000, unit: "5 Ekor", img: "/TugasEas/Kelengkeng.jpg", category: "organic",
    desc: "Kelengkeng manis dan berair, buah segar favorit untuk camilan keluarga." },
  { id: 19, name: "Kol", price: 20000, unit: "Buah", img: "/TugasEas/Kol.jpg", category: "organic",
    desc: "Kol segar dengan daun renyah, cocok untuk sayur maupun lalapan." },
  { id: 20, name: "Mangga Arum Manis", price: 5000, unit: "Buah", img: "/TugasEas/Mangga.jpg", category: "organic",
    desc: "Mangga Arum Manis dengan rasa manis legit dan daging buah tebal." },
  { id: 21, name: "Pupuk Kompos", price: 30000, unit: "Karung (50kg)", img: "/TugasEas/PupukKompos.png", category: "organic",
    desc: "Pupuk kompos organik hasil olahan alami, menyuburkan tanah tanpa bahan kimia." },
  { id: 22, name: "Rumput Laut", price: 5000, unit: "1 Kantong Kuning", img: "/TugasEas/Rumput Laut.jpg", category: "organic",
    desc: "Rumput laut segar dari pesisir, kaya serat dan mineral, cocok untuk olahan sehat." },
  { id: 23, name: "Sayur Putih", price: 5000, unit: "3 Ikat", img: "/TugasEas/SayurPutih.jpg", category: "organic",
    desc: "Sayur putih segar, cocok untuk tumisan maupun campuran sup." },
  { id: 24, name: "Tomat", price: 20000, unit: "Kg", img: "/TugasEas/Tomat.jpg", category: "organic",
    desc: "Tomat segar dengan rasa asam manis seimbang, cocok untuk masakan maupun jus." },
];

// =====================================================================
//  DATA BUS JASA TITIP (Patawang -> Waingapu, ±61 km)
//  INI BARU CONTOH/PLACEHOLDER. Ganti name/img/price dengan data asli.
// =====================================================================
const busOptions = [
  { id: 2, name: "Bus Tujuan Melolo - Waingapu (Yordan)", img: "/gambarr/WhatsApp Image 2026-06-18 at 12.07.05.jpeg", price: 20000 },
];

// ── STATE KERANJANG ──────────────────────────────────────────
let cart = []; // { product, qty }

// ── FORMAT RUPIAH ────────────────────────────────────────────
function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

// =====================================================================
//  RENDER GRID PRODUK PER KATEGORI (dipakai di organic.html & anorganic.html)
//  Cari elemen <div id="categoryProductGrid" data-category="organic|anorganic">
// =====================================================================
function renderCategoryGridIfPresent() {
  const grid = document.getElementById("categoryProductGrid");
  if (!grid) return;
  const category = grid.dataset.category;
  const items = products.filter((p) => p.category === category);

  if (items.length === 0) {
    grid.innerHTML = `<p class="text-center text-muted py-5">Belum ada produk di kategori ini.</p>`;
    return;
  }

  grid.innerHTML = items
    .map(
      (p) => `
    <div class="col-lg-3 text-center mt-3">
      <div class="card border-0 bg-light">
        <div class="card-body">
          <img src="${p.img}" id="produk" class="img-fluid" alt="${p.name}">
        </div>
        <h6>${p.name}</h6>
        <p>${formatRupiah(p.price)}/${p.unit}</p>
      </div>
    </div>`
    )
    .join("");
}

// ============================================================
//  INJECT HTML — Modal Produk, Modal Keranjang, Modal Checkout,
//  Tombol keranjang navbar, Tombol beli di setiap kartu
// ============================================================
function injectUI() {
  // 1. Tombol keranjang di navbar
  const navForm = document.querySelector("nav .d-flex");
  if (navForm) {
    const cartBtn = document.createElement("button");
    cartBtn.className = "btn0 ms-2 position-relative";
    cartBtn.id = "cartNavBtn";
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> <span id="cartBadge" class="badge bg-danger position-absolute top-0 start-100 translate-middle" style="display:none;font-size:10px">0</span>`;
    cartBtn.onclick = (e) => {
      e.preventDefault();
      openCartModal();
    };
    navForm.appendChild(cartBtn);
  }

  // 2. Pasang tombol "Beli" + klik detail ke kartu produk yang ada
  bindProductCards();

  // 3. Modal Detail Produk
  const productModal = document.createElement("div");
  productModal.innerHTML = `
    <div id="productModal" class="bumora-overlay" style="display:none" onclick="closeOnOverlay(event,'productModal')">
      <div class="bumora-modal">
        <button class="bumora-close" onclick="closeModal('productModal')">&times;</button>
        <div class="row g-0 align-items-center">
          <div class="col-5 text-center p-3">
            <img id="pm-img" src="" class="img-fluid rounded" style="max-height:200px;object-fit:contain" alt="">
          </div>
          <div class="col-7 p-3">
            <h5 id="pm-name"></h5>
            <p id="pm-price" style="color:#e44;font-weight:bold"></p>
            <p id="pm-desc" style="font-size:14px;color:#555"></p>
            <div class="d-flex align-items-center gap-2 mt-3">
              <button class="qty-btn" onclick="changeQty(-1)">−</button>
              <input id="pm-qty" type="number" value="1" min="1" max="99"
                style="width:50px;text-align:center;border:1px solid #ccc;border-radius:6px;padding:4px">
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
            <button class="btn1 mt-3 w-100" onclick="addFromModal()">
              <i class="fas fa-cart-plus"></i> Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(productModal);

  // 4. Modal Keranjang
  const cartModal = document.createElement("div");
  cartModal.innerHTML = `
    <div id="cartModal" class="bumora-overlay" style="display:none" onclick="closeOnOverlay(event,'cartModal')">
      <div class="bumora-modal" style="max-width:540px">
        <button class="bumora-close" onclick="closeModal('cartModal')">&times;</button>
        <h5 class="mb-3"><i class="fas fa-shopping-cart"></i> Keranjang Belanja</h5>
        <div id="cartItems" style="max-height:320px;overflow-y:auto"></div>
        <hr>
        <div class="d-flex justify-content-between fw-bold">
          <span>Total</span><span id="cartTotal"></span>
        </div>
        <button class="btn1 w-100 mt-3" onclick="openCheckout()">
          <i class="fas fa-credit-card"></i> Lanjut ke Pembayaran
        </button>
      </div>
    </div>`;
  document.body.appendChild(cartModal);

  // 5. Modal Checkout (+ pilihan bus kalau Jasa Titip dipilih)
  const checkoutModal = document.createElement("div");
  checkoutModal.innerHTML = `
    <div id="checkoutModal" class="bumora-overlay" style="display:none" onclick="closeOnOverlay(event,'checkoutModal')">
      <div class="bumora-modal" style="max-width:560px">
        <button class="bumora-close" onclick="closeModal('checkoutModal')">&times;</button>
        <h5 class="mb-3"><i class="fas fa-receipt"></i> Checkout</h5>

        <!-- Ringkasan -->
        <div id="co-summary" style="background:#f8f8f8;border-radius:8px;padding:12px;margin-bottom:16px;font-size:14px;max-height:160px;overflow-y:auto"></div>

        <!-- Pengiriman -->
        <label class="fw-bold mb-1 d-block">🚚 Metode Pengiriman</label>
        <div class="d-flex flex-wrap gap-2 mb-3" id="shippingOptions">
        
          <label class="ship-opt"><input type="radio" name="shipping" value="SiCepat"> Bumdes</label>
          <label class="ship-opt"><input type="radio" name="shipping" value="Pickup"> Ambil Sendiri</label>
          <label class="ship-opt"><input type="radio" name="shipping" value="JasaTitip"> Jasa Titip Bus</label>
        </div>

        <!-- Pilihan Bus Jasa Titip -->
        <div id="busOptionsBox" style="display:none;margin-bottom:16px">
          <label class="fw-bold mb-2 d-block">🚌 Pilih Bus (Patawang → Waingapu, ±61 km)</label>
          <div id="busOptionsList" class="d-flex flex-wrap gap-2"></div>
        </div>

        <!-- Pembayaran -->
        <label class="fw-bold mb-1 d-block">💳 Metode Pembayaran</label>
        <div class="d-flex flex-wrap gap-2 mb-3" id="paymentOptions">
          <label class="ship-opt"><input type="radio" name="payment" value="Transfer Bank"> 🏦 Transfer Bank</label>
          <label class="ship-opt"><input type="radio" name="payment" value="QRIS"> 📱 QRIS</label>
          <label class="ship-opt"><input type="radio" name="payment" value="E-Wallet"> 👛 E-Wallet</label>
          <label class="ship-opt"><input type="radio" name="payment" value="COD"> 🏠 COD</label>
        </div>

        <div class="d-flex justify-content-between fw-bold mb-3">
          <span>Total Bayar</span><span id="co-total" style="color:#e44"></span>
        </div>

        <button class="btn1 w-100" onclick="confirmOrder()">
          <i class="fas fa-check-circle"></i> Konfirmasi Pesanan
        </button>
      </div>
    </div>`;
  document.body.appendChild(checkoutModal);

  // Render daftar bus & pasang listener show/hide + hitung ulang total
  renderBusOptions();
  document.querySelectorAll('input[name="shipping"]').forEach((r) => {
    r.addEventListener("change", () => {
      const busBox = document.getElementById("busOptionsBox");
      busBox.style.display = r.value === "JasaTitip" && r.checked ? "block" : "none";
      if (r.checked && r.value !== "JasaTitip") {
        document.querySelectorAll('input[name="busPilih"]').forEach((b) => (b.checked = false));
      }
      updateCheckoutTotal();
    });
  });

  // 6. Toast notifikasi
  const toast = document.createElement("div");
  toast.id = "bToast";
  toast.style.cssText = `
    position:fixed;bottom:30px;right:30px;background:#2ecc71;color:#fff;
    padding:12px 22px;border-radius:10px;font-size:14px;z-index:9999;
    display:none;box-shadow:0 4px 12px rgba(0,0,0,.2);transition:opacity .3s`;
  document.body.appendChild(toast);

  // 7. Injeksi CSS tambahan
  const style = document.createElement("style");
  style.textContent = `
    .bumora-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,.5);
      z-index: 1050; display: flex; align-items: center; justify-content: center;
      padding: 16px;
    }
    .bumora-modal {
      background: #fff; border-radius: 14px; padding: 24px;
      width: 100%; max-width: 480px; position: relative;
      box-shadow: 0 10px 40px rgba(0,0,0,.2); max-height: 90vh; overflow-y: auto;
    }
    .bumora-close {
      position: absolute; top: 12px; right: 16px;
      background: none; border: none; font-size: 22px; cursor: pointer; color: #888;
    }
    .qty-btn {
      width: 32px; height: 32px; border: 1px solid #ccc; border-radius: 6px;
      background: #f0f0f0; font-size: 18px; cursor: pointer; line-height: 1;
    }
    .qty-btn:hover { background: #e0e0e0; }
    .ship-opt {
      display: flex; align-items: center; gap: 6px;
      background: #f5f5f5; border: 1px solid #ddd; border-radius: 8px;
      padding: 8px 14px; cursor: pointer; font-size: 13px; transition: .2s;
    }
    .ship-opt:has(input:checked) {
      background: #e8f5e9; border-color: #4caf50; color: #2e7d32; font-weight: 600;
    }
    .bus-opt {
      display: flex; align-items: center; gap: 8px;
      background: #f5f5f5; border: 1px solid #ddd; border-radius: 10px;
      padding: 8px 12px; cursor: pointer; font-size: 13px; transition: .2s;
    }
    .bus-opt img { width: 46px; height: 46px; object-fit: cover; border-radius: 8px; background: #ddd; }
    .bus-opt:has(input:checked) {
      background: #fdecea; border-color: rgb(172,18,18); color: rgb(172,18,18); font-weight: 600;
    }
    .bus-name { font-weight: 600; }
    .bus-price { color: #e44; font-size: 12px; }
    .cart-row { display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid #eee; }
    .cart-row img { width:50px; height:50px; object-fit:contain; border-radius:6px; background:#f5f5f5; }
    .cart-row-info { flex:1; font-size:13px; }
    .cart-row-qty { display:flex; align-items:center; gap:6px; }
    .cart-row-qty button { width:26px;height:26px;border:1px solid #ccc;border-radius:5px;background:#eee;cursor:pointer;font-size:14px; }
    .remove-btn { background:none;border:none;color:#e44;cursor:pointer;font-size:16px; }
  `;
  document.head.appendChild(style);
}

// ── BIND KARTU PRODUK (dipanggil ulang setelah grid kategori dirender) ──
function bindProductCards() {
  document.querySelectorAll(".card.border-0.bg-light").forEach((card) => {
    if (card.dataset.bound === "true") return;

    const imgEl = card.querySelector("img");
    const src = imgEl ? imgEl.getAttribute("src") : "";
    const prod = products.find((p) => p.img === src);
    if (!prod) return; // gambar tidak cocok dengan data produk, dilewati

    card.dataset.productId = prod.id;
    card.dataset.bound = "true";
    card.style.cursor = "pointer";

    card.addEventListener("click", (e) => {
      if (!e.target.closest(".btn-add-cart")) {
        openProductModal(prod.id);
      }
    });

    const addBtn = document.createElement("button");
    addBtn.className = "btn-add-cart btn1 mb-2";
    addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Tambah`;
    addBtn.style.cssText = "font-size:13px;padding:6px 14px;display:block;margin:0 auto;";
    addBtn.onclick = (e) => {
      e.stopPropagation();
      addToCart(prod.id, 1);
      showToast(`${prod.name} ditambahkan ke keranjang!`);
    };
    card.appendChild(addBtn);
  });
}

// ── MODAL PRODUK ─────────────────────────────────────────────
let currentProductId = null;

function openProductModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  currentProductId = id;
  document.getElementById("pm-img").src = p.img;
  document.getElementById("pm-name").textContent = p.name;
  document.getElementById("pm-price").textContent = formatRupiah(p.price) + "/" + p.unit;
  document.getElementById("pm-desc").textContent = p.desc;
  document.getElementById("pm-qty").value = 1;
  document.getElementById("productModal").style.display = "flex";
}

function changeQty(delta) {
  const input = document.getElementById("pm-qty");
  let v = parseInt(input.value) + delta;
  input.value = Math.max(1, Math.min(99, v));
}

function addFromModal() {
  const qty = parseInt(document.getElementById("pm-qty").value);
  const p = products.find((x) => x.id === currentProductId);
  addToCart(currentProductId, qty);
  closeModal("productModal");
  showToast(`${qty}x ${p.name} ditambahkan!`);
}

// ── KERANJANG ─────────────────────────────────────────────────
function addToCart(productId, qty) {
  const existing = cart.find((c) => c.product.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    const p = products.find((x) => x.id === productId);
    if (p) cart.push({ product: p, qty });
  }
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  badge.textContent = total;
  badge.style.display = total > 0 ? "inline" : "none";
}

function openCartModal() {
  renderCartItems();
  document.getElementById("cartModal").style.display = "flex";
}

function renderCartItems() {
  const container = document.getElementById("cartItems");
  if (cart.length === 0) {
    container.innerHTML = `<p class="text-center text-muted py-3"><i class="fas fa-shopping-cart"></i><br>Keranjang kosong</p>`;
    document.getElementById("cartTotal").textContent = formatRupiah(0);
    return;
  }
  container.innerHTML = cart
    .map(
      (c) => `
    <div class="cart-row">
      <img src="${c.product.img}" alt="${c.product.name}">
      <div class="cart-row-info">
        <div><b>${c.product.name}</b></div>
        <div style="color:#e44">${formatRupiah(c.product.price)}/${c.product.unit}</div>
        <div class="cart-row-qty mt-1">
          <button onclick="changeCartQty(${c.product.id},-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="changeCartQty(${c.product.id},1)">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-size:13px;font-weight:600">${formatRupiah(c.product.price * c.qty)}</div>
        <button class="remove-btn mt-1" onclick="removeFromCart(${c.product.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`
    )
    .join("");

  const total = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  document.getElementById("cartTotal").textContent = formatRupiah(total);
}

function changeCartQty(productId, delta) {
  const item = cart.find((c) => c.product.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCartItems();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter((c) => c.product.id !== productId);
  renderCartItems();
  updateCartBadge();
}

// ── BUS JASA TITIP ───────────────────────────────────────────
function renderBusOptions() {
  const box = document.getElementById("busOptionsList");
  if (!box) return;
  box.innerHTML = busOptions
    .map(
      (b) => `
    <label class="bus-opt">
      <input type="radio" name="busPilih" value="${b.id}" onchange="updateCheckoutTotal()">
      <img src="${b.img}" alt="${b.name}">
      <div>
        <div class="bus-name">${b.name}</div>
        <div class="bus-price">${formatRupiah(b.price)}</div>
      </div>
    </label>`
    )
    .join("");
}

function getSelectedBus() {
  const checked = document.querySelector('input[name="busPilih"]:checked');
  if (!checked) return null;
  return busOptions.find((b) => b.id === parseInt(checked.value)) || null;
}

// ── CHECKOUT ──────────────────────────────────────────────────
function updateCheckoutTotal() {
  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const shipping = document.querySelector('input[name="shipping"]:checked');
  let ongkir = 0;
  if (shipping && shipping.value === "JasaTitip") {
    const bus = getSelectedBus();
    if (bus) ongkir = bus.price;
  }
  const total = subtotal + ongkir;
  const totalEl = document.getElementById("co-total");
  if (totalEl) {
    totalEl.textContent = ongkir > 0
      ? `${formatRupiah(total)} (termasuk ongkir ${formatRupiah(ongkir)})`
      : formatRupiah(total);
  }
}

function openCheckout() {
  closeModal("cartModal");
  if (cart.length === 0) {
    showToast("Keranjang masih kosong!", "#e74c3c");
    return;
  }

  const summary = cart
    .map((c) => `<div style="display:flex;justify-content:space-between">
      <span>${c.qty}x ${c.product.name}</span>
      <span>${formatRupiah(c.product.price * c.qty)}</span>
    </div>`)
    .join("");

  document.getElementById("co-summary").innerHTML = summary;

  // reset pilihan
  document.querySelectorAll('input[name="shipping"], input[name="payment"], input[name="busPilih"]').forEach((r) => (r.checked = false));
  document.getElementById("busOptionsBox").style.display = "none";
  updateCheckoutTotal();

  document.getElementById("checkoutModal").style.display = "flex";
}

function confirmOrder() {
  const shipping = document.querySelector('input[name="shipping"]:checked');
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!shipping) {
    showToast("Pilih metode pengiriman dulu!", "#e67e22");
    return;
  }

  let bus = null;
  if (shipping.value === "JasaTitip") {
    bus = getSelectedBus();
    if (!bus) {
      showToast("Pilih bus jasa titip dulu!", "#e67e22");
      return;
    }
  }

  if (!payment) {
    showToast("Pilih metode pembayaran dulu!", "#e67e22");
    return;
  }

  const subtotal = cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const ongkir = bus ? bus.price : 0;
  const total = subtotal + ongkir;
  const shippingLabel = bus ? `${shipping.value} - ${bus.name}` : shipping.value;

  closeModal("checkoutModal");
  showSuccessModal(shippingLabel, payment.value, total);

  cart = [];
  updateCartBadge();
}

function showSuccessModal(shipping, payment, total) {
  const el = document.createElement("div");
  el.className = "bumora-overlay";
  el.style.display = "flex";
  el.innerHTML = `
    <div class="bumora-modal text-center" style="max-width:420px">
      <div style="font-size:56px">✅</div>
      <h4 class="mt-2">Pesanan Diterima!</h4>
      <p style="color:#555;font-size:14px">Terima kasih telah berbelanja di <b>Panapa</b>.</p>
      <div style="background:#f5f5f5;border-radius:8px;padding:14px;text-align:left;font-size:13px;margin:12px 0">
        <div><b>Pengiriman:</b> ${shipping}</div>
        <div><b>Pembayaran:</b> ${payment}</div>
        <div><b>Total:</b> <span style="color:#e44;font-weight:bold">${formatRupiah(total)}</span></div>
      </div>
      <button class="btn1 w-100" onclick="this.closest('.bumora-overlay').remove()">Tutup</button>
    </div>`;
  document.body.appendChild(el);
}

// ── UTILITAS ──────────────────────────────────────────────────
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

function closeOnOverlay(event, id) {
  if (event.target.id === id) closeModal(id);
}

let toastTimer;
function showToast(msg, color = "#2ecc71") {
  const t = document.getElementById("bToast");
  t.textContent = msg;
  t.style.background = color;
  t.style.display = "block";
  t.style.opacity = "1";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.style.opacity = "0";
    setTimeout(() => (t.style.display = "none"), 300);
  }, 2500);
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  renderCategoryGridIfPresent(); // isi grid kalau halaman ini organic.html / anorganic.html
  injectUI();
  injectSearch();
});

// ── LIVE SEARCH ───────────────────────────────────────────────
function injectSearch() {
  const navForm = document.querySelector("nav .d-flex");
  if (!navForm) return;

  // Cegah form submit/refresh
  const parentForm = navForm.closest("form");
  if (parentForm) parentForm.addEventListener("submit", function(e){ e.preventDefault(); });
  const searchBtn = navForm.querySelector(".btn0:not(#cartNavBtn)");
  if (searchBtn) searchBtn.onclick = function(e){ e.preventDefault(); };

  const searchInput = navForm.querySelector("input[type='search']");
  if (!searchInput) return;

  // Bungkus input dengan div relative
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "position:relative;display:inline-block";
  searchInput.parentNode.insertBefore(wrapper, searchInput);
  wrapper.appendChild(searchInput);

  // Dropdown hasil pencarian
  const dropdown = document.createElement("div");
  dropdown.id = "searchDropdown";
  dropdown.style.cssText = [
    "position:absolute","top:calc(100% + 6px)","left:0","width:280px",
    "background:#fff","border-radius:10px","box-shadow:0 6px 24px rgba(0,0,0,.15)",
    "z-index:2000","display:none","overflow:hidden"
  ].join(";");
  wrapper.appendChild(dropdown);

  searchInput.addEventListener("input", function() {
    const q = searchInput.value.trim().toLowerCase();
    dropdown.innerHTML = "";
    if (!q) { dropdown.style.display = "none"; return; }

    const matches = products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding:14px;color:#999;font-size:13px;text-align:center"><i class="fas fa-search"></i> Produk tidak ditemukan</div>';
      dropdown.style.display = "block";
      return;
    }

    matches.forEach(function(p) {
      const item = document.createElement("div");
      item.style.cssText = "display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;font-size:13px;border-bottom:1px solid #f0f0f0;transition:.15s";
      const highlighted = p.name.replace(new RegExp("(" + q + ")", "gi"), "<mark style='background:#fff3cd;padding:0;border-radius:2px'>$1</mark>");
      const priceLabel = formatRupiah(p.price) + "/" + p.unit;
      item.innerHTML = '<img src="' + p.img + '" style="width:40px;height:40px;object-fit:contain;border-radius:6px;background:#f5f5f5"><div><div style="font-weight:600">' + highlighted + '</div><div style="color:#e44;font-size:12px">' + priceLabel + '</div></div>';
      item.onmouseenter = function(){ item.style.background = "#f5f5f5"; };
      item.onmouseleave = function(){ item.style.background = ""; };
      item.onclick = function() {
        dropdown.style.display = "none";
        searchInput.value = "";
        openProductModal(p.id);
      };
      dropdown.appendChild(item);
    });

    dropdown.style.display = "block";
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener("click", function(e) {
    if (!wrapper.contains(e.target)) dropdown.style.display = "none";
  });
}
