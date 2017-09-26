const sortFilter = (state = 'SORT_NONE', action) => {
    switch (action.type) {
        case 'SET_SORT_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default sortFilter