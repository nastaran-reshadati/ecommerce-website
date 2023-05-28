import React from "react";

const ShoppingCartSingleItem = ({ item }) => {
  console.log("hiiiiiiiii");
  console.log(item);
  return <div>{item.name}</div>;
};

export default ShoppingCartSingleItem;
