import React from "react";
import TopBanner from "./TopBanner";
import SearchInput from "./form/SearchInput";
import { BsFillBasketFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <TopBanner />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <SearchInput />
        <Link href="/shoppingcart">
          <BsFillBasketFill
            style={{ color: "blue", fontSize: "24px", marginLeft: "40px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
