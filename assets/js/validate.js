function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var messageContainer = document.getElementById("login-message");

  if (username === "1C7.KUMm4771KK4.jU1c3" && password === "Youcans33m3") {
    messageContainer.innerHTML = "<p>Login successful!</p>";
    window.location.href = "/pages/challenge.html";
    return false; 
  } else {
    messageContainer.innerHTML = '<p style="color: white;">Username or password is incorrect.</p>';
    return false; 
  }
}
