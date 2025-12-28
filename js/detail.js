const params = new URLSearchParams(window.location.search); // window.location.search → ?id=1712345678 |
const id = Number(params.get("id")); //params.get("id") → "1712345678" | Number(...) → số (để so sánh)
//lấy sản phẩm từ localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];
const product = products.find((item) => item.id === id); //Duyệt từng laptop | Tìm đúng laptop có id trùng với id trên URL | Trả về 1 object
if (!product) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}

// lấy dữ liệu vào html (quan trọng)
document.querySelector(".card-title").innerText = product.name;
document.querySelector(".product-desc").innerText = product.desc;
document.querySelector(".product-image").src = product.image;
document.querySelector(".product-price").innerText =
  product.price.toLocaleString() + " đ";
