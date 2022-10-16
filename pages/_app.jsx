import { CartContextProvider } from "../context/cartContext";
import "../styles/globals.css";
import App from "next/app";
import { UserContextProvider } from "../context/userContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;
