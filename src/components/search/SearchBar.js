// Styling
import { SearchBarStyled } from "../../styles";

const SearchBar = ({ setQuery, placeholder }) => {
  return (
    <SearchBarStyled
      placeholder={placeholder}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
