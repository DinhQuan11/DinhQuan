function toast({ title = "", message = "", type = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Click to remove
    toast.onclick = function (event) {
      if (event.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fa-sharp fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      warning: "fa-sharp fa-solid fa-circle-exclamation",
      error: "fa-sharp fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast__${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${duration}ms forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__message">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}

function showSuccessToastReaction() {
  toast({
    title: "Success",
    message: "Cảm ơn bạn đã đánh giá.",
    type: "success",
    duration: 3000,
  });
}

function showErrorToastCmt() {
  toast({
    title: "Error",
    message: "Vui lòng điền thông tin.",
    type: "error",
    duration: 3000,
  });
}

function showSuccessToastCmt() {
  toast({
    title: "Success",
    message: "Bình luận thành công.",
    type: "success",
    duration: 3000,
  });
}

function showToastCmt(event) {
  const name = document.getElementsByClassName("feedback-name")[0].value;
  const email = document.getElementsByClassName("feedback-email")[0].value;
  const cmt = document.getElementsByClassName("feedback-cmt")[0].value;

  if (name && email && cmt) {
    showSuccessToastCmt();
    event.preventDefault();
  } else {
    showErrorToastCmt();
  }
}
