import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import Text from "../Text";

import styles from "./index.module.css";

interface Props {
  children?: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
}

const InputBox = ({
  children,
  id,
  type,
  placeholder,
  register,
  errors,
}: Props) => {
  return (
    <div className={styles.inputBox}>
      <fieldset>
        <legend>
          <Text style={{ fontSize: "12px" }}>{children}</Text>
        </legend>
        <input {...register} id={id} type={type} placeholder={placeholder} />
      </fieldset>
      {errors[id] && (
        <Text color="red" style={{ fontSize: "12px" }}>
          {errors[id]?.message}
        </Text>
      )}
    </div>
  );
};

export default InputBox;
