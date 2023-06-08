export const reducer = (state, { type, payload }) => {
  if (type === "CREATE_NEW_USER") {
    return { ...state, current_user: payload, userLogged: true };
  }
  if (type == "SIGN_OUT_USER") {
    return {
      ...state,
      current_user: "",
      userLogged: false,
      current_userDetails: {},
    };
  }

  if (type === "ADD_USER_DETAILS") {
    return { ...state, current_userDetails: payload };
  }

  throw new Error(`no ${type} is specified`);
};
