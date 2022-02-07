// constants
const LOAD_BOOKINGS= 'bookings/LOAD_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';

// actions
const loadBooking = (bookings) => ({
    type: LOAD_BOOKINGS,
    payload: bookings
});

const createBooking = (booking) => ({
    type: ADD_BOOKING,
    payload: booking
});

const deleteBooking = (bookingID) => ({
    type: DELETE_BOOKING,
    payload: bookingID
});


// thunks

export const loadLocationBookings = (id) => async (dispatch) => {
    const response = await fetch(`/api/bookings/locations/${id}`);
    if (response.ok) {
        const bookings = await response.json();
        dispatch(loadBooking(bookings));
    }
};

export const loadUserBookings = (id) => async (dispatch) => {
    const response = await fetch(`/api/bookings/users/${id}`);
    if (response.ok) {
        const bookings = await response.json();
        dispatch(loadBooking(bookings));
    }
};

export const addNewBooking = (booking) => async (dispatch) => {
    const response = await fetch(`/api/bookings/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(booking)
    });
    if (response.ok) {
        const booking = await response.json();
        dispatch(createBooking(booking));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors
        else return ['Weird error']
    } else {
        return ['Server Error'];
    }
};

export const deleteBookingThunk = (booking_id) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${booking_id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        await response.json()
        dispatch(deleteBooking(booking_id))
    }
};

// reducer
const initialState = {};
const booking = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKINGS: {
            // const newState = {...state};
            // for (let booking in action.payload.bookings) {
            //     newState[booking.id] = booking
            // }
            const newState = {
                ...state,
                ...action.payload.bookings
            };

            return newState
        }
        case ADD_BOOKING: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            };
            return newState
        }
        case DELETE_BOOKING: {
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        }
        default: {
            return state
        }
    }
};

export default booking;
