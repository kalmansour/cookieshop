import { useState } from "react";
import { observer } from "mobx-react";
import { useSelector } from "react-redux";

// Buttons
import AddBakeryButton from "./buttons/AddBakeryButton";

// Components
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";

// Stores
import authStore from "../stores/authStore";

// Styles
import { Title, ListWrapper } from "../styles";

const BakeryList = () => {
  const bakeries = useSelector((state) => state.bakeries);

  const [query, setQuery] = useState("");

  const bakeryList = bakeries
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
