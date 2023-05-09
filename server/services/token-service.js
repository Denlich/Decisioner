import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return jwt.sign(payload, "decisioner_jwtPrivateToken", { expiresIn: "24h" });
};
