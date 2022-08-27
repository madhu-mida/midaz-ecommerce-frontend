

export function calculateSubTotal(cart) {
    let sum = 0
    cart.map(element => {
        console.log("cartElement", element.price)
        sum += (element.price * element.quantity)
    })
    return sum;
}
