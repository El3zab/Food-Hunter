// get section that contain form
let textForm = document.querySelectorAll(".form-text")
// get btn(book table) to add some functionality and inputs of book-form 
let formInput = document.querySelectorAll(".form-text form input")
let btnBook = document.querySelector(".form-text .btn button")

// after clicked btn show that table is booked
// but frist checked if form filled or not
btnBook.addEventListener("click", () => {
    if(Array.from(formInput).every((ele) => ele.value ? true:false)){
        textForm.forEach((item) => {
            item.innerHTML=""
            item.innerHTML = `
                <div class="table-booked">
                    <h2>Table booked</h2>
                </div>
            `
        })
    }else{
        alert("You Need To Fill Billing-pay");
        return;
    }
})
