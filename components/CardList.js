import Image from "next/image";
import React from "react";
import styles from "./CardList.module.css";
import OutOfStock from "./shoppingCart/OutOfStock";
import { useSelector } from "react-redux";
import ManageProducts from "./ManageProducts";
import AddToCardBtn from "./shoppingCart/AddToCardBtn";

const CardList = ({ product }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.incredibleOfferImageContainer}`}>
        {product.incredibleOffers === true ? (
          <Image
            className={`${styles.incredibleOfferImage}`}
            alt={product.name}
            src="/images/IncredibleOffer.svg"
            width={200}
            height={15}
          />
        ) : null}
      </div>
      <p align="justify" className={`${styles.productName}`}>
        {" "}
        {product.name.substring(0, 25)}{" "}
        {product.name.length > 25 ? "..." : null}
      </p>

      <Image
        alt={product.name}
        src={product.indexImageUrl}
        width={200}
        height={200}
      />
      {product.priceWithDiscount === 0 ? (
        <div className={`${styles.priceContainer}`}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div>
              {product.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPrcent}`}>
            {Math.floor(
              ((product.price - product.priceWithDiscount) / product.price) *
                100
            )}
            %
          </label>
        </div>
      )}
      {shoppingCart.items.find((item) => item.id === product.id) ? (
        <ManageProducts productId={product.id} />
      ) : product.stock !== 0 ? (
        <AddToCardBtn product={product} />
      ) : (
        <OutOfStock>ناموجود</OutOfStock>
      )}

      {/* {shoppingCart.items.filter((item) => {
        (item.id === product.id).length > 0 ? (
          <h1>manage</h1>
        ) : product.stock !== 0 ? (
          <AddToCardBtn product={product} />
        ) : (
          <OutOfStock>ناموجود</OutOfStock>
        );
      })} */}
      {/* {
        product.stock !== 0 ? (
          <AddToCardBtn product={product} />
        ) : (
          <OutOfStock>ناموجود</OutOfStock>
        )
      } */}
      {/* <AddToCardBtn product={product} /> */}
    </div>
  );
};

export default CardList;
