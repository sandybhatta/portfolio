document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");

    function reveal() {
        containers.forEach((container) => {
            const boxPosition = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (boxPosition < windowHeight - 50) {
                container.classList.add("show");
            }
        });
    }

    // Start from the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Apply reveal on scroll
    window.addEventListener("scroll", reveal);
    reveal();
});
