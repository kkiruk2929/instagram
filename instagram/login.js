const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function () {
  const loginId = document.querySelector(".id").value;
  const loginPassword = document.querySelector(".password").value;

  loginId && loginPassword
    ? (document.querySelector(".login-btn").style.backgroundColor = "blue")
    : 0;
});
