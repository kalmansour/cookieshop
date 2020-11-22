import { useState } from "react";
import { observer } from "mobx-react";

//Stores
import cookieStore from "../stores/cookieStore";

// Styling
import { ListWrapper } from "../styles";

//Components
import CookieItem from "./CookieItem";
import AddButton from "./buttons/AddButton";
import SearchBar from "./SearchBar";

const CookieList = () => {
  const [query, setQuery] = useState("");

  const filteredCookies = cookieStore.cookies.filter((cookie) =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  const cookieList = filteredCookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return (
    <>
      <AddButton />
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default observer(CookieList);
