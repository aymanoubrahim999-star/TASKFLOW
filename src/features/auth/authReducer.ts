<<<<<<< HEAD
=======
// src/features/auth/authReducer.ts
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
export interface User {
  id: string;
  email: string;
  name: string;
}
<<<<<<< HEAD

export interface AuthState {
  user: User | null;
  token: string | null; // nouveau champ pour stocker le token d'authentification
  loading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User & { token: string } }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

export const initialState: AuthState = {
  user: null,
  token: null, // NOUVEAU
  loading: false,
  error: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, token: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        token: action.payload.token, // nouveau
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return { user: null, token: null, loading: false, error: action.payload };
=======
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };
export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};
export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
