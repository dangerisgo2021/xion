import React, { useContext } from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  loading: false,
  popupOpen: false,
  loginWithPopup: undefined,
  handleRedirectCallback: undefined,
  getIdTokenClaims: undefined,
  loginWithRedirect: undefined,
  getTokenSilently: undefined,
  getTokenWithPopup: undefined,
  logout: undefined,
});

export const useAuth = () => useContext(AuthContext);
