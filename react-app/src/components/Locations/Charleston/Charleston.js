import {getSearchResultsThunk} from '../../../store/search';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const Charleston = () => {
    const locations = useSelector(state => state.search?.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchResultsThunk('Charleston'));
    }, [dispatch]);

    return (
        <div className='explore-parent'>
            <div className='search-spots-container'>
                <div className="explore-location-name">Locations available in Charleston</div>
                <div className='locations-container'>
                    {locations?.map((location, i) => (
                        <div key={i} className='explore-map-locations'>
                            <div>
                                <a href={`/locations/${location?.id}`}>
                                    <img className="explore-image" src={location.images[0].image_url} alt='charleston-images'/>
                                </a>
                            </div>
                            <div>
                                <div>{location?.name}</div>
                                <div>${location?.price} / night</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Charleston;
