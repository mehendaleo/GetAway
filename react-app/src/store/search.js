// constants
const SEARCH_RESULTS = 'search/SEARCH_RESULTS';

// action creators
const getResults = (results) => ({
    type: SEARCH_RESULTS,
    payload: results
});

// thunks
export const getSearchResultsThunk = (search_term) => async(dispatch) => {
    const response = await fetch(`/api/locations/${search_term}`)
    if (response.ok) {
        const results = await response.json();
        dispatch(getResults(results));
        return results;
    }
};

// reducer
const initialState = {};
const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS: {
           const newState = {...action.payload}
           return newState;
        }
        default:
            return state
    }
};

export default search;
