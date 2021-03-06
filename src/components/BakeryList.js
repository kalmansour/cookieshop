import { Title, ListWrapper } from "../styles";
import BakeryItem from "./BakeryItem";
import { observer } from "mobx-react";
import bakeryStore from "../stores/bakeryStore";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddBakeryButton from "./buttons/AddBakeryButton";
import authStore from "../stores/authStore";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);
  return (
    <div className="container">
      <Title>Bakeries</Title>
      {authStore.user && <AddBakeryButton />}
      <SearchBar
        placeholder="Search for a bakery name..."
        setQuery={setQuery}
      />
      <ListWrapper>{bakeryList}</ListWrapper>
    </div>
  );
};

export default observer(BakeryList);
