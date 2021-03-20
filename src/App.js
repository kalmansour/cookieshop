import { useState } from "react";
import instance from "./store/actions/instance";
// import { useSelector } from "react-redux";

// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import Routes from "./components/navigation/Routes";
import NavBar from "./components/navigation/NavBar";

const fetchCookies = async () => {
  try {
    await instance.get("/cookies");
    // const response = await instance.get("/cookies");
    // this.cookies = response.data;
  } catch (error) {
    console.log("CookieStore -> fetchCookies -> error", error);
  }
};

const fetchBakeries = async () => {
  try {
    await instance.get("/bakeries");
    // const response = await instance.get("/bakeries");
    // this.bakeries = response.data;
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
