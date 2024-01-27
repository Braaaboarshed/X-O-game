import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState("winner"); // start || winner

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <ModalContext.Provider
      value={{
        show,
         mode,
        showModal,
        hideModal,
        setModalMode: setMode,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalState };