import {useState} from 'react';
import {Modal} from '../../context/modal';
import CreateReview from './CreateReview';

const CreateReviewModal = () => {
    const [show, setShow] = useState(false);
    const hideForm = () => setShow(false);
    // const reload = () => window.location.reload();

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => setShow(true)} className='logout-button'>Leave a review</button>
            {show && (
                <Modal onClose={() => setShow(false)}>
                    <CreateReview hideForm={hideForm}/>
                </Modal>
            )}
        </>
    )
};

export default CreateReviewModal;
