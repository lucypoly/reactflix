import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../constants/Feed';
import request from 'axios';

export const getMovies = (query) => {
    return (dispatch) => {
        dispatch({
            type: GET_MOVIES_REQUEST,
            payload: query
        });

        request.get(`https://netflixroulette.net/api/api.php?${query}`)
            .then(result => {
                dispatch({
                    type: GET_MOVIES_SUCCESS,
                    payload: result.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_MOVIES_ERROR,
                    payload: error
                })
            })
    }
};

export const setSortFilter = (filter) => {
    return {
        type: 'SET_SORT_FILTER',
        filter
    }
};

export const toggleMovie = id => {
    return {
        type: 'TOGGLE_MOVIE',
        id
    }
};