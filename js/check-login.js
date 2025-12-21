var btnSignin = document.getElementById("btnSignin");
var btnSignup = document.getElementById("btnSignup");
var profile = document.getElementById("profile");
var greeting = document.getElementById("greeting");
var btnLogout = document.getElementById("btn-logout");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);

// nếu đã đăng nhập thì ẩn nút đăng nhập và hiện thị thông tin người dùng
if (currentUser) {
  btnSignin.classList.add("hidden");
  btnSignup.classList.add("hidden");
  profile.classList.remove("hidden");
  greeting.innerText = `Xin chao, ${currentUser.email}`;
} else {
  btnSignin.classList.remove("hidden");
  btnSignup.classList.add("hidden");
  profile.classList.add("hidden");
}
// đăng xuất
btnLogout.addEventListener("click", () => {
  console.log("Logging out....");
  localStorage.removeItem("currentUser");
  window.location.reload();
});
