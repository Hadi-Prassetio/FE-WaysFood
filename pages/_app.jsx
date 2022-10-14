import { CartContextProvider } from "../context/cartContext";
import "../styles/globals.css";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    );
  }
}

export default MyApp;
