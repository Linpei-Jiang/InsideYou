// Getting the scroll Y value
window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        document.body.classList.add("header-fixed");
    } else {
        document.body.classList.remove("header-fixed");
    }
});
