/*const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active");
    })
}

navSlide();
*/

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var navLinks = document.querySelector(".nav-links-ver");

navLinks.style.transform = "translateX(101%)";

menu.onclick = function () {
    if (navLinks.style.transform == "translateX(101%)") {
        navLinks.style.transform = "translateX(0)";
        menu.src = "./Img/close.png";
    } else {
        navLinks.style.transform = "translateX(101%)";
        menu.src = "./Img/menu.png";
    }
};

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true
});


