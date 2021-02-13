import { Component } from "react";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/main.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
