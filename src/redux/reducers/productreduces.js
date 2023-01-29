import { add_to_cart, remove_from_cart } from "../actionType/actionType";

const initState = {
    cart: [],
};

export const productReducer = (state = initState, action) => {

    const selectProduct = state.cart.find(product => product._id === action.payload._id);

    switch (action.type) {
        case add_to_cart:
            if (selectProduct) {
                selectProduct.quantity = selectProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...state.cart]
                };
            }
            return {
                ...state,
                cart: [...state.cart,
                { ...action.payload, quantity: 1 }]
            };
        case remove_from_cart:
            if (selectProduct.quantity > 1) {
                selectProduct.quantity = selectProduct.quantity - 1
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state
    }
}