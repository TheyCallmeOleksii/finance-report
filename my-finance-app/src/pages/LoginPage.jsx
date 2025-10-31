// src/pages/LoginPage.jsx
import { useEffect, useState } from "react";
import { loginWithGoogle, logout, watchUser } from "../firebase";

export default function LoginPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = watchUser((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💰 Money Tracker</h1>

      {user ? (
        <>
          <p style={styles.text}>Вітаю, {user.displayName}!</p>
          <img src={user.photoURL} alt="User" style={styles.avatar} />
          <button style={styles.btn} onClick={logout}>
            Вийти
          </button>
        </>
      ) : (
        <>
          <p style={styles.text}>Увійди, щоб розпочати відстеження витрат</p>
          <button style={styles.btn} onClick={loginWithGoogle}>
            Увійти через Google
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  text: {
    color: "#555",
    marginBottom: "1rem",
  },
  btn: {
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  avatar: {
    borderRadius: "50%",
    width: "80px",
    marginBottom: "1rem",
  },
};
