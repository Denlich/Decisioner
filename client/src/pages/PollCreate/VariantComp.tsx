import { BsPencil } from "react-icons/bs";
import Button from "../../components/Button";
import Variant from "../../entities/Variant";
import { ChangeEvent } from "react";
import Text from "../../components/Text";

import styles from "./index.module.css";

interface Props {
  text: string;
  setVariant: any;
  index: number;
}

const VarinatComp = ({ text, setVariant, index }: Props) => {
  const handleVariantTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setVariant((prevVariants: Variant[]) => {
      const updatedVariants = [...prevVariants];
      updatedVariants[index].text = newText;
      return updatedVariants;
    });
  };

  return (
    <div className={styles.variantRow}>
      <div className={styles.container}>
        <Button icon={BsPencil} bg="white" color="#0066F1" />
        <input
          className={styles.variantInput}
          type="text"
          value={text}
          placeholder="Write your variant"
          onChange={handleVariantTextChange}
        />
      </div>
      <Text color={text.length < 50 ? "grey" : "red"}>{text.length} / 50</Text>
    </div>
  );
};

export default VarinatComp;
