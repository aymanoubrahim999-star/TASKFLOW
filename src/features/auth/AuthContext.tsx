<<<<<<< HEAD
import { createContext, useContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";
import { authReducer, initialState } from "./authReducer";
import type { AuthState, AuthAction } from "./authReducer";
import { setAuthToken } from "../../api/axios";

=======
// src/features/auth/AuthContext.tsx
import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import {
  authReducer,
  initialState,
} from "./authReducer";
import type { AuthAction, AuthState } from "./authReducer";
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}
<<<<<<< HEAD

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // nouveau : synchronise le token Axios à chaque changement
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

=======
const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
// Custom hook pour consommer le context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}
