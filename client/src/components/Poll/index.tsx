import Variant from "./Variant";
import Varinat from "../../entities/Variant";

import styles from "./index.module.css";

interface Props {
  isActive?: string;
  handleClick?: (id: string) => void;
  variants: Varinat[];
  isResults?: boolean;
  results?: number;
}

const index = ({
  isActive,
  handleClick,
  variants,
  isResults,
  results,
}: Props) => {
  return (
    <div className={styles.poll}>
      {variants.map((variant, index) => (
        <Variant
          isActive={isActive}
          setActive={handleClick}
          id={variant._id!}
          key={index}
          votes={variant.votes}
          isResults={isResults}
          results={results}
        >
          {variant.text}
        </Variant>
      ))}
    </div>
  );
};

export default index;
