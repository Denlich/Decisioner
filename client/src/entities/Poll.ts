import User from "./User";
import Variant from "./Variant";

export default interface Poll {
  _id: string;
  title: string;
  subtitle: string;
  variants: Variant[];
  user: User;
  isActive: boolean;
  viewsCount: number;
  voted_users: string[];
  votes: number;
  createdAt: Date;
}
