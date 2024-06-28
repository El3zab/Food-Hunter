// get arrow to upforward  
let btn = document.querySelectorAll(".fixed-btn button");
// execute scrollFunction when scrolling
window.onscroll = () => scrollFunction();
// visible btn if scroll down 50px
let scrollFunction = () => {
    btn.forEach((item)=>{
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? item.style.display = "block" : item.style.display = "none";
    })
}
// initialize to top when click button
let topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
btn.forEach((e) => {
    e.addEventListener("click", topFunction)
})

// get toggle btn to control navbar visibility in 1100px of client-width
let toggler = document.querySelector("span.toggle");
let navUl = document.querySelector("nav ul");
let showUl = true;
toggler.addEventListener(("click"), () => {
    if (showUl) {
        navUl.style.display = "flex";
        toggler.innerHTML = "";
        toggler.innerHTML = "close";
        showUl = !showUl;
    } else {
        navUl.style.display = "none";
        toggler.innerHTML = "";
        toggler.innerHTML = "menu";
        showUl = !showUl;
    }
})