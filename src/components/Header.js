import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddTransaction from "./AddTransaction";

const Header = () => {
  const { modal, setModal } = useContext(GlobalContext);
  return (
    <>
      <div>
        <h2>Expense Tracker</h2>
        <section className="btn-add">
          {modal ? (
            <button className="btn-close" onClick={() => setModal(!modal)}>
              X
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
