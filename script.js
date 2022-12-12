let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}

const faders = document.querySelectorAll('.fade-in');

const AppearOptions = {
    threshold : 1
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, AppearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})