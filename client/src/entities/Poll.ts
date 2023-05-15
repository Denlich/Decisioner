import User from "./User";

interface Varinats {
  text: string;
  votes: number;
}

export default interface Poll {
  _id: string;
  title: string;
  subtitle: string;
  vaiants: Varinats[];
  user: User;
  isAcitve: boolean;
  viewsCount: number;
  createdAt: Date;
}
