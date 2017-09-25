import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../constants/Feed';

const initialState = {
    query: '',
    movies: [],
    error: '',
    fetching: false
};

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return { ...state, query: action.payload, fetching: true, error: '' };

        case GET_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, fetching: false, error: '' };

        case GET_MOVIES_ERROR:
            return { ...state, movies: [], error: action.payload, fetching: false };

        default:
            return state;
    }

}