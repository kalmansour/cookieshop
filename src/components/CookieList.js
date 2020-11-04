import cookies from "../cookies";

//Components
import CookieItem from "./CookieItems";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";
import { useState } from "react";

const CookieList = () => {
  const [query, setQuery] = useState("");

  const filteredCookies = cookies.filter((cookie) =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  const cookieList = filteredCookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default CookieList;
