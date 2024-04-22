$(document).ready(function() {
    const $carousel = $(".section5slider");
    const $carouselBoxes = $(".section5sliderBox");

    let isDragging = false;
    let startX;
    let scrollLeft;

    $carousel.on("mousedown", function(e) {
        isDragging = true;
        startX = e.pageX - $carousel.offset().left;
        scrollLeft = $carousel.scrollLeft();
    });

    $carousel.on("mouseleave", function() {
        isDragging = false;
    });

    $carousel.on("mouseup", function() {
        isDragging = false;
    });

    $carousel.on("mousemove", function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - $carousel.offset().left;
        const walk = x - startX;
        $carousel.scrollLeft(scrollLeft - walk);
    });

    const $prevButton = $(".prev-button");
    const $nextButton = $(".next-button");

    $prevButton.on("click", function() {
        $carousel.scrollLeft($carousel.scrollLeft() - $carousel.outerWidth());
    });

    $nextButton.on("click", function() {
        $carousel.scrollLeft($carousel.scrollLeft() + $carousel.outerWidth());
    });
    $(".menu").click(function (){
        alert("Message")
    })
});
