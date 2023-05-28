import React, { useState } from "react";
import { GetReq } from "../../../repository/AxiosRepository";
import CardList from "@/components/CardList";

const category = ({ data }) => {
  return (
    <div  style={{
      
      margin : '20px 0'
    }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop : '20px'
        }}
      >
        {data.map((item) => (
          <CardList product={item} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = [];
  const queries = context.query.category;
  await GetReq(`products/${queries}`).then((response) => {
    data = response.data;
  });
  console.log(data);
  //   /products/JameJahani
  if (data.length > 0) {
    return {
      props: { data },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default category;
