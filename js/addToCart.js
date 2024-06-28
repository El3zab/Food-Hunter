//get btn of coffe & restaurant and menu navbar due to every chang in them
var btns = document.querySelectorAll(".btns button");
var menuNav = document.querySelectorAll(".menu-body ul li");

// func to update items every change in page
let func = () => {
    //get btn (+) from every item of menu
    let itemAddBtns = document.querySelectorAll('.menu-contain div button');
    //array to push img-src, title, price from item that clicked to add in cart
    //in order to send it to another page using local-storage api
    let eating = [];
    //loop over item btn then get parent(item) to get info about clicked item then save to local-storage memory
    itemAddBtns.forEach(item => {
        item.addEventListener("click", (eo) => {
            let img = eo.target.parentElement.parentElement.getElementsByTagName("img")[0].src;
            let title = eo.target.parentElement.parentElement.getElementsByTagName("h3")[0].innerText;
            let price = Number(eo.target.parentElement.querySelectorAll("span")[0].innerText.replace("$", ""));
            localStorage.clear();
            eating.push({ img, title, price });
            localStorage.setItem('eating', JSON.stringify(eating));
            //display a pop-up to inform user that item add to cart
            let popUP = document.querySelectorAll('.pop-up');
            popUP.forEach((e) => {
                e.style.display = "block";
                setTimeout(() => {
                    e.style.display = "none";
                }, 1500);
            })
        })

    });
}

// initiall call of func 
func();

// loop in btn of coffe & restaurant to update funcwhen clicked
btns.forEach(item => {
    item.addEventListener("click", () => {
        func();
    })
})

// loop menu navbar element to update funcwhen clicked
menuNav.forEach(item => {
    item.addEventListener("click", () => {
        func();
    });
});
