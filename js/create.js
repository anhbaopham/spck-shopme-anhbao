const nameInput = document.querySelector("#nameLaptop");
const imageInput = document.querySelector("#imageLaptop");
const descInput = document.querySelector("#descriptionLaptop");
const priceInput = document.querySelector("#priceLaptop");
const btnCreate = document.querySelector("#btnCreate");
const productList = document.querySelector("#product-list");

// Lấy danh sách cũ từ localStorage (nếu có)
let products = JSON.parse(localStorage.getItem("products")) || [];

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const desc = descInput.value.trim();
  const price = priceInput.value;
  const image = imageInput.value.trim();

  if (!name || !desc || !price || !image) {
    Swal.fire({
      title: "Thiếu rồi nha!",
      text: "Vui lòng nhập đầy đủ thông tin!",
      icon: "question",
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    return;
  }

  // Tạo sản phẩm laptop
  const laptop = {
    id: Date.now(),
    name: name,
    desc: desc,
    image: image,
    price: Number(price),
  };

  products.push(laptop);

  // Lưu vào localStorage
  localStorage.setItem("products", JSON.stringify(products));

  renderProducts();

  // Clear input
  nameInput.value = "";
  descInput.value = "";
  priceInput.value = "";
});
