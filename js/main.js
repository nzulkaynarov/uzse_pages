let accardionsItems = document.querySelectorAll('.accardion-head')

let navMenu = document.querySelector(".nav-menu");
let navBarToggle = document.getElementById("nav-burger");
let navBurger = document.getElementById("nav-toggle-btn");

navBarToggle.addEventListener("click", function () {
    console.log('click')
    navMenu.classList.toggle('open')
    navBurger.classList.toggle("active");
});




accardionsItems.forEach(item => {
    console.log(item)
    item.addEventListener('click', (e) => {
        item.children[1].classList.toggle('rotate')
        item.nextElementSibling.classList.toggle('opened')
    })
})

let slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}






