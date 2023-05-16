import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

import styles from "./index.module.css";

const index = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default index;
