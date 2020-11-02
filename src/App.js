import CookieList from "./components/CookieList";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ItemsHeader,
} from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#52280b", // main font color
  backgroundColor: "#f5fffa", // main background color
  pink: "#eea9b8",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>CookiesnDream</Title>
      <Description>Cookies Beyond Your Wildest Dreams</Description>
      <ShopImage
        src="https://media.glassdoor.com/l/41/e9/34/0f/insomnia-16th-street.jpg"
        alt="Cookie Store"
      />
      <ItemsHeader>Choose Wisely</ItemsHeader>
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
