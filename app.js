// SCRIPT FORMULAIRE
const form = document.querySelector("#booking-form");
const message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  message.innerHTML = "Envoyé!";
  message.classList.add("success");
  message.style.display = "block";
});
