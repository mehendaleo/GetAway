// constants
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

// action creators
const loadReviews = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
});

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
});

const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    payload: review
});

const deleteReview = (review_id) => ({
    type: DELETE_REVIEW,
    payload: review_id
});

// thunks
// thunk to load reviews for location
export const loadReviewsThunk = (location_id) => async(dispatch) => {
    const response = await fetch(`/api/reviews/${location_id}`);
    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews));
    }
};

// thunk to create a review
export const addReviewThunk = (review) => async(dispatch) => {
    const response = await fetch('/api/reviews/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const review = response.json();
        dispatch(addReview(review))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors
        else return ['Weird error']
    } else {
        return ['Server Error'];
    }
};

// thunk to update a review
export const updateReviewThunk = (review) => async(dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}/update`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const editedReview = await response.json();
        dispatch(updateReview(editedReview));
    }
};

// thunk to delete a review
export const deleteReviewThunk = (review_id) => async(dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}/delete`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const review = await response.json();
        dispatch(deleteReview(review.id))
    }
}
// reducer

const initialState = {};
const review = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS: {
            // const newState = {
            //     ...state,
            //     ...action.payload.reviews
            // }
            const newState = {...state};
            action.payload.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState;
        }
        case ADD_REVIEW: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;
        }
        case UPDATE_REVIEW: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default review;
