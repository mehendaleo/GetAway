import { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateLocationForm from './CreateLocationForm';

const CreateLocationFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    const hideForm = () => setShowModal(false);

    return (
        <div className='create-host-parent'>
            <a onClick={() => setShowModal(true)} className='create-host'>
                Host
            </a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateLocationForm hideForm={hideForm}/>
                </Modal>
            )}
        </div>
    )
};

export default CreateLocationFormModal;
