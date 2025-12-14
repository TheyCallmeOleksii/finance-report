import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !description) return;

    await addDoc(collection(db, "transactions"), {
      uid: auth.currentUser.uid,
      amount: Number(amount),
      description,
      createdAt: serverTimestamp(),
    });

    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="number"
        placeholder="Сума"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
}
