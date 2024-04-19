const carousel = document.querySelector(".section5slider");
const carouselBoxes = document.querySelectorAll(".section5sliderBox");

let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
});
