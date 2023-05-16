import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default index;
