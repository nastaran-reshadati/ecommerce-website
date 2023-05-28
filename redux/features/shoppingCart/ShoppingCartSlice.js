import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [], totalCount: 0, totalAmount: 0 };

const recalculateTotals = (state) => {
  state.totalCount = 0;
  state.totalAmount = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalAmount +=
      item.priceWithDiscount === 0
        ? item.price * item.count
        : item.priceWithDiscount * item.count;
  });
  return state;
};
export const ShoppingCartSlice = createSlice({
  name: "ShoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    //اکشن ما هر چی بود  باید به استیت اضافه شود

    addItem: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      console.log(action.payload);
      console.log(state.items);
      return recalculateTotals(state);
    },
    increaseItemCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count += 1) };
        }
      });
      return recalculateTotals(state);
    },
    decreaseItemCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count -= 1) };
        }
      });
      return recalculateTotals(state);
    },
    removeItem: (state, action) => {
      state = {
        items: state.items.filter((item) => {
          item.id != action.payload;
        }),
      };
      return recalculateTotals(state);
    },
  },
});

export const { addItem, increaseItemCount, decreaseItemCount, removeItem } =
  ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;
