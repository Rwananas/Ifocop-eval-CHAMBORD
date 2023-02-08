// SCRIPT DES MENUS RESTAURANTS
const buttonMidi = document.querySelector("#buttonMidi");
const menuMidi = document.querySelector("#menuMidi");

      buttonMidi.addEventListener("click", function () {
        if (menuMidi.style.display === "block") {
          menuMidi.style.display = "none";
        } else {
          menuMidi.style.display = "block";
        }
      });

const buttonAprem = document.querySelector("#buttonAprem");
const menuDegustation = document.querySelector("#menuDegustation");

      buttonAprem.addEventListener("click", function () {
        if (menuDegustation.style.display === "block") {
          menuDegustation.style.display = "none";
        } else {
          menuDegustation.style.display = "block";
        }
      });

const buttonSoir = document.querySelector("#buttonSoir");
const menuSoir = document.querySelector("#menuSoir");

      buttonSoir.addEventListener("click", function () {
        if (menuSoir.style.display === "block") {
          menuSoir.style.display = "none";
        } else {
          menuSoir.style.display = "block";
        }
      });