import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

import styles from "./index.module.css";
import colours from "../../colours";

const index = () => {
  return (
    <div style={{ marginInline: "50px" }}>
      <Header />
      <div className={styles.main} style={{ background: colours.lightGrey }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default index;
