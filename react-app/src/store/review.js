// constants
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';

// action creators
const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews
});

// thunks
const loadReviewsThunk = (location_id) => async(dispatch) => {
    
}
