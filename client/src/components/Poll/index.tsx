import { useState } from "react";
import Variant from "./Variant";

import styles from "./index.module.css";

const index = () => {
  const [isActive, setActive] = useState<string>();

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className={styles.poll}>
      <Variant isActive={isActive} setActive={handleClick} key={"123"} id={"1"}>
        Varinat 1
      </Variant>
      <Variant isActive={isActive} setActive={handleClick} key={"122"} id={"2"}>
        Varinat 2
      </Variant>
      <Variant isActive={isActive} setActive={handleClick} key={"133"} id={"3"}>
        Varinat 3
      </Variant>
    </div>
  );
};

export default index;
