import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import { getAllLocationsThunk } from "../../store/location";
import './Explore.css';

const Explore = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const locationsObj = useSelector(state => state.location)
    const locations = Object.assign([], locationsObj)
    // const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllLocationsThunk())
    }, [dispatch])

    // if (!sessionUser) {
    //    return history.push('/')
    // }

    return (
        <div>
            <div className='search-spots-container'>
                <div className='charlotte-name'>All locations available</div>
                {locations?.map((location, i) => (
                    <div key={i} className='charlotte-locations'>
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
        </div>
    )
}


export default Explore
