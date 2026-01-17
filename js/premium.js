const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const btnBasic = document.getElementById("basic-subscribe");
const btnPro = document.getElementById("pro-subscribe");
const btnEnterprise = document.getElementById("enterprise-subscribe");
const btnFree = document.getElementById("free-subscribe");

function subscribe(plan) {
  // Chưa đăng nhập
  if (!currentUser) {
    Swal.fire({
      icon: "error",
      title: "Vui lòng đăng nhập",
      timer: 1500,
      showConfirmButton: false,
      willClose: () => {
        location.href = "signin.html";
      },
    });
    return;
  }

  // Cập nhật plan cho currentUser
  currentUser.plan = plan;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  // Cập nhật trong danh sách users
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.email === currentUser.email);
  if (index !== -1) {
    users[index].plan = plan;
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Thông báo
  Swal.fire({
    icon: "success",
    title: "Thành công",
    text: `Bạn đang sử dụng gói ${plan}`,
    willClose: () => {
      location.href = "index.html";
    },
  });
}

/* Gán sự kiện */
document
  .getElementById("free-subscribe")
  ?.addEventListener("click", () => subscribe("free"));

document
  .getElementById("basic-subscribe")
  ?.addEventListener("click", () => subscribe("basic"));

document
  .getElementById("pro-subscribe")
  ?.addEventListener("click", () => subscribe("pro"));

document
  .getElementById("enterprise-subscribe")
  ?.addEventListener("click", () => subscribe("enterprise"));

// Thông báo và chuyển về trang chủ
if (!currentUser) {
  Swal.fire({
    title: "Vui lòng đăng nhập",
    text: ` Vui lòng đăng nhập để tiếp tục!`,
    icon: "error",
    timer: 2000,
    showConfirmButton: false,
    willClose: () => {
      location.href = "signin.html"; // QUAN TRỌNG: Quay về trang chủ
    },
  });
}

if (currentUser) {
  Swal.fire({
    title: "Thành công!",
    text: `Bạn đã đăng ký gói ${plan.toUpperCase()}`,
    icon: "success",
    willClose: () => {
      location.href = "index.html";
    },
  });
}
// btnBasic?.addEventListener("click", () => {
//   if (!currentUser) {
//     Swal.fire({
//       title: "Vui lòng đăng nhập",
//       text: ` Vui lòng đăng nhập để tiếp tục!`,
//       icon: "error",
//       timer: 2000,
//       showConfirmButton: false,
//       willClose: () => {
//         location.href = "signin.html";
//       },
//     });
//   }
// });
// if (currentUser) {
//   Swal.fire({
//     title: "Thành công!",
//     text: `Bạn đã đăng ký gói ${plan}`,
//     icon: "success",
//     willClose: () => {
//       location.href = "index.html";
//     },
//   });
// }

// btnPro?.addEventListener("click", () => {
//   if (!currentUser) {
//     Swal.fire({
//       title: "Vui lòng đăng nhập",
//       text: ` Vui lòng đăng nhập để tiếp tục!`,
//       icon: "error",
//       timer: 2000,
//       showConfirmButton: false,
//       willClose: () => {
//         location.href = "signin.html"; // QUAN TRỌNG: Quay về trang chủ
//       },
//     });
//   }
// });
// if (currentUser) {
//   Swal.fire({
//     title: "Thành công!",
//     text: `Bạn đã đăng ký gói ${plan}`,
//     icon: "success",
//     willClose: () => {
//       location.href = "index.html";
//     },
//   });
// }

// btnEnterprise?.addEventListener("click", () => {
//   if (!currentUser) {
//     Swal.fire({
//       title: "Vui lòng đăng nhập",
//       text: ` Vui lòng đăng nhập để tiếp tục!`,
//       icon: "error",
//       timer: 2000,
//       showConfirmButton: false,
//       willClose: () => {
//         location.href = "signin.html"; // QUAN TRỌNG: Quay về trang chủ
//       },
//     });
//   }
// });
// if (currentUser) {
//   Swal.fire({
//     title: "Thành công!",
//     text: `Bạn đã đăng ký gói ${plan}`,
//     icon: "success",
//     willClose: () => {
//       location.href = "index.html";
//     },
//   });
// }

// btnFree?.addEventListener("click", () => {
//   if (!currentUser) {
//     Swal.fire({
//       title: "Vui lòng đăng nhập",
//       text: ` Vui lòng đăng nhập để tiếp tục!`,
//       icon: "error",
//       timer: 2000,
//       showConfirmButton: false,
//       willClose: () => {
//         location.href = "signin.html"; // QUAN TRỌNG: Quay về trang chủ
//       },
//     });
//   }
// });
// if (currentUser) {
//   Swal.fire({
//     title: "Thành công!",
//     text: `Bạn đã đăng ký gói ${plan.toUpperCase()}`,
//     icon: "success",
//     willClose: () => {
//       location.href = "index.html";
//     },
//   });
// }
