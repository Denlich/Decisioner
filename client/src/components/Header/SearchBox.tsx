import { BsSearch } from "react-icons/bs";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import usePollQueryStore from "../../stores/pollQueryStore";

const SearchBox = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = usePollQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
        navigate("/");
      }}
    >
      <button className={styles.button} type="submit">
        <BsSearch />
      </button>
      <input ref={searchRef} type="search" placeholder="Search for the poll" />
    </form>
  );
};

export default SearchBox;
