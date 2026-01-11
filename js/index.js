// Đổi tên biến từ currentUser thành currentUserIndex để tránh trùng tên
const currentUserIndex = JSON.parse(localStorage.getItem("currentUser"));
const listProduct = document.querySelector("#product-list");
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  listProduct.innerHTML = "";

  products.forEach((item) => {
    // Sử dụng item.thumbnail hoặc item.image cho ảnh
    // Sử dụng item.title hoặc item.name cho tên sản phẩm
    listProduct.innerHTML += `
      <div class="card bg-base-100 shadow cursor-pointer"
        onclick="goDetail(${item.id})">
        <figure>
          <img src="${item.thumbnail || item.image}" alt="${
      item.title || item.name
    }" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${item.title || item.name}</h2>
          <p>${item.description || item.desc}</p>
          <p class="text-red-500 font-bold">${item.price.toLocaleString()} đ</p>
          <p class="text-gray-500">Kho: ${item.stock || "N/A"}</p>
        </div>
      </div>
    `;
  });
}

function goDetail(id) {
  window.location.href = `detail1.html?id=${id}`;
}

// Gọi hàm render khi trang tải
renderProducts();

// Xử lý hiển thị badge theo gói của người dùng
// Sử dụng biến currentUserIndex thay vì currentUser
const plan = currentUserIndex?.plan || "free";

// Ẩn tất cả badge trước
document.querySelectorAll(".plan-badge").forEach((b) => {
  b.classList.add("hidden");
});

// Hiện badge đúng gói
const badge = document.querySelector(`[data-plan="${plan}"]`);
if (badge) {
  badge.classList.remove("hidden");
  console.log(`Đang hiển thị badge cho gói: ${plan}`);
} else {
  console.error(`Không tìm thấy badge cho gói: ${plan}`);
  console.log(
    "Các badge có sẵn:",
    document.querySelectorAll(".plan-badge").length
  );
}

// Debug: Kiểm tra thông tin người dùng
console.log("Thông tin người dùng (từ index.js):", currentUserIndex);
console.log("Gói hiện tại:", plan);

// Xuất hàm goDetail ra global scope để có thể gọi từ HTML
window.goDetail = goDetail;
