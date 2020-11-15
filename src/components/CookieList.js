import { useState } from "react";

// Styling
import { ListWrapper } from "../styles";

//Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const CookieList = ({ cookies, createCookie, deleteCookie }) => {
  const [query, setQuery] = useState("");

  const filteredCookies = cookies.filter((cookie) =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  const cookieList = filteredCookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} deleteCookie={deleteCookie} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton createCookie={createCookie} />
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default CookieList;
