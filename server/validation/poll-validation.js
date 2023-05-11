import { body } from "express-validator";

export const pollValidation = [
  body("title", "Min length 1 chracter, max - 50")
    .isString()
    .isLength({ min: 1, max: 50 }),
  body("subtitle", "Max length 500 characters")
    .optional()
    .isString()
    .isLength({ max: 500 }),
  body("varinats", "Min amount of variants - 2").isArray({ min: 2, max: 10 }),
  body("variants.*.text").isString().isLength({ min: 1, max: 50 }),
];
