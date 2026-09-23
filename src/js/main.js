const nav = document.querySelector('nav');
const links = [...nav.querySelectorAll('a')];
const headings = links.map(link => document.querySelector(link.hash));

function updatePosition() {
    nav.classList.toggle('compact', window.scrollY > 0);
    const navBottom = nav.getBoundingClientRect().bottom;
    let current = 0;

    headings.forEach((heading, index) => {
        if (heading.getBoundingClientRect().top - 100 <= navBottom + 1) current = index;
    });

    // The final section may be too short to reach the top of the viewport.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        current = links.length - 1;
    }

    links.forEach((link, index) => {
        if (index === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
}

window.addEventListener('scroll', updatePosition, { passive: true });
window.addEventListener('resize', updatePosition);
window.addEventListener('load', updatePosition);
updatePosition();

const carousel = document.querySelector('.carousel');
const slides = [...carousel.querySelectorAll('img')];
const slideCount = carousel.querySelector('.slide-count');
let currentSlide = 0;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.hidden = index !== currentSlide;
    });
    slideCount.textContent = `Photo ${currentSlide + 1} of ${slides.length}`;
}

carousel.querySelector('.previous').addEventListener('click', () => changeSlide(-1));
carousel.querySelector('.next').addEventListener('click', () => changeSlide(1));

const peopleModal = document.querySelector('#people-modal');
document.querySelector('.photo-preview').addEventListener('click', () => {
    peopleModal.showModal();
});

const pageUrl = encodeURIComponent(window.location.href.split('#')[0]);
document.querySelector('.share-facebook').href += `?u=${pageUrl}`;
document.querySelector('.share-linkedin').href += `?url=${pageUrl}`;
