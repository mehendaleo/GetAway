import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './createlocation.css';
// thunk import
import { createLocationThunk } from '../../store/location';


const CreateLocationForm = ({ hideForm }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [amenities, setAmenities] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageurl1, setImageUrl1] = useState('');
    const [imageurl2, setImageUrl2] = useState('');
    const [imageurl3, setImageUrl3] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newLocation = {
            user_id: sessionUser.id,
            city,
            state,
            country,
            name,
            amenities,
            description,
            price,
            image_url1: imageurl1,
            image_url2: imageurl2,
            image_url3: imageurl3,
        };
        setErrors([]);
        let data = await dispatch(createLocationThunk(newLocation))
        if (!data) {
            hideForm();
            // return history.push('/');
        } else {
            setErrors(data)
        }
    };

    // maybe add autocomplete to form?
    return (
        <div className='create-location-grandparent'>
            <div>
                <div className='create-location-message'>
                    Create a new location!
                </div>
                <form onSubmit={handleSubmit} className='create-form'>
                    <div className='create-error-container'>
                        {/* {errors.map((err, i) => (
                            <li key={i}>
                                {err}
                            </li>
                        ))} */}
                        {errors.map((err, i) => {

                            return (
                                <li key={i} className='create-error'>
                                    {err}
                                </li>
                            )
                        })}
                    </div>
                    <div className='create-div'>
                        <div>
                            <input
                                type='text'
                                value={city}
                                onChange={e=>setCity(e.target.value)}
                                placeholder='Provide your city'
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={state}
                                onChange={e=>setState(e.target.value)}
                                placeholder='Provide your state'
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={country}
                                onChange={e=>setCountry(e.target.value)}
                                placeholder='Provide your country'
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                placeholder="Provide your location's name"
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={amenities}
                                onChange={e=>setAmenities(e.target.value)}
                                placeholder="Provide your location's amenities"
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <textarea
                                value={description}
                                onChange={e=>setDescription(e.target.value)}
                                placeholder="Provide your location's description"
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={price}
                                onChange={e=>setPrice(e.target.value)}
                                placeholder="Provide your location's price per night"
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={imageurl1}
                                onChange={e=>setImageUrl1(e.target.value)}
                                placeholder='Provide your first image URL'
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={imageurl2}
                                onChange={e=>setImageUrl2(e.target.value)}
                                placeholder='Provide your second image URL'
                                className='create-location-input'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={imageurl3}
                                onChange={e=>setImageUrl3(e.target.value)}
                                placeholder='Provide your third image URL'
                                className='create-location-input'
                            />
                        </div>
                    </div>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateLocationForm
