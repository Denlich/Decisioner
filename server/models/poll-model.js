import { Schema, model } from "mongoose";

const variantSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  variants: {
    type: [variantSchema],
    validate: {
      validator: (v) => {
        return v.length > 1 && v.length <= 10;
      },
      message: "Min amount of variants - 2, max - 10",
    },
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  voted_users: {
    type: [Schema.Types.ObjectId],
    defaul: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default model("Poll", pollSchema);
