export const reducer = (state, { type, payload }) => {
  if (type === "CREATE_NEW_USER") {
    return { ...state, current_user: payload, userLogged: true };
  }
  if (type == "SIGN_OUT_USER") {
    return { ...state, current_user: "", userLogged: false };
  }

  return state;

  throw new Error(`no ${action.type} is specified`);
};
