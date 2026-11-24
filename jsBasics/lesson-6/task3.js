const checkOrder = (available, ordered) => {
    if (ordered > available) {
        throw new Error ('Your order is too large, we don’t have enough goods.')
    }
    if (ordered === 0){
        throw new Error('Your order is empty')
    }
    return 'Your order is accepted'
}

try {
    console.log(checkOrder(25,39))
} catch (e){
    console.log(e.message)
}

try {
    console.log(checkOrder(10, 0))
} catch (e){
    console.log(e.message)
}

try {
    console.log(checkOrder(15, 5))
} catch (e) {
    console.log(e.message)
}