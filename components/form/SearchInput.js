import React, { useRef } from "react";
import styles from "./SearchInput.module.css";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  const inputRef = useRef(null);
  const route = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = inputRef.current.value;
    console.log(inputData);
    route.push(`/products/search/${inputData}`);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        style={{ textAlign: "right", display: "flex", direction: "rtl" }}
      >
        <input
          className={styles.searchInput}
          placeholder="جستجو"
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          ref={inputRef}
        />
        <button className={styles.button}>
          {" "}
          <BsSearch />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
