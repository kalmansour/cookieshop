import { useState } from "react";
import { observer } from "mobx-react";

// Styling
import { ListWrapper } from "../styles";

//Components
import CookieItem from "./CookieItem";
// import AddButton from "./buttons/AddButton";
import SearchBar from "./SearchBar";

const CookieList = ({ cookies = [] }) => {
  const [query, setQuery] = useState("");

  console.log(cookies);

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
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default observer(CookieList);
