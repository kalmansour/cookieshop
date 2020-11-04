import styled, { createGlobalStyle } from "styled-components";

const theme = {
  light: {
    mainColor: "mediumpurple", // main font color
    backgroundColor: "#f5fffa", // main background color
    pink: "#eea9b8",
  },
  dark: {
    mainColor: "#f5fffa", // main font color
    backgroundColor: "mediumpurple", // main background color
    pink: "#eea9b8",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
`;

const Title = styled.h1`
  text-align: center;
  /* color: purple; */
  background-color: #f2e596;
  font-family: Arial, Helvetica, sans-serif;
`;

const Description = styled.h4`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  border: thick solid;
  border-color: ${(props) => props.theme.mainColor};
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: thick solid;
    border-color: ${(props) => props.theme.mainColor};
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

const ItemsHeader = styled.h2`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  /* color: purple; */
  background-color: #f2e596;
`;

export {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ListWrapper,
  CookieWrapper,
  ItemsHeader,
  theme,
  ThemeButton,
};
