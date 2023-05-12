import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Link to="/polls/1">PollDetails</Link>
    </>
  );
};

export default HomePage;
