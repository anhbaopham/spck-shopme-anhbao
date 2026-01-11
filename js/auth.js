const users = JSON.parse(localStorage.getItem("users")) || [];

const find = users.find((u) => u.email === email && u.password === password);

if (!find) return alert("Sai tài khoản");

if (!find.plan) find.plan = "free"; // ⭐ quan trọng
localStorage.setItem("currentUser", JSON.stringify(find));
location.href = "index.html";
