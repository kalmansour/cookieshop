import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

const Title = styled.h1`
  text-align: center;
  color: purple;
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
  border-color: #ffd700;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

const ItemsHeader = styled.h3`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: purple;
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
};
