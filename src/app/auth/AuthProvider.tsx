import React, { useEffect, useState } from "react";
import { AuthContext } from "./useAuth";
import { auth0Config } from "./auth0Config";
import createAuth0Client from "@auth0/auth0-spa-js";
import { useDispatch } from "react-redux";
import { userReceived } from "./actions";

let _authClient = null;

const setAuthClient = (authClient) => {
  _authClient = authClient;
};
export const getAuthClient = () => _authClient;
const isClient = process.browser;
const onRedirectCallback = (appState) => {
  if (isClient) {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
};
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      // @ts-ignore
      const auth0FromHook = await createAuth0Client(auth0Config);
      setAuth0(auth0FromHook);
      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0().then(console.log).catch(console.error);
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };
  const logout = (...p) => auth0Client.logout(...p);

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  useEffect(() => {
    if (auth0Client) {
      setAuthClient({ ...auth0Client, loginWithPopup, logout });
    }
  }, [auth0Client]);
  useEffect(() => {
    if (user) {
      dispatch(userReceived(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {};
