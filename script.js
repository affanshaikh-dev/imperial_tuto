// navigation section -->
let navbar = document.querySelector(".navbar");
let navBtn = document.querySelector(".humberger");

navBtn.addEventListener('click', () => {
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    navbar.classList.remove("active")
}

// Counter Section -->
const counts = document.querySelectorAll(".count");
const speed = 50;

counts.forEach((counter) => {
    function upData() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText.replace('+', ''));
        const inc = (target - count) / speed; 

        if (count !== target) {
            counter.innerText = `${Math.ceil(count + inc)}+`;
            setTimeout(upData, 8);
        } else {
            counter.innerText = `${target}+`;
        }
    }
    upData();
});

new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    centerSlide: 'true',
    spaceBetween: 15,
    fade: 'true',
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
