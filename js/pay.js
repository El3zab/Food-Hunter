//get item that stored in local-storage 
let eating = JSON.parse(localStorage.getItem("eating"));

// making a set for items to use map on it
// in order to use destructuring object on it to get info(name,price,img-src) to every item
const category = [...new Set(eating.map((item) => item))]
let itemPay = document.querySelector(".item-pay");
itemPay.innerHTML=category.map(item=>{
    var {img,title,price} = item ;
    return(
        `
        <div class="item-pay-line">
            <div>
                <img src="${img}" alt="" />
                <span>${title}</span>
            </div>
            <span>$${price}</span>
        </div>
        `
    )
}).join('')

//get total price of whole item afer and befor add shipping   
let cartSubtotal = document.getElementsByClassName("cart-total")[0];
let cartTotal = document.getElementsByClassName("cart-total")[1];

//get sum (total-price of whole items) that stored in local-storage 
let total = localStorage.getItem('sum');
// display sum in page
cartSubtotal.innerText = total;
cartTotal.innerText = total;

// get btn(place order) to add some functionality and input of billing-form
let placeOrder = document.querySelector(".cart-info form:last-child button:last-child");
let billingInput = document.querySelectorAll(".book>form input");

// after clicked btn remove prie,items,clear local-storage 
// but frist checked if form filled or not
placeOrder.addEventListener("click", ()=> {
    if(Array.from(billingInput).every((ele) => ele.value ? true:false)){
        itemPay.innerHTML=`
            <div class="order-placed">
                <h2>Order Placed</h2>
            </div>
        `
        cartSubtotal.innerHTML = "";
        cartTotal.innerHTML = "";
        localStorage.clear();
        billingInput.forEach((e)=> {
            e.value = "";
        })
    }else{
        alert("You Need To Fill Billing-pay");
    }
})
