import { add_to_cart, remove_from_cart } from "../actionType/actionType";

const initState = {
    cart: [],
};

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case add_to_cart:
            return { ...state, cart:[...state.cart, action.payload] };
            case remove_from_cart:
                return{...state, cart:[...state, action.payload]}
        default:
            return state
    }
}