import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getAllLocationsThunk, updateLocationThunk, deleteLocationThunk } from '../../store/location';
import { loadReviewsThunk } from '../../store/review';

const SingleLocation = () => {
    const dispatch = useDispatch();
    const location_id = useParams();
    const user = useSelector(state => state.session.user);
    const location = useSelector(state => state.location[location_id])
    const reviews = useSelector(state => Object.values(state.review));
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(async() => {
        await dispatch(loadReviewsThunk(location_id));
        await dispatch(getAllLocationsThunk());
        await setIsLoaded(true)
    }, [dispatch, location_id])

    return (
        <>
            {isLoaded && (
                <div className='single-location-container'>
                    <h1>{location?.name}</h1>
                    <h3>{location?.city, location?.state, location?.country}</h3>
                    <div className='image-container'>
                        <div className='main-image' style={{backgroundImage: `url(${location?.images[0]})`}}></div>
                    </div>
                </div>
            )}
        </>


    )
}
