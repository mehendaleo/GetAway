import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getSingleLocationThunk, updateLocationThunk, deleteLocationThunk } from '../../store/location';
import { loadReviewsThunk } from '../../store/review';

const SingleLocation = () => {
    const dispatch = useDispatch();
    const location_id = useParams().location_id;
    const user = useSelector(state => state.session.user);
    const location = useSelector(state => state.location)
    const reviews = useSelector(state => Object.values(state.review));
    console.log(reviews)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(async() => {
        await dispatch(getSingleLocationThunk(location_id));
        await dispatch(loadReviewsThunk(location_id));
        await setIsLoaded(true)
    }, [dispatch, location_id])

    return (
        <>
            <h1>Single Location</h1>
            {isLoaded && (
                <div className='single-location-entire'>
                    <div className='single-location-parent'>
                        <h1>{location?.name}</h1>
                        <h3>{`${location?.city}, ${location?.state}, ${location?.country}`}</h3>
                        <div className='image-container'>
                            {location?.images.map((image, idx) => (
                                <img src={image.image_url} key={idx}/>
                            ))}
                        </div>

                        <div className='single-location-bottom'>
                            <div className='single-location-owner-info'>
                                {`Entire Location Hosted By ${location?.user.first_name} ${location?.user.last_name}`}
                            </div>
                            <span className='single-location-owner-propic'>
                                <img className='owner-propic' src={location?.user.propic_url}/>
                            </span>
                            <div className='single-location-amenities'>{`${location?.amenities}`}</div>
                            <div className='single-location-about'>About the location</div>
                            <div className='single-location-description'>{`${location?.description}`}</div>
                            <div className='single-location-offers'>What this place offers</div>
                            <div className='single-location-offers-parent'>
                                <div className='single-location-offers-children'>Kitchen</div>
                                <div className='single-location-offers-children'>Free street parking</div>
                                <div className='single-location-offers-children'>Air conditioning</div>
                                <div className='single-location-offers-children'>Backyard</div>
                                <div className='single-location-offers-children'>Refrigerator</div>
                                <div className='single-location-offers-children'>Wifi</div>
                                <div className='single-location-offers-children'>TV with cable</div>
                                <div className='single-location-offers-children'>Patio or balcony</div>
                                <div className='single-location-offers-children'>Hair dryer</div>
                                <div className='single-location-offers-children'>Security cameras on property</div>
                            </div>
                        </div>
                        <div className='single-location-reviews-container'>
                            {reviews?.map((review, idx) => (
                                <div key={idx} className='single-location-review'>
                                    <div className='review-info'>
                                        <img src={review.user.propic_url} className='review-info-pic'/>
                                        <span className='review-info-content'>{`${review.user.first_name} ${review.user.last_name}`}</span>
                                    </div>
                                    <div className='review-content'>
                                        {review?.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            )}
        </>


    )
};

export default SingleLocation;
