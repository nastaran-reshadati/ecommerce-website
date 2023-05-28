import React from "react";
import styles from "./shoppingcart.module.css";
import ShoppingCartItems from "@/components/shoppingCart/ShoppingCartItems";
const shoppingcart = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.rightContainer}>
          <ShoppingCartItems />
        </div>
        <div className={styles.leftContainer}>fff</div>
      </div>
    </div>
  );
};

export default shoppingcart;
