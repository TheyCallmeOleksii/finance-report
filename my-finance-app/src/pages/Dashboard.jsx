import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Мій фінансовий звіт</h1>

      <button onClick={handleLogout}>Вийти</button>

      <hr />

      <TransactionForm />
      <TransactionList />
    </div>
  );
}
