import {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { updateLocationThunk, getSingleLocationThunk } from '../../store/location';
import './editlocation.css';
//pass location

const EditLocation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useParams().location_id;
    const user_id = useSelector(state => state.session.user.id)
    const [isLoaded, setIsLoaded] = useState(false);

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [amenities, setAmenities] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);


    useEffect(async() => {
        await dispatch(getSingleLocationThunk(id));
        await setIsLoaded(true)
    }, [dispatch, id]);


    const handleSubmit = async(e) => {
        e.preventDefault();
        const location = {
            id,
            user_id,
            city,
            state,
            country,
            name,
            amenities,
            description,
            price
        };

        let data = await dispatch(updateLocationThunk({location, id}))
        if (!data) {
            return history.push(`/locations/${id}`);
        } else {
            setErrors(data)
        }
    };


    return (
        <div className='edit-location-grandparent'>
            <div>
                <h2 className='create-location-message'>
                    Edit your location!
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='create-error-container'>
                        {errors.map((err, i) => (
                            <li key={i}>
                                {err}
                            </li>
                        ))}
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
                    </div>
                    <button type='submit'>
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
};

export default EditLocation;
