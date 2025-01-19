document.addEventListener("DOMContentLoaded", function () {
    const mobileHam = document.querySelector(".mobile-ham");
    const mobileHeadearHam = document.querySelector(".mobile-close");
    const mobileHeader = document.querySelector(".mobile-header");

    mobileHam.addEventListener("click", function () {
        mobileHeader.classList.add("active");
    });

    mobileHeadearHam.addEventListener("click", function () {
        mobileHeader.classList.remove("active");
    });
});
