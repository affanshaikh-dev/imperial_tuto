let navbar = document.querySelector(".navbar");
let navBtn = document.querySelector(".navBtn");

navBtn.addEventListener('click', () => {
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    navbar.classList.remove("active")
}