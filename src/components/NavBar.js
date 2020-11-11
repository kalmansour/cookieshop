import { Link } from "react-router-dom";

// styling
import { ThemeButton } from "./styles";
import lightLogo from "./light-logo.png";
import darkLogo from "./dark-logo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" href="#">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item" to="/cookies">
            Cookies
          </Link>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
