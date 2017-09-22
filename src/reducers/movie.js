const initialState = {
    title: '',
    category: '',
    year: '',
    duration: '',
    description: '',
    director: '',
    cast: '',
};

export default function movie(state = initialState, action) {
    switch (action.type) {
        case 'SET_MOVIE':
            return { ...state, movie: action.payload };

        default:
            return state;
    }
}