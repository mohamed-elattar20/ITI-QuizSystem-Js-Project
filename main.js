var form = document.getElementById("form");
var userNameErr = document.getElementById("userNameErr");
var passErr = document.getElementById("passErr");
var BtnShowPass = document.getElementById("BtnShowPass");
form.username.focus();
// console.log(form);
BtnShowPass.addEventListener("click", function () {
  if (form.password.getAttribute("type") == "password") {
    form.password.setAttribute("type", "text");
  } else {
    form.password.setAttribute("type", "password");
  }
});

var regex = /[a-zA-z0-9]{8}/gi;
form.addEventListener("submit", function (e) {
  var userName = form.username.value;
  //   console.log(userName);
  var pass = form.password.value;
  if (userName.length == 0 || userName == "" || userName.length < 6) {
    e.preventDefault();
    userNameErr.style.opacity = "1";
  } else {
    userNameErr.style.opacity = "0";
  }
  if (pass.length == 0 || pass == "" || !regex.test(pass)) {
    e.preventDefault();
    passErr.style.opacity = "1";
  } else {
    passErr.style.opacity = "0";
  }
});
