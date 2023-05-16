import Header from "./Header";
import RedactingDetails from "./RedactingDetails";
import { ChangeEvent, FormEvent, useState } from "react";
import Variant from "../../entities/Variant";
import Button from "../../components/Button";
import VarinatComp from "./VariantComp";
import Text from "../../components/Text";
import APIClient from "../../services/api-client";
import { useNavigate } from "react-router-dom";

import styles from "../PollDetailsPage/index.module.css";
import main from "./index.module.css";

const apiClient = new APIClient<Variant>("/polls");

const index = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [subtitle, setSubtitle] = useState("");
  const handleSubtitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSubtitle(event.target.value);
  };

  const [variants, setVariant] = useState<Variant[]>([]);
  const handleClick = () => {
    if (variants.length < 10) {
      const newVariant: Variant = {
        text: "",
      };
      setVariant([...variants, newVariant]);
    }
  };

  const [error, setError] = useState("");
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (title.length > 50 || title.length < 1)
        throw new Error(
          "Title should be at least 1 and less than 50 characters"
        );
      if (subtitle.length > 50)
        throw new Error("Subitle should be at least 1less than 50 characters");
      if (variants.length < 2) {
        throw new Error("Poll must contain at least 2 varinats");
      }
      for (let i = 0; i < variants.length; i++) {
        if (variants[i].text.length > 50 || variants[i].text.length < 1) {
          throw new Error(
            "Varinats should be at least 1 and less than 50 characters"
          );
        }
      }
      await apiClient
        .create({
          title: title,
          subtitle: subtitle,
          variants: variants,
        })
        .then((res) => navigate(`/polls/${res._id}`));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <form className={main.grid} onSubmit={onSubmit}>
        <RedactingDetails heading="Title" max={50} current={title.length} />
        <input
          className={main.input}
          type="text"
          value={title}
          placeholder="Write title"
          onChange={handleTitle}
        />

        <RedactingDetails
          heading="Subtitle"
          max={500}
          current={subtitle.length}
        />
        <input
          className={main.input}
          type="text"
          value={subtitle}
          placeholder="Write short info"
          onChange={handleSubtitle}
        />

        <RedactingDetails
          heading="Variants"
          max={10}
          current={variants.length}
          onClick={handleClick}
        />
        {variants.map((variant, index) => (
          <VarinatComp
            text={variant.text}
            key={index}
            setVariant={(updatedVariants: Variant[]) =>
              setVariant(updatedVariants)
            }
            index={index}
          />
        ))}

        <div>
          <Button type="submit">Save</Button>
        </div>
      </form>

      {error && (
        <Text color="red" style={{ marginTop: "25px" }}>
          {error}
        </Text>
      )}
    </div>
  );
};

export default index;
