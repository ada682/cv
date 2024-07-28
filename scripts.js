document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".logo");
    var menu = document.querySelector("nav ul.menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
