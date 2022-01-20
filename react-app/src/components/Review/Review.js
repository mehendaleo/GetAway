import { useSelector, useDispatch } from 'react-redux';
import UpdateReviewModal from '../UpdateReviewModal';
import { deleteReviewThunk } from '../../store/review';

const Review = ({review}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleDeleteReview = (id) => {
        dispatch(deleteReviewThunk(id));
        // history.push('/')
    }


    return (
        <div className='single-location-review'>
            <div className='review-info'>
                <img src={review?.user?.propic_url} className='review-info-pic'/>
                <span className='review-info-content'>{`${review?.user?.first_name} ${review?.user?.last_name}`}</span>
                {review?.user?.id === sessionUser.id ? <span><UpdateReviewModal id={review.id}/></span> : null}
                {review?.user?.id === sessionUser.id ? <span><button className='single-location-delete' onClick={() => handleDeleteReview(review.id)}>Delete Review</button></span> : null}
            </div>
            <div className='review-content'>
                {review?.content}
            </div>
        </div>
    )

}

export default Review;
