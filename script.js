//let lastScrollTop = 0;//

const header = document.getElementById('header');
const hero = document.getElementById('hero');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = hero.offsetHeight;

    // Only start hiding if past hero
    if (currentScroll > heroHeight) {
        if (currentScroll > lastScrollTop) {
            // scrolling down
            header.classList.add("hidden");
        } else {
            // scrolling up
            header.classList.remove("hidden");
        }
    } else {
        // In hero section → always show header
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

if (hamburger) {
    hamburger.addEventListener('click', () => {
     nav.classList.add('active');   
    })
}

if (close) {
    close.addEventListener('click', () => {
     nav.classList.remove('active');  
    })
}