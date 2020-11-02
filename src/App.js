// import cookies from "./cookies.js";
import React from "react";
import CookieList from "./components/CookieList";
import styles from "./styles";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}> CookiesnDream </h1>
        <h4 style={styles.slogan}>Cookies Beyond Your Wildest Dreams</h4>
        <img
          style={styles.shopImage}
          src="https://media.glassdoor.com/l/41/e9/34/0f/insomnia-16th-street.jpg"
          alt="Cookie Store"
        />
      </div>
      <h3 style={styles.itemsheader}>Choose Wisely</h3>
      <div styles={styles.body}>
        <div></div>
        <CookieList />
      </div>
    </div>
  );
}

export default App;
