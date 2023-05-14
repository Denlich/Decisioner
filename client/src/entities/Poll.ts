interface Varinats {
  text: string;
  votes: number;
}

export default interface Poll {
  _id: string;
  title: string;
  subtitle: string;
  vaiants: Varinats[];
  user_id: string;
  isAcitve: boolean;
  viewCount: number;
}
