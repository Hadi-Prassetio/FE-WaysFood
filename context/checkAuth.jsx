import { UserContext } from "./userContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { API, SetAuthToken } from "../pages/api/api";

export default function CheckAuth({ children }) {
  const [auth, setAuth] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.token) {
      SetAuthToken(localStorage.token);
    }
    if (!auth.isLogin) {
      router.push("/");
    } else {
      if (auth.role === "partner") {
        router.push("/income-transaction");
      } else if (auth.role === "customer") {
        router.push("/");
      }
    }
  }, [auth]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      if (response.status === 404) {
        return setAuth({
          type: "AUTH_ERROR",
        });
      }
      let payload = response.data.data;
      payload.token = localStorage.token;
      setAuth({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return <div>{children}</div>;
}
