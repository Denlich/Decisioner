import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "./Header";
import RedactingDetails from "./RedactingDetails";
import InputBox from "../../components/Forms/InputBox";

import styles from "../PollDetailsPage/index.module.css";
import redacting from "./index.module.css";
import { useState } from "react";
import IVariant from "../../entities/Variant";
import Variant from "../../components/Poll/Variant";

const variantSchema = z.object({
  id: z.string(),
  text: z.string().min(1).max(50),
});

const schema = z.object({
  title: z.string().min(1).max(50),
  subtitle: z.string().optional(),
  variants: z.array(variantSchema).min(2).max(10),
});

type FormData = z.infer<typeof schema>;

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [variants, setVariant] = useState<IVariant[]>([]);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className={styles.container}>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <RedactingDetails
          heading="Title"
          max={50}
          current={watch("title")?.length}
        />
        <InputBox
          placeholder="Type a title"
          id="title"
          type="text"
          register={register("title")}
          errors={errors}
        />
        <div className={redacting.pb25}>
          <RedactingDetails
            heading="Subtitle"
            max={500}
            current={watch("subtitle")?.length}
          />
          <InputBox
            placeholder="Write short info"
            id="subtitle"
            type="subtitle"
            register={register("subtitle")}
            errors={errors}
          />
        </div>
        <RedactingDetails
          heading="Variants"
          max={10}
          current={watch("variants")?.length}
        />
      </form>
    </div>
  );
};

export default index;
