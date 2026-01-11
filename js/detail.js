const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const products = JSON.parse(localStorage.getItem("products")) || [];
const product = products.find((p) => p.id === id);

if (!product) {
  Swal.fire({
    icon: "error",
    title: "Không tìm thấy sản phẩm",
    willClose: () => (location.href = "index.html"),
  });
} else {
  document.querySelector(".card-title").innerText = product.title;
  document.querySelector(".product-desc").innerText = product.description;
  document.querySelector(".product-image").src = product.thumbnail;
  document.querySelector(".product-price").innerText = document.querySelector(
    ".product-stock"
  ).innerText = product.price.toLocaleString() + " đ";
}
