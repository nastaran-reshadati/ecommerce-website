import {
  decreaseItemCount,
  increaseItemCount,
  removeItem,
} from "@/redux/features/shoppingCart/ShoppingCartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ManageProducts.module.css";
import { BsFillTrash3Fill } from "react-icons/bs";
const ManageProducts = ({ productId }) => {
  const basket = useSelector((state) => state.shoppingCart);

  console.log(basket.items.filter((item) => item.id === productId)[0].count);

  const dispatch = useDispatch();
  const count = basket.items.filter((item) => item.id === productId)[0].count;

  const decreaseHandler = () => {
    if (count === 1) {
      dispatch(removeItem(productId));
    } else {
      dispatch(decreaseItemCount(productId));
    }
  };
  return (
    <div className={styles.lableContainer}>
      <label onClick={() => dispatch(increaseItemCount(productId))}>+</label>
      <label className={styles.ShowAmountLable}>{count}</label>
      <label onClick={decreaseHandler}>
        {count === 1 ? <BsFillTrash3Fill /> : <span>-</span>}
      </label>
    </div>
  );
};

export default ManageProducts;
