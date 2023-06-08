import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const initialState = {
    current_user: "",
    userLogged: false,
    current_userDetails: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function createUser(user) {
    dispatch({ type: "CREATE_NEW_USER", payload: user });
  }

  //sign put user
  const signout = () => {
    dispatch({ type: "SIGN_OUT_USER" });
  };

  const addUserDetails = (user) => {
    dispatch({ type: "ADD_USER_DETAILS", payload: user });
  };
  return (
    <GlobalContext.Provider
      value={{ ...state, createUser, signout, addUserDetails }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
