import { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

//Stores
// import cookieStore from "./stores/cookieStore";
import bakeryStore from "./stores/bakeryStore";
import cookieStore from "./stores/cookieStore";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {bakeryStore.loading || cookieStore.loading ? (
        <h1>Loadingggg</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
