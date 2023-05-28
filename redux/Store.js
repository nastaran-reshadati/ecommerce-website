import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartReducer from "./features/shoppingCart/ShoppingCartSlice";

export const Store = configureStore({
  reducer: {
    shoppingCart: ShoppingCartReducer,
  },
});
