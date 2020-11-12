import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";

// Styles
import { ThemeButton, NavStyled, Logo, NavItem } from "../styles";

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
            <NavItem className="nav-item" to="/cookies" style={{ padding: 10 }}>
              Cookies
            </NavItem>
          </li>
          <li className="nav-item">
            <ThemeButton className="nav-item" onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
