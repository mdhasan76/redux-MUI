import { createStore } from "redux";
import { productReducer } from "./reducers/productreduces";

export const store = createStore(productReducer)