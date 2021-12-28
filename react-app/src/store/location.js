// constants
const GET_LOCATIONS = 'location/GET_LOCATIONS';


// action creaters

// action to get all locations for explore
const getAllLocations = (locations) => ({
    type: GET_LOCATIONS,
    payload: locations
});


// thunks

// thunk to get all locations for explore
export const getAllLocationsThunk = () => async(dispatch) => {
    const response = await fetch('/api/locations/explore');
    if (response.ok) {
        const locations = await response.json();
        dispatch(getAllLocations(locations));
        return locations;
    }
}

//thunk to get single location
export const

// reducer
const initialState = {};
const location = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS: {
            const newState = {
                ...state,
                ...action.payload.locations
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default location;
