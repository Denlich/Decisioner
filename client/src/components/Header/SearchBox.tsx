import { BsSearch } from "react-icons/bs";

import styles from "./index.module.css";

const SearchBox = () => {
  return (
    <form>
      <button className={styles.button} type="submit">
        <BsSearch />
      </button>
      <input type="search" placeholder="Search for the person or the poll" />
    </form>
  );
};

export default SearchBox;
