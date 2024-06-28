//get item that stored in local-storage 
let eating = JSON.parse(localStorage.getItem("eating"));

// making a set for items to use map on it
// in order to use destructuring object on it to get info(name,price,img-src) to every item
const category = [...new Set(eating.map((item) => item))];
let visiblePart = document.querySelector("tbody");
visiblePart.innerHTML=category.map(item=>{
    var {img,title,price} = item ;
    let itemDisplay = `
        <tr>
            <td>
                <div class="item">
                    <img src="${img}" alt="">
                    <h3>${title}</h3>
                </div>
            </td>
            <td class="price">${price}</td>
            <td class="quntity">
                <input type="text" class="input" placeholder="NO-Item" value="1" required>
                <span class="btn-arrow">
                    <button>&#x2B9D;</button>
                    <button>&#11167;</button>
                </span>
            </td>
            <td class="item-total">${price}</td>
        </tr>
    `
    return(itemDisplay)
}).join('')

//get input(how many number from this item),btn that ctrl that no, total price of whole item afer and befor add shipping   
let inputNo = document.querySelectorAll(".input");
let btnNo = document.querySelectorAll(".btn-arrow button");
let cartSubtotal = document.getElementsByClassName("cart-total")[0];
let cartTotal = document.getElementsByClassName("cart-total")[1];

// func to update item price after chose quntity and the total price of whole items 
// save total price for paiing page using local storage   
let editTotal = (itemTotal, input, price) => {
    var totalPrice = +input * +price;
    itemTotal.innerHTML=totalPrice;
    let allItemPrice = document.querySelectorAll(".item-total");
    let sum = 0;
    for (let index = 0; index < allItemPrice.length; index++) {
        sum += +allItemPrice[index].innerText ;
    }
    cartSubtotal.innerHTML = sum;
    cartTotal.innerHTML = sum;
    localStorage.setItem('sum',JSON.stringify(sum));
}

// loop over btn ctrl item quntity to added some funcionality like update price and quntity no
btnNo.forEach(item => {
    item.addEventListener("click", (eo) => {
        let itemInputValue = eo.target.parentElement.parentElement.getElementsByClassName("input")[0].value;
        let itemInput = eo.target.parentElement.parentElement.getElementsByClassName("input")[0];
        eo.target.innerHTML == "⮝" ?  itemInput.value = +itemInputValue+1 : eo.target.innerHTML == "⮟" ? itemInput.value = +itemInputValue-1:"";
        let itemTotal = eo.target.parentElement.parentElement.parentElement.getElementsByClassName("item-total")[0];
        let input = eo.target.parentElement.parentElement.getElementsByClassName("input")[0].value;
        let price = eo.target.parentElement.parentElement.parentElement.getElementsByClassName("price")[0].innerText;
        editTotal(itemTotal, input, price);
    })
})

// loop over input ctrl item quntity by user to added some funcionality like update price and quntity no
inputNo.forEach(item => {
    priceInitial = item.parentElement.parentElement.getElementsByClassName("price")[0].innerText;
    editTotal(priceInitial, 1, priceInitial);
    item.addEventListener("input", (eo) => {
        let itemTotal = eo.target.parentElement.parentElement.getElementsByClassName("item-total")[0];
        let input = eo.target.value;
        let price = eo.target.parentElement.parentElement.getElementsByClassName("price")[0].innerText;
        editTotal(itemTotal, input, price);
    })
})


//get btn clear then if clicked remove items, prices and clear local-storage
let clear = document.querySelectorAll("tfoot button")[1];
clear.addEventListener("click", () => {
    visiblePart.remove();
    cartSubtotal.innerHTML = "";
    cartTotal.innerHTML = "";
    localStorage.clear();
})

