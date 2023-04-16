import React from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
    const {isModal, closeModal} = useGlobalContext();

    return (
        <div className={isModal ? "modal-overlay show-modal" : "modal-overlay"}>
            <div className='modal-container'>
                <h3>modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <FaTimes/>
                </button>
            </div>
        </div>
    )
}

export default Modal