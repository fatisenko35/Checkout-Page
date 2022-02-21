const quantityController = document.getElementsByClassName("quantity-controller");
const faPlus = document.querySelectorAll(".fa-plus");
const faMinus = document.querySelectorAll(".fa-minus");
const productQuantity = document.querySelectorAll("#product-quantity");
const productPrice = document.querySelectorAll(".product-line-price");
const subTotal = document.getElementById("cart-subtotal");
const tax = document.getElementById("cart-tax");
const cartTotal = document.getElementById("cart-total");
const productPrice2 = document.querySelectorAll(".product-price");
const productContainer = document.querySelector(".product")
const removeButton = document.querySelectorAll(".remove-product");


for (let i = 0; i < quantityController.length; i++) {
    quantityController[i].children[2].addEventListener("click", () => {
        quantityController[i].children[0].disabled = false;

        var tempPrice = +productPrice2[i].children[0].children[0].innerHTML;
        tempPrice2 = Math.round(tempPrice);

        productQuantity[i].innerHTML = +productQuantity[i].innerHTML + 1;
        productPrice[i].innerHTML = +tempPrice2 * +productQuantity[i].innerHTML;

        let tempTotal = tempPrice2 * +productQuantity[i].innerHTML;
        tempTotal2 = Math.round(tempTotal);

        subTotal.children[1].innerHTML = +subTotal.children[1].innerHTML + tempPrice2;

        let totalAmount = +subTotal.children[1].innerHTML;
        totalAmount2 = totalAmount;
        totalf();


    });
};
for (let i = 0; i < quantityController.length; i++) {
    quantityController[i].children[0].addEventListener("click", () => {
        if (productQuantity[i].innerHTML == 1) {
            quantityController[i].children[0].disabled = true;
        }
        tempPrice = +productPrice2[i].children[0].children[0].innerHTML;
        tempPrice2 = Math.round(tempPrice);

        productQuantity[i].innerHTML == 1 ? productQuantity[i].innerHTML = 1 : productQuantity[i].innerHTML = +productQuantity[i].innerHTML - 1;

        productPrice[i].innerHTML = +tempPrice2 * +productQuantity[i].innerHTML;
        tempTotal = Math.round(productPrice[i].innerHTML);

        if (!quantityController[i].children[0].disabled) {

            subTotal.children[1].innerHTML -= tempPrice2;
            let totalAmount = +subTotal.children[1].innerHTML;
            totalAmount2 = totalAmount;
        }
        tempPrice = 0;
        totalf()

    });
}
removeButton.forEach(el => {
    console.log(el.parentElement.parentElement.children[2].children[1].innerHTML);
    console.log(el.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0].innerHTML);
    el.addEventListener("click",()=>{
    el.parentElement.parentElement.parentElement.style.display = "none"
    subTotal.children[1].innerHTML = Math.round(+subTotal.children[1].innerHTML - (+el.parentElement.parentElement.children[2].children[1].innerHTML * +el.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0].innerHTML));
    totalAmount2 = +subTotal.children[1].innerHTML
    totalf()
});
});



function totalf() {
    tax.children[1].innerHTML = Math.round(totalAmount2 * 0.18);
    taxTotal = +tax.children[1].innerHTML;
    let Total = 0;
    Total = totalAmount2 + taxTotal + 15;
    cartTotal.children[1].innerHTML = Total
};