import React from "react";
import { useLocalObservable } from "mobx-react";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    modalIsOpen: false,
    modalContent: "",
    openModal: () => (store.modalIsOpen = true),
    closeModal: () => (store.modalIsOpen = false),
    changeModalContent: (content) => (store.modalContent = content),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
