import axios from "axios";
import React, { useEffect, useState } from "react";
import server from "../configuration/Constants.json";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import * as AxiosRepository from "../repository/AxiosRepository";
import * as FetchRepository from "../repository/FetchRepository";

const TopBanner = () => {
  const [topBannerData, setTopBannerData] = useState({});
  useEffect(() => {
    AxiosRepository.GetReq("topBanner")
      .then((res) => setTopBannerData(res.data))
      .catch((err) => console.log(err));
    // axios.get(`${server.SERVER_ADDRESS}topBanner`)
    // FetchRepository.Get("public/mainSlider")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  }, []);


  return (
    <div className={styles.topBannerContainer}>
      <Image
        className={styles.topBannerImg}
        fill
        alt="Anon Shop"
        src={topBannerData.imageUrl}
      ></Image>
    </div>
  );
};

export default TopBanner;
