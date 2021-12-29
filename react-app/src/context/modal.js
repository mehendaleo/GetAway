import React, { useContext, useEffect, useRef, useState, } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

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
        <div id='modal'>
            <div onClick={onClose} id='modal-background'></div>
            <div id='modal-content'>
                {children}
            </div>
        </div>,
        node
    );
};
