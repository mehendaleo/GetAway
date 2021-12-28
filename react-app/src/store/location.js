// constants
const GET_LOCATIONS = 'location/GET_LOCATIONS';
const ADD_LOCATION = 'location/ADD_LOCATION';


// action creaters

// action to get all locations for explore
const getAllLocations = (locations) => ({
    type: GET_LOCATIONS,
    payload: locations
});

const createLocation = (location) => ({
    type = ADD_LOCATION,
    payload: location
})


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

// thunk to create a location
export const createLocationThunk = (newLocation) => async(dispatch) => {
    try {
        const response = await fetch('/api/locations/new', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newLocation)
        });
        if (response.ok) {
            const location = await response.json();
            dispatch(createLocation(location));
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) return data.errors
            else return 'Weird error'
        } else {
            return 'Server Error';
        }
    } catch (err) {
        console.log(err);
    }
}

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
        case ADD_LOCATION: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            };
            return newState
        }
        default: {
            return state;
        }
    }
}

export default location;
