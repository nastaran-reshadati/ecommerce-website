import React from "react";
import styles from "./AddToCardBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/shoppingCart/ShoppingCartSlice";

const AddToCardBtn = ({ product }) => {
  // console.log(product);
  // console.log(product.id);
  const dispatch = useDispatch();

  const buyHandler = () => {
    dispatch(addItem(product));
  };
  return (
    <div>
    {
      <label className={styles.lable} onClick={buyHandler}>
        افزودن
      </label>

    
    }
    </div>
  );
};

export default AddToCardBtn;
