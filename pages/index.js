import { Context } from "@/context";
import * as FetchRepository from "../repository/FetchRepository";
import MainSlider from "../components/MainSlider";
import SevenIcons from "@/components/SevenIcons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Get } from "../repository/FetchRepository";
import { GetReq } from "@/repository/AxiosRepository";
import CardList from "@/components/CardList";
import Carusel from "@/components/carousel/Carusel";
import IncredibleOffersCarousel from "@/components/carousel/IncredibleOffersCarousel";

export default function Home({ sliderImages, sevenIcons, incredibleOffer }) {
  console.log(incredibleOffer);
  return (
    <Context.Provider value={{ mainSliderImages: sliderImages }}>
      <MainSlider />
      <SevenIcons data={sevenIcons} />
      <IncredibleOffersCarousel count={5} products={incredibleOffer} />
    </Context.Provider>
  );
}

export async function getStaticProps(context) {
  const imageResponse = await FetchRepository.Get("public/mainSlider");
  const sliderImages = await imageResponse.json();

  const sevenIconResponse = await FetchRepository.Get("SevenIcons");
  const sevenIcons = await sevenIconResponse.json();

  const incredibleOffersResponse = await Get(
    "products/incredibleOffers"
  );
  const incredibleOffer = await incredibleOffersResponse.json();
  // const incredibleOffersResponse = await GetReq(
  //   "products/incredibleOffers"
  // ).then((response) => (incredibleOffer = response.data));

  return {
    props: {
      sliderImages,
      sevenIcons,
      incredibleOffer,
    },
    revalidate: 600,
  };
}
