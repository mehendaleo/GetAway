import {getSearchResultsThunk} from '../../../store/search';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const Charlotte = () => {
    const locations = useSelector(state => state.search?.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchResultsThunk('Charlotte'));
    }, [dispatch]);

    // let map;
    // const initMap = () => {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: 35.236169042995286, lng: -80.84464327169674},
    //         zoom: 8
    //     })
    // }

    return (
        <div className='explore-parent'>
            <div className='search-spots-container'>
                <div className="explore-location-name">Locations available in Charlotte</div>
                <div className="locations-container">
                    {locations?.map((location, i) => (
                        <div key={i} className='explore-map-locations'>
                            <div>
                                <a href={`/locations/${location?.id}`}>
                                    <img className="explore-image" src={location.images[0].image_url} alt='charlotte-images'/>
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

export default Charlotte;
