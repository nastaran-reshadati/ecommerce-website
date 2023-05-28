import React from "react";
import styles from "./OutOfStock.module.css";
const OutOfStock = ({ children }) => {
  return (
    <div>
      <label className={styles.check}>{children}</label>
    </div>
  );
};

export default OutOfStock;
