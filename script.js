const images = [
    "cert.jpg",
    "cert1.jpg",
    "cert2.jpg",
    "cert3.jpg",
    "cert4.jpeg",
    "cert5.jpg",
    "cert.jpg",
    "cert1.jpg",
    "cert2.jpg",
    "cert3.jpg",
    "cert4.jpeg"
];


let index = 1;

function updateCarousel() {
    document.getElementById("leftImg").src = images[(index - 1 + images.length) % images.length];
    document.getElementById("mainImg").src = images[index];
    document.getElementById("rightImg").src = images[(index + 1) % images.length];
}

function moveRight() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function moveLeft() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

setInterval(moveRight, 5000); // Auto-slide every 10 seconds

updateCarousel(); // Initial setup
