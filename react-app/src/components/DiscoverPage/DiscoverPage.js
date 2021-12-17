import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsThunk } from "../../store/location";
import './DiscoverPage.css';

const Explore = () => {
    const dispatch = useDispatch();
    const locationsObj = useSelector(state => state.locationReducer)
    const locations = Object.assign([], locationsObj)

    useEffect(() => {
        dispatch(getAllLocationsThunk())
    }, [dispatch])

    return (
        <div>
            {locations?.map(location => (
                <div>
                    {location.name}
                </div>
            ))}
        </div>
    )
}


export default Explore
