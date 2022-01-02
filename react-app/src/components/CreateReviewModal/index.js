import {useState} from 'react';
import {Modal} from '../../context/modal';
import CreateReview from './CreateReview';

const CreateReviewModal = () => {
    const [show, setShow] = useState(false);
    const hideForm = () => setShow(false);
    // const reload = () => window.location.reload();

    return (
        <>
            <button onClick={() => setShow(true)}>Leave a review</button>
            {show && (
                <Modal onClose={() => setShow(false)}>
                    <CreateReview hideForm={hideForm}/>
                </Modal>
            )}
        </>
    )
};

export default CreateReviewModal;
