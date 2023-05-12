import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>HomePage</div>
      <Link to="/polls/1">PollDetails</Link>
    </>
  );
};

export default HomePage;
