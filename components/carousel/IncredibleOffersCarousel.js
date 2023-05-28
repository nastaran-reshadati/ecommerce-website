import React from "react";
import Carusel from "./Carusel";
import styles from "./IncredibleOffersCarousel.module.css";
import Image from "next/image";

const IncredibleOffersCarousel = ({ count, products }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.carouselContainer}`}>
        <Carusel products={products} cardCount={count} />
      </div>

      <div className={`${styles.imagesContainer}`}>
        <Image src="/images/amazingTypo.png" height={80} width={80} />
        <Image src="/images/box.png" height={80} width={80} />
      </div>
    </div>
  );
};

export default IncredibleOffersCarousel;
