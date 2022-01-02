import {useState} from 'react';
import {Modal} from '../../context/modal';
import UpdateReview from './UpdateReview';

const UpdateReviewModal = ({id}) => {
    const [show, setShow] = useState(false);
    const hideForm = () => setShow(false);

    return (
        <>
            <button onClick={() => setShow(true)}>Update your review</button>
            {show && (
                <Modal onClose={() => setShow(false)}>
                    <UpdateReview hideForm={hideForm} id={id}/>
                </Modal>
            )}
        </>
    )
};

export default UpdateReviewModal;
