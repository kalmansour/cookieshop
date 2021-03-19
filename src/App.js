import { useState } from "react";
// import { observer } from "mobx-react";
import instance from "./store/instance";

// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

//Stores
// import bakeryStore from "./stores/bakeryStore";
// import cookieStore from "./stores/cookieStore";

const fetchCookies = async () => {
  try {
    const response = await instance.get("/cookies");
    this.cookies = response.data;
  } catch (error) {
    console.log("CookieStore -> fetchCookies -> error", error);
  }
};

const fetchBakeries = async () => {
  try {
    const response = await instance.get("/bakeries");
    this.bakeries = response.data;
  } catch (error) {
    console.log("BakeryStore -> fetchBakeries -> error", error);
  }
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {/* {bakeryStore.loading || cookieStore.loading ? (
        <h1>Loadingggg</h1>
      ) : ( */}
      <Routes />
      {/* )} */}
    </ThemeProvider>
  );
}

fetchCookies();
fetchBakeries();
export default App;
