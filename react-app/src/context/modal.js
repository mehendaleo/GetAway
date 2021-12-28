import React, { useContext, useEffect, useRef, useState, } from 'react';
import ReactDOM from 'react-dom';

const ModalContext = React.createContext();

export const ModalProvider = ({children}) => {
    const modalRef = useRef();
    const [val, setVal] = useState();

    useEffect(() => {
        setVal(modalRef.current);
    }, []);

    return (
        <>
            <ModalContext.Provider value={val}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef}/>
        </>
    );
};

export const Modal = ({onClose, children}) => {
    const node = useContext(ModalContext);
    if (!node) return null;

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose}></div>
            <div>
                {children}
            </div>
        </div>,
        node
    );
};
