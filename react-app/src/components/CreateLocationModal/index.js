import { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateLocationForm from './CreateLocationForm';

const CreateLocationFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    const hideForm = () => setShowModal(false);

    return (
        <div>
            <a onClick={() => setShowModal(true)}>
                Create a new location
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
