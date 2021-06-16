import React, { createContext, useReducer, useEffect, useState } from "react";
import { AppReducer } from "./AppReducer";

const storedData = JSON.parse(localStorage.getItem("transactions"));

// Initial State
const initialState = {
  transactions: [...storedData],
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Provider COmponent
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [value, setValue] = useState(state);
  const [modal, setModal] = useState(false);

  console.log(value);

  const openModal = () => {
    setModal(true);
  };

  useEffect(() => {
    setValue(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        modal,
        setModal,
        openModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
