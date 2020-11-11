import { useState } from "react";
import cookies from "./cookies";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
//Logo
import lightLogo from "./light-logo.png";
import darkLogo from "./dark-logo.png";

// Styles
import { GlobalStyle, theme, ThemeButton, Logo } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== cookieId);
    setCookies(updatedCookies);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          width="50"
          alt="logo"
        />
      </Logo>
      <Link
        className="nav-item"
        to="/cookies"
        style={{ margin: 10, float: "right" }}
      >
        Cookies
      </Link>
      <ThemeButton className="nav-item" onClick={props.toggleTheme}>
        {currentTheme === "light" ? "Light" : "Dark"} Mode
      </ThemeButton>
      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route path="/cookies">
          <CookieList cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
