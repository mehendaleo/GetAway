import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {useState} from 'react';
import { addReviewThunk } from '../../store/review';
import './createreview.css';

const CreateReview = ({hideForm}) => {
    const sessionUser = useSelector(state => state?.session?.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const location_id = useParams().location_id
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const [val, setVal] = useState(0);
    const [reviews, setReviews] = useState(useSelector(state => Object.values(state.review)))

    // const forceUpdate = () => {
    //     return () => setVal(val => val+1)
    // }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const review = {
            content,
            location_id,
            user_id: sessionUser.id
        }
        setErrors([]);
        let data = await dispatch(addReviewThunk(review));
        if (!data) {
            setReviews([...reviews, review])
            hideForm();
            // return history.push(`/explore`)
            // forceUpdate();

        } else {
            setErrors(data)
        }

    };

    return (
        <div className='create-review-grandparent'>
            <div>
                <div className='create-review-message'>
                    Leave a review!
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='create-error-container'>
                        {errors?.map((e,i) => (
                            <li key={i} className='create-error'>
                                {e}
                            </li>
                        ))}
                    </div>
                    <div className='create-div'>
                        <div>
                            <input
                                type='text'
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                placeholder='Leave a review'
                                className='create-location-input'
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateReview;
