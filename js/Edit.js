const btnEdit = document.querySelector("#btnEdit");
const productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("products")) || [];
let isEditMode = false;

// Hàm render sản phẩm với chế độ edit
function renderProductsWithEdit() {
  if (!productList) return;

  productList.innerHTML = "";
  products.forEach((item) => {
    productList.innerHTML += `
      <div class="card bg-base-100 shadow-md product-card" data-id="${item.id}">
        <figure>
          <img src="${item.image}" alt="${item.name}" />
        </figure>

        <div class="card-body">
          <h2 class="card-title">${item.name}</h2>
          <p>${item.desc}</p>
          <p class="text-red-500 font-bold">${item.price.toLocaleString()} đ</p>

          <div class="flex gap-2 mt-2">
            <button 
              class="btnDelete ${
                isEditMode ? "" : "hidden"
              } btn btn-error btn-sm"
              onclick="deleteProduct(${item.id})"
            >
              Xoá
            </button>

            <button 
              class="btnDetail ${
                isEditMode ? "" : "hidden"
              } btn btn-outline btn-sm"
              onclick="goDetail(${item.id})"
            >
              Chi tiết
            </button>
            
            <button 
              class="btnEditProduct ${
                isEditMode ? "" : "hidden"
              } btn btn-warning btn-sm"
              onclick="editProduct(${item.id})"
            >
              Sửa
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Hàm chuyển đến trang chi tiết
function goDetail(id) {
  window.location.href = `detail1.html?id=${id}`;
}

// Hàm xóa sản phẩm
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

    // Lọc sản phẩm không bị xóa
    const newProducts = products.filter((item) => item.id !== id);

    // Lưu vào localStorage
    localStorage.setItem("products", JSON.stringify(newProducts));

    // Cập nhật mảng hiện tại
    products = newProducts;

    // Render lại
    renderProductsWithEdit();

    Swal.fire("Đã xoá!", "Sản phẩm đã bị xoá.", "success");
  });
}

// Hàm chỉnh sửa sản phẩm (chuyển đến trang chỉnh sửa)
function editProduct(id) {
  window.location.href = `edit-product.html?id=${id}`;
}

// Xử lý nút Edit
if (btnEdit) {
  btnEdit.addEventListener("click", () => {
    isEditMode = !isEditMode;

    if (isEditMode) {
      btnEdit.classList.add("btn-error");
      btnEdit.textContent = "Đang chỉnh sửa...";
    } else {
      btnEdit.classList.remove("btn-error");
      btnEdit.textContent = "Chỉnh sửa";
    }

    renderProductsWithEdit();
  });
}

// Render lần đầu
if (productList) {
  renderProductsWithEdit();
}

// Thêm các hàm vào window để có thể gọi từ HTML
window.goDetail = goDetail;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
