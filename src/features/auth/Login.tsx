<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { loginStart, loginSuccess, loginFailure } from "./authSlice";
import { setAuthToken } from "../../api/axios";
import api from "../../api/axios";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.auth,
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = (location.state as any)?.from || "/dashboard";

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user, navigate, from]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const { data: users } = await api.get(`/users?email=${email}`);
      if (users.length === 0 || users[0].password !== password) {
        dispatch(loginFailure("Email ou mot de passe incorrect"));
        return;
      }
      const { password: _, ...user } = users[0];
      const fakeToken = btoa(
        JSON.stringify({
          userId: user.id,
          email: user.email,
          role: "admin",
          exp: Date.now() + 3600000,
        }),
      );
      setAuthToken(fakeToken);
      dispatch(loginSuccess({ user, token: fakeToken }));
    } catch {
      dispatch(loginFailure("Erreur serveur"));
    }
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h1 className={styles.title}>TaskFlow</h1>
        <p className={styles.subtitle}>Connectez-vous pour continuer</p>
        {error && <div className={styles.error}>{error}</div>}
        <input
          type='email'
          placeholder='Email'
=======
// src/features/auth/Login.tsx
import { useState } from "react";
import { useAuth } from "./AuthContext";
import styles from "./Login.module.css";
export default function Login() {
  const { state, dispatch } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`http://localhost:4000/users?email=${email}`);
      const users = await res.json();
      if (users.length === 0 || users[0].password !== password) {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "Email ou mot de passe incorrect",
        });
        return;
      }
      const { password: _, ...user } = users[0];
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Erreur de connexion au serveur",
      });
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>TaskFlow</h1>
        <p className={styles.subtitle}>Connectez-vous pour continuer</p>
        {state.error && <div className={styles.error}>{state.error}</div>}
        <input
          type="email"
          placeholder="Email"
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
<<<<<<< HEAD
          type='password'
          placeholder='Mot de passe'
=======
          type="password"
          placeholder="Mot de passe"
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button
<<<<<<< HEAD
          type='submit'
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Connexion..." : "Se connecter"}
=======
          type="submit"
          className={styles.button}
          disabled={state.loading}
        >
          {state.loading ? "Connexion..." : "Se connecter"}
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
        </button>
      </form>
    </div>
  );
}
