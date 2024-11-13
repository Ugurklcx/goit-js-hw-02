console.log("------------TASK-1------------")
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = (quantity * pricePerDroid);
    if (totalPrice <= customerCredits) {
        console.log("You ordered " + quantity + " droids worth " + pricePerDroid + " credits!");
        return
    }
    else {
        console.log("Insufficient funds!");
        return
    }
}
makeTransaction(5, 3000, 23000)
makeTransaction(3, 1000, 15000)
makeTransaction(10, 5000, 8000)
makeTransaction(8, 2000, 10000)
makeTransaction(10, 500, 5000)
