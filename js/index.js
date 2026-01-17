// Đổi tên biến từ currentUser thành currentUserIndex để tránh trùng tên
const currentUserIndex = JSON.parse(localStorage.getItem("currentUser"));
const listProduct = document.querySelector("#product-list");
let products = JSON.parse(localStorage.getItem("products")) || [];

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
