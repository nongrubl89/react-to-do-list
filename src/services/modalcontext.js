import React, { useState } from "react";

export const ModalContext = React.createContext([{}, () => {}]);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({});

  return (
    <ModalContext.Provider value={[modalState, setModalState]}>
      {children}
    </ModalContext.Provider>
  );
};
