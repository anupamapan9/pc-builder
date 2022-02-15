// price update function---------------------------
function totalCost() {
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const strogePrice = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const priceCalculation = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(strogePrice) + parseFloat(deliveryCost);
    console.log(priceCalculation);
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = priceCalculation;
}
// component button  click function-----------------
function pcComponentAdd(clickid, updatedId, price) {
    document.getElementById(clickid).addEventListener('click', function () {
        const memoryCost = document.getElementById(updatedId);
        memoryCost.innerText = price;
        totalCost();
    });

}
// memory ***
pcComponentAdd("eightGB", "memory-cost", 0);
pcComponentAdd("sixteenGB", "memory-cost", 200);

// ssd ***
pcComponentAdd("ssd1", "storage-cost", 0);
pcComponentAdd("ssd2", "storage-cost", 300);
pcComponentAdd("ssd3", "storage-cost", 400);


// delivery *****
pcComponentAdd("free-delivery", "delivery-cost", 0);
pcComponentAdd("paid-delivery", "delivery-cost", 40);

// coupon code ------------------------------------------------

const discountBtn = document.getElementById("apply-btn")
discountBtn.addEventListener("click", function () {
    const userInput = document.getElementById("promo-input").value;
    let coupon = 'wecan';
    if (userInput == coupon) {
        const price = document.getElementById("total-price");
        const discountPrice = parseFloat(price.innerText) * 0.2;
        const afterDiscountPrice = parseFloat(price.innerText) - discountPrice;
        price.innerText = afterDiscountPrice;
        discountBtn.setAttribute('disabled', true);
    } else {

    }
    countText.innerText = count;
})