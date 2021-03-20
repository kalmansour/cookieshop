import { useState } from "react";
import { useSelector } from "react-redux";

// Styling
import { ListWrapper } from "../../styles";

//Components
import CookieItem from "./CookieItem";
import SearchBar from "../search/SearchBar";

const CookieList = () => {
  const cookies = useSelector((state) => state.cookies.cookies);

  const [query, setQuery] = useState("");

  const filteredCookies = cookies.filter((cookie) =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  const cookieList = filteredCookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return (
    <>
      {/* <AddButton /> */}
      <SearchBar placeholder="search for cookie name" setQuery={setQuery} />
      <ListWrapper classname="row">{cookieList}</ListWrapper>
    </>
  );
};

export default CookieList;
