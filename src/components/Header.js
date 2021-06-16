import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddTransaction from "./AddTransaction";

const Header = () => {
  const { modal, setModal, openModal, transactions } =
    useContext(GlobalContext);
  return (
    <>
      <div>
        <h2>Expense Tracker</h2>
        <section className="btn-add">
          {modal ? (
            <button className="btn-close" onClick={() => setModal(!modal)}>
              x
            </button>
          ) : (
            <button onClick={() => setModal(!modal)}>+</button>
          )}
        </section>
      </div>
      {modal && <AddTransaction />}
    </>
  );
};

export default Header;
