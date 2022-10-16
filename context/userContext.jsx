import { createContext, useReduce, useReducer } from "react";

export const UserContext = createContext();

const initial = {
  isLogin: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        isLogin: true,
        user: payload,
      };
    case "LOGOUT":
      return {
        isLogin: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useReducer(reducer, initial);

  return (
    <UserContext.Provider value={[auth, setAuth]}>
      {children}
    </UserContext.Provider>
  );
};
