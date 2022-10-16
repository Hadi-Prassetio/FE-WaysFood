import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CartContextProvider } from "../context/cartContext";
import { UserContext, UserContextProvider } from "../context/userContext";
import "../styles/globals.css";

export default function MyApp({ Component, ...pageProps }) {
  // const router = useRouter();
  // const [auth, setAuth] = useContext(UserContext);

  // useEffect(() => {
  //   if (!auth.isLogin) {
  //     router.push("/");
  //   } else {
  //     if (auth.user.status === "partner") {
  //       router.push("/income-transaction");
  //     } else if (auth.user.status === "user") {
  //       router.push("/");
  //     }
  //   }
  // }, []);

  return (
    <UserContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </UserContextProvider>
  );
}
