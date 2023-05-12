import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const SearchBox = () => {
  return (
    <form>
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input type="search" placeholder="Search for the person or the poll" />
    </form>
  );
};

export default SearchBox;
