import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "transactions"),
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "transactions", id));
  };

  if (transactions.length === 0) {
    return <p>Транзакцій поки немає</p>;
  }

  return (
    <ul style={{ marginTop: "1rem" }}>
      {transactions.map((t) => (
        <li
          key={t.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>
            {t.description}: {t.amount} грн
          </span>

          <button onClick={() => handleDelete(t.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
