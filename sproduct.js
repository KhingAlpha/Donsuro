const header = document.getElementById('header');
const hero = document.getElementById('prodetails');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const prodetailsHeight = prodetails.offsetHeight;

    // Only start hiding if past hero
    if (currentScroll > prodetailsHeight) {
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

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}