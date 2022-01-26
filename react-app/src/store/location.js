// constants
const GET_LOCATIONS = 'location/GET_LOCATIONS';
const ADD_LOCATION = 'location/ADD_LOCATION';
const UPDATE_LOCATION = 'location/UPDATE_LOCATION';
const DELETE_LOCATION = 'location/DELETE_LOCATION';
const SINGLE_LOCATION = 'location/SINGLE_LOCATION';


// action creaters

// action to get all locations for explore
const getAllLocations = (locations) => ({
    type: GET_LOCATIONS,
    payload: locations
});

const getSingleLocation = (location) => ({
    type: SINGLE_LOCATION,
    payload: location
})

const createLocation = (location) => ({
    type: ADD_LOCATION,
    payload: location
});

const updateLocation = (location) => ({
    type: UPDATE_LOCATION,
    payload: location
});

const deleteLocation = (location_id) => ({
    type: DELETE_LOCATION,
    payload: location_id
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
};

export const getSingleLocationThunk = (id) => async(dispatch) => {
    const response = await fetch(`/api/locations/${id}`);
    if (response.ok) {
        const location = await response.json();
        dispatch(getSingleLocation(location));
        return location;
    }
}

// thunk to create a location
export const createLocationThunk = (newLocation) => async(dispatch) => {
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
        else return ['Weird error']
    } else {
        return ['Server Error'];
    }
};

// thunk to update a location
export const updateLocationThunk = ({location, id}) => async(dispatch) => {
    const response = await fetch(`/api/locations/${id}/update`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(location)
    });
    if (response.ok) {
        const editedLocation = await response.json();
        dispatch(updateLocation(editedLocation));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors
        else return ['Weird error']
    } else {
        return ['Server Error'];
    }
};

// thunk to delete a location
export const deleteLocationThunk = (location_id) => async(dispatch) => {
    const response =  await fetch(`/api/locations/${location_id}/delete`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const location = await response.json()
        dispatch(deleteLocation(location.id))
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
        case UPDATE_LOCATION: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            };
            return newState
        }
        case DELETE_LOCATION: {
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        }
        case SINGLE_LOCATION: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default location;
