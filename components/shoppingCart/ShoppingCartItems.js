import React from "react";
import { useSelector } from "react-redux";
import ShowEmptyBasket from "./ShowEmptyBasket";
import ShoppingCartSingleItem from "./ShoppingCartSingleItem";

const ShoppingCartItems = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  if (shoppingCart.totalCount === 0) {
    return (
      <div>
        <ShowEmptyBasket />
      </div>
    );
  }

  return (
    <div>
      {shoppingCart.items.map((item) => {
        return <ShoppingCartSingleItem item={item} />;
      })}
    </div>
  );
};

export default ShoppingCartItems;
