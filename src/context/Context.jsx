import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const initialState = { current_user: "", userLogged: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  function createUser(user) {
    dispatch({ type: "CREATE_NEW_USER", payload: user });
  }

  //sign put user
  const signout = () => {
    dispatch({ type: "SIGN_OUT_USER" });
  };
  return (
    <GlobalContext.Provider value={{ ...state, createUser, signout }}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
