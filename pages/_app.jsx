import { CartContextProvider } from "../context/cartContext";
import { UserContextProvider } from "../context/userContext";
import CheckAuth from "../context/checkAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

export default function MyApp({ Component, ...pageProps }) {
  const client = new QueryClient();
  return (
    <UserContextProvider>
      <CheckAuth>
        <QueryClientProvider client={client}>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </QueryClientProvider>
      </CheckAuth>
    </UserContextProvider>
  );
}
