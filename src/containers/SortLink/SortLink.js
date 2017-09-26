import { connect } from 'react-redux';
import { setSortFilter } from './../../actions';
import Link from './../../components/Link/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.sortFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSortClick: () => {
            console.log(setSortFilter);
            const action = setSortFilter(ownProps.filter);
            dispatch(action)
        }
    }
};

const SortLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default SortLink;