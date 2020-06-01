import React, { useContext } from "react";

export const AuthContext = React.createContext({user: null});

export const useAuth = () => useContext(AuthContext);
