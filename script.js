/* =========================================
   SHREYESH PHOTOGRAPHY
   MOBILE MENU
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

        if (mobileMenu.classList.contains("open")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

});