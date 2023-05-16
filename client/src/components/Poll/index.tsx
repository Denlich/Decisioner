import { useState } from "react";
import Variant from "./Variant";
import Varinat from "../../entities/Variant";

import styles from "./index.module.css";

interface Props {
  variants: Varinat[];
}

const index = ({ variants }: Props) => {
  const [isActive, setActive] = useState<string>();

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className={styles.poll}>
      {variants.map((variant, index) => (
        <Variant
          isActive={isActive}
          setActive={handleClick}
          id={variant._id}
          key={index}
        >
          {variant.text}
        </Variant>
      ))}
    </div>
  );
};

export default index;
