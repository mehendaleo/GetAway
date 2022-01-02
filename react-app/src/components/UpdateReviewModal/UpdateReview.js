import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {useState} from 'react';
import { updateReviewThunk } from '../../store/review';

const UpdateReview = ({hideForm, id}) => {
    const sessionUser = useSelector(state => state?.session?.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const location_id = useParams().location_id
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const review = {
            content,
            location_id,
            user_id: sessionUser.id,
            id
        }

        let data = await dispatch(updateReviewThunk(review));
        if (!data) {
            hideForm();
        } else {
            setErrors(data.errors )
        }
        // history.push(`/explore`)
    };

    return (
        <div className='create-review-box'>
            <form onSubmit={handleSubmit}>
                <div className='errors-container'>
                    {errors?.map((e,i) => (
                        <li key={i}>
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
                            required
                        />
                    </div>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateReview;
