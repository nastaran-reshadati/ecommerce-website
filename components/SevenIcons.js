import Link from "next/link";
import styles from "./sevenIcons.module.css";
const SevenIcons = ({ data }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {data.map((item) => (
        <Link
          className={`${styles.link}`}
          href={`products/category/${item.url}`}
          key={item.id}
        >
          <div className={`${styles.itemContainer}`}>
            <img
              className={`${styles.img}`}
              src={`../images/${item.iconName}`}
              width="100%"
              height="50px"
            />
          </div>
          <label className={`${styles.label}`}>{item.label}</label>
        </Link>
      ))}
    </div>
  );
};

export default SevenIcons;
