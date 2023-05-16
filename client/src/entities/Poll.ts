import User from "./User";
import Variant from "./Variant";

export default interface Poll {
  _id: string;
  title: string;
  subtitle: string;
  variants: Variant[];
  user: User;
  isAcitve: boolean;
  viewsCount: number;
  createdAt: Date;
}
