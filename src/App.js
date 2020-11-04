import CookieList from "./components/CookieList";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  theme,
  ItemsHeader,
  ThemeButton,
} from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Light" : "Dark"} Mode
      </ThemeButton>
      <Title>CookiesnDream</Title>
      <Description>Cookies Beyond Your Wildest Dreams</Description>
      <ShopImage
        src="https://media.glassdoor.com/l/41/e9/34/0f/insomnia-16th-street.jpg"
        alt="Cookie Store"
      />
      <ItemsHeader>Choose Wisely</ItemsHeader>
      <CookieList onClick={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
