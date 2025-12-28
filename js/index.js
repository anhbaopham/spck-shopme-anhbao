const productList = document.querySelector("#product-list");
const products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  productList.innerHTML = "";

  products.forEach((item) => {
    productList.innerHTML += `
      <div class="card bg-base-100 shadow-md product-card">
        <figure>
          <img src="${item.image}" alt="${item.name}" />
        </figure>

        <div class="card-body">
          <h2 class="card-title">${item.name}</h2>
          <p>${item.desc}</p>
          <p class="text-red-500 font-bold">
            ${item.price.toLocaleString()} đ
          </p>

          <div class="flex gap-2 mt-2">
            <button 
              class="btnDelete hidden btn btn-error btn-sm"
              onclick="deleteProduct(${item.id})"
            >
              Xoá
            </button>

            <button 
              class="btnDetail hidden btn btn-outline btn-sm"
              onclick="goDetail(${item.id})"
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function goDetail(id) {
  window.location.href = `detail1.html?id=${id}`;
}

function deleteProduct(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "Bạn có chắc là muốn xoá không?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Xoá",
    cancelButtonText: "Huỷ",
  }).then((result) => {
    if (!result.isConfirmed) return;

    const newProducts = products.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(newProducts));

    products.length = 0;
    products.push(...newProducts);

    renderProducts();

    Swal.fire("Đã xoá!", "Sản phẩm đã bị xoá.", "success");
  });
}

renderProducts();
// Hiển thị nút xoá và chi tiết khi đã đăng nhập
