import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { Button } from "../../styles/Button";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { AddTransaction } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    AddTransaction(newTransaction);

    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add New transaction</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={event => setText(event.target.value)}
            type="text"
            placeholder="Enter text..."
            required
          />
        </div>
        <div>
          <label htmlFor="text">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={event => setAmount(event.target.value)}
            type="number"
            placeholder="Enter amount..."
            required
          />
        </div>
        <Button type="submit">Add Transaction</Button>
      </form>
    </>
  );
}

export default AddTransaction;
