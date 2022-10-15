// Get the modal 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("#generate");

// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function closeModal() {
  modal.style.display = "none";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
