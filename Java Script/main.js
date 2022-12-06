// Button Scroll To Up
let up = document.querySelector(".drop-up");
addEventListener("scroll", scrollToTop)
function scrollToTop() {
    this.scrollY >= 600 ? up.style.left = "50px" : up.style.left = "-50px";
}
up.onclick =  () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}