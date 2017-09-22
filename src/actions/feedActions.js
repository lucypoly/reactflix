import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from '../constants/Feed';
import request from 'axios';

export function getMovies(title) {

    return (dispatch) => {
        dispatch({
            type: GET_MOVIES_REQUEST,
            payload: title
        });

        request.get(`https://netflixroulette.net/api/api.php?title=${title}`)
            .then(result => {
                dispatch({
                    type: GET_MOVIES_SUCCESS,
                    payload: result.data
                })
            })
    }
}