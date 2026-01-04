const nameInput = document.querySelector("#nameLaptop");
const imageInput = document.querySelector("#imageLaptop");
const descInput = document.querySelector("#descriptionLaptop");
const priceInput = document.querySelector("#priceLaptop");
const btnCreate = document.querySelector("#btnCreate");
const productList = document.querySelector("#product-list");

// Lấy danh sách cũ từ localStorage (nếu có)
let products = JSON.parse(localStorage.getItem("products")) || [];

// Hàm render sản phẩm (nếu có danh sách hiển thị tại trang create)
function renderProducts() {
  if (!productList) return;

  productList.innerHTML = "";
  products.forEach((item) => {
    productList.innerHTML += `
      <div class="card bg-base-100 shadow-md mb-4">
        <div class="card-body">
          <h2 class="card-title">${item.name}</h2>
          <p>${item.desc}</p>
          <p class="text-red-500 font-bold">${item.price.toLocaleString()} đ</p>
        </div>
      </div>
    `;
  });
}

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const desc = descInput.value.trim();
  const price = priceInput.value;
  const image = imageInput.value.trim();

  // Kiểm tra dữ liệu
  if (!name || !desc || !price || !image) {
    Swal.fire({
      title: "Thiếu rồi nha!",
      text: "Vui lòng nhập đầy đủ thông tin!",
      icon: "question",
    });
    return;
  }

  if (isNaN(price) || Number(price) <= 0) {
    Swal.fire({
      title: "Lỗi!",
      text: "Giá sản phẩm phải là số và dương",
      icon: "error",
    });
    return;
  }

  // Tạo sản phẩm laptop
  const laptop = {
    id: Date.now(),
    title: name,
    description: desc,
    thumbnail: image,
    price: Number(price),
  };

  // Thêm vào mảng và lưu vào localStorage
  products.push(laptop);
  localStorage.setItem("products", JSON.stringify(products));

  // Hiển thị thông báo thành công
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Sản phẩm đã được thêm!",
    showConfirmButton: false,
    timer: 1500,
    willClose: () => {
      // Clear input
      nameInput.value = "";
      descInput.value = "";
      priceInput.value = "";
      imageInput.value = "";

      // Render lại danh sách (nếu có)
      renderProducts();

      // Chuyển về trang chủ
      window.location.href = "index.html";
    },
  });
});

// Render danh sách khi trang được tải (nếu có)
if (productList) {
  renderProducts();
}
