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
        <div className='parent'>
            <div className='search-spots-container'>
                <div className='Charleston-name'>Locations available in Charleston</div>
                {locations?.map((location, i) => (
                    <div key={i} className='Charleston-locations'>
                        <div>
                            <a href={`/locations/${location?.id}`}>
                                <img src={location.images[0].image_url} alt='image'/>
                            </a>
                        </div>
                        <div>
                            <div>{location?.name}</div>
                            <div>{location?.amenities}</div>
                            <div>${location?.price} / night</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='map-container'>

            </div>
        </div>
    )
};

export default Charleston;
