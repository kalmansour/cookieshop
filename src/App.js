import { useState } from "react";
import cookies from "./cookies";

// Styles
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

//Components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/ CookieDetail";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [cookie, setCookie] = useState(null);
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () => {
    if (cookie)
      return (
        <CookieDetail
          cookie={cookie}
          deleteCookie={deleteCookie}
          setCookie={setCookie}
        />
      );
    else
      return (
        <CookieList
          cookies={_cookies}
          deleteCookie={deleteCookie}
          setCookie={setCookie}
        />
      );
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
      {/* <CookieList onClick={toggleTheme} setCookie={setCookie} /> */}
      {/* <CookieDetail cookie={cookie} /> */}
      {setView()}
    </ThemeProvider>
  );
}

export default App;
