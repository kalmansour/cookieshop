import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Background and Theme Styles
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;
export const theme = {
  light: {
    mainColor: "mediumpurple", // main font color
    backgroundColor: "#f5fffa", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#f5fffa", // main font color
    backgroundColor: "mediumpurple", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
};

//Bakery Styles
export const BakeryItemStyled = styled.div`
  margin: 20px;
  margin: 20px;

  img {
    width: 20em;
    height: 200px;
    object-fit: cover;
    border: thick solid;
    border-color: ${({ theme }) => theme.mainColor};
  }

  h4 {
    text-align: center;
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

//NavBar Styles

export const UsernameStyled = styled.p`
  padding: 0.25 em 1 em;
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.mainColor};

  &.active {
    background-color: pink;
  }
`;

// CookieDetail Component Styles
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

//Buttons Component Styles
export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;

export const DeleteButtonStyled = styled.p`
  color: ${({ theme }) => theme.red};
`;

export const GoBackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
`;

//Home Component Styles
export const Title = styled.h1`
  text-align: center;
  background-color: #f2e596;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Description = styled.h4`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  /* padding-bottom: 10px; */
  border: thick solid;
  border-color: ${(props) => props.theme.mainColor};
`;

//BakeryList && CookieList Styles
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

//CookieItems Component Styles
export const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: thick solid;
    border-color: ${({ theme }) => theme.mainColor};
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${({ theme }) => theme.pink};
    }
  }
`;

// SearchBar Component Styles
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

// export {
//   GlobalStyle,
//   Title,
//   Description,
//   ShopImage,
//   ListWrapper,
//   CookieWrapper,
//   theme,
//   ThemeButton,
//   SearchBarStyled,
//   DetailWrapper,
//   GoBackButton,
// };
