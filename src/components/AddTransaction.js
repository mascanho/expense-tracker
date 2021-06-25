import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction, setModal } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (amount === "" || expenseType === "") {
      return alert("You can't add blank expenses");
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
      expenseType: expenseType,
    };

    addTransaction(newTransaction);
    setModal(false);
  };

  return (
    <>
      <div className="modal-container">
        <h3>Add new Transaction</h3>
        <form action="" onSubmit={onSubmitHandler}>
          <div className="form-control">
            <label htmlFor="expenses">Type:</label> <br />
            <select
              name="expenseType"
              onChange={(e) => setExpenseType(e.target.value)}
              value={expenseType}
            >
              <option value="Blank">Choose one...</option>
              <option value="Supermarket">Supermarket</option>
              <option value="Salary">Salary</option>
              <option value="Memberships">Memberships</option>
              <option value="Education">Education</option>
              <option value="Parking">Parking</option>
              <option value="Hospital">Hospital</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>
            <label htmlFor="">Notes:</label>
            <input
              type="text"
              max="20"
              maxLength="20"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="form-control">
              <label htmlFor="amount">amount (Expense (-) )</label>
              <input
                type="number"
                placeholder="enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button className="btn">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
