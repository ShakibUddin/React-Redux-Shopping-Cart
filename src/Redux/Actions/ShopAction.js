export function addToCart(payload) {
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export function increaseProduct(payload) {
    return {
        type: "INCREASE_PRODUCT",
        payload
    }
}

export function decreaseProduct(payload) {
    return {
        type: "DECREASE_PRODUCT",
        payload
    }
}

export function clearCart() {
    return {
        type: "CLEAR_CART"
    }
}