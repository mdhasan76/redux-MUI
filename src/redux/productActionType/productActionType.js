import { add_to_cart } from "../actionType/actionType"

export const addToCart = (product) =>{
    return {
        type: add_to_cart,
        payload: product
    }

}