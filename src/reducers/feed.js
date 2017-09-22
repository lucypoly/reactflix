import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from '../constants/Feed';

const initialState = {
    title: '',
    movies: [],
    fetching: false
};

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return { ...state, title: action.payload, fetching: true };

        case GET_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, fetching: false };

        default:
            return state;
    }

}