import CardList from "@/components/CardList";
import { GetReq } from "@/repository/AxiosRepository";
import axios from "axios";
import React from "react";

const searchedValue = ({ datas }) => {
  console.log(datas);
  return (
    <div className={`${styles.outerContainer}`}>
      {datas.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  let datas = [];
  const amount = context.params.searchedValue;

  await GetReq(`products/search/${amount}`).then(
    (response) => (datas = response.data)
  );
  if (datas.length > 0) {
    return {
      props: { datas },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default searchedValue;
