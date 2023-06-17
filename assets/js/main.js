// Jumbotron Slider
var counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 3) {
        counter = 1;
    }
}, 5000);

// Nav Menu Btn
function menuBtn() {
    navLink = document.getElementById("nav-link");
    navLink.classList.toggle("active");
}