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