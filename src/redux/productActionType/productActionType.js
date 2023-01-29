import { add_to_cart, remove_from_cart } from "../actionType/actionType"

export const addToCart = (product) =>{
    return {
        type: add_to_cart,
        payload: product
    }

}
export const removeFromCart = (product) =>{
    return {
        type: remove_from_cart,
        payload: product
    }

}