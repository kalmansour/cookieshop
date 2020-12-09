import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { observer } from "mobx-react";

//Components
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";

// Styles
import {
  ThemeButton,
  NavStyled,
  Logo,
  NavItem,
  UsernameStyled,
} from "../styles";
import authStore from "../stores/authStore";
import { FiLogOut } from "react-icons/fi";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/" href="#">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
          width="50"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavItem
              className="nav-item"
              to="/bakeries"
              style={{ padding: 10 }}
            >
              Bakeries
            </NavItem>
          </li>
          <li className="nav-item active">
            <NavItem className="nav-item" to="/cookies" style={{ padding: 10 }}>
              Cookies
            </NavItem>
          </li>
          <li className="nav-item">
            {authStore.user ? (
              <>
                <UsernameStyled>
                  Bonjour {authStore.user.username}
                </UsernameStyled>
                <FiLogOut onClick={authStore.signout} size="2em" color="red" />
              </>
            ) : (
              <>
                <SignupButton />
                <SigninButton />
              </>
            )}

            <ThemeButton className="nav-item" onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
