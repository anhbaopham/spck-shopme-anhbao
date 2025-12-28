const btnEdit = document.querySelector("#btnEdit");

btnEdit.addEventListener("click", () => {
  btnEdit.classList.toggle("btn-error");

  const isEditMode = btnEdit.classList.contains("btn-error");
  const cards = document.querySelectorAll("#product-list .card");

  cards.forEach((card) => {
    const btnDelete = card.querySelector(".btnDelete");
    const btnDetail = card.querySelector(".btnDetail");

    if (isEditMode) {
      btnDelete.classList.remove("hidden");
      btnDetail.classList.remove("hidden");
    } else {
      btnDelete.classList.add("hidden");
      btnDetail.classList.add("hidden");
    }
  });
});
