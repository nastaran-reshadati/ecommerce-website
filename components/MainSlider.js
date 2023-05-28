import React, { useContext } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Context } from "@/context";
import ReactImageGallery from "react-image-gallery";
import Router from "next/router";

const MainSlider = () => {
  const { mainSliderImages } = useContext(Context);
console.log(mainSliderImages);
  return (
    <div>
      <ReactImageGallery
        key={mainSliderImages.id}
        id={mainSliderImages.id}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        items={mainSliderImages}
        isRTL={true}
        lazyLoad={true}
        useTranslate3D={true}
        slideInterval={3000}
        onClick={() => {
          Router.push("/singlePage");
        }}
      />
    </div>
  );
};

export default MainSlider;
