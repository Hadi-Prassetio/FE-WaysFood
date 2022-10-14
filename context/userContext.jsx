import { createContext, useReduce } from "react";

export const Usercontext = createContext();

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
  const [state, dispatch] = useReduce(initial, reducer);

  return (
    <Usercontext.Provider value={[state, dispatch]}>
      {children}
    </Usercontext.Provider>
  );
};
