function generatePassword() {
  var length = 10; // Length of the generated password
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
 
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
 
  var passwordDisplay = document.getElementById("password-display");
  passwordDisplay.textContent = password;
}

function copyPassword() {
  var passwordDisplay = document.getElementById("password-display");
  var range = document.createRange();
  range.selectNode(passwordDisplay);
  window.getSelection().addRange(range);
 
  try {
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } catch (err) {
    alert("Oops, unable to copy the password.");
  }
 
  window.getSelection().removeAllRanges();
}