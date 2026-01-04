const listProduct = document.querySelector("#product-list");
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  listProduct.innerHTML = "";

  products.forEach((item) => {
    listProduct.innerHTML += `
      <div class="card bg-base-100 shadow cursor-pointer"
        onclick="goDetail(${item.id})">
        <figure>
          <img src="${item.image}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${item.name}</h2>
          <p>${item.desc}</p>
          <p class="text-red-500 font-bold">${item.price.toLocaleString()} đ</p>
        </div>
      </div>
    `;
  });
}

function goDetail(id) {
  window.location.href = `detail1.html?id=${id}`;
}

renderProducts();
