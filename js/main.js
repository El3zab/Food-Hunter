// get menu navbar to control after element 
var menuNav = document.querySelectorAll(".menu-body ul li");
// make a func that loop to the navbar elements of menu then execute
let hover = (array, no) => {
    array.forEach((item) => {
        item.addEventListener("click", (eo) => {
            let oldActive = document.getElementsByClassName("active")[no];
            oldActive.classList.remove("active");
            eo.target.classList.add("active");
        });
    });

}
hover(menuNav, 1);


let slideIndex = 0;
//(only execute when width of clint-width is greater or equal to 1200px)
let controlWidth = window.innerWidth >= 1200 ? showSlides() : "";
//func that loop over box of element to control visibility 
function showSlides() {
    let slides = document.querySelectorAll(".contain-rate-word");
    let dots = document.querySelectorAll(".dot");
    slides.forEach((e) => {
        e.style.display = "none";
    })
    slideIndex++;
    slideIndex > slides.length ? slideIndex = 1 : "";
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
    dots.forEach(item => {
        item.className = item.className.replace("active", "")
    });
    dots[slideIndex - 1].className += " active";
}


let index = 1;
showSlidesNo(index); //execute the func with index parameter for initialization visible
//only execute when width of clint-width is greater or equal to 1200px (there is no btn to do that)
// loop over slides to control visiblity
function showSlidesNo(n) {
    let slides = document.querySelectorAll(".contain-rate-word");
    let dots = document.querySelectorAll(".dot");
    n > slides.length ? index = 1 : "";
    n < 1 ? index = slides.length : "";
    slides.forEach((e) => {
        e.style.display = "none";
    })
    slides[index - 1].style.display = "block";
    dots.forEach(item => {
        item.className = item.className.replace("active", "")
    });
    dots[index - 1].className += " active";
}
//two-btn control slidshow and execute the func
function plusSlides(n) {
    showSlidesNo(index += n);
}
//dots control slideshow and execute the func
function currentSlide(n) {
    showSlidesNo(index = n);
}



// func to implement IntersectionObserver API to know ever user reache to boxes or not then exec animation
let getObserve = (e) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                e.style.animation = "fadeInUp 2s 0.5s ease-out forwards";
                observer.unobserve(e); // Stop observing once the animation has been triggered
            }
        });
    });
    observer.observe(e);
}
//loop over boxes elaments to add some animation using IntersectionObserver API func
document.addEventListener('DOMContentLoaded', () => {
    const boxR = document.querySelectorAll('.visibility-right');
    const boxL = document.querySelectorAll('.visibility-left');
    boxR.forEach((e) => {
        getObserve(e);
    })
    boxL.forEach((e) => {
        getObserve(e);
    })
});

