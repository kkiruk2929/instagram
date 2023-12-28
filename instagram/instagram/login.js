document.addEventListener("DOMContentLoaded", () => {
  function initLoginBtn() {
    const loginButtonEl = document.querySelector(".login-btn");
    if (!loginButtonEl) return;

    const loginIdEl = document.querySelector(".id");
    if (!loginIdEl) return;

    const loginPasswordEl = document.querySelector(".password");
    if (!loginPasswordEl) return;

    let idVal = "";
    let pwVal = "";
    function handleChangeLoginInput() {
      if (idVal && pwVal) {
        loginButtonEl.classList.add("enabled");
      } else {
        loginButtonEl.classList.remove("enabled");
      }
    }

    loginIdEl.addEventListener("input", (e) => {
      idVal = e.target.value;
      handleChangeLoginInput();
    });
    loginPasswordEl.addEventListener("input", (e) => {
      pwVal = e.target.value;
      handleChangeLoginInput();
    });
  }
  initLoginBtn();
});
