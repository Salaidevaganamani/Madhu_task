import {ENABLE_COMPB, COUNTER} from '../actionTypes/task1';
import { connect } from 'react-redux';
import CompB from './CompB';
// import counterReducer from '../reducers/counter';

const mapStateToProps = (state) => ({
    view_compB: state.view_compB,
    count: state.count
})

const mapDispatchToProps = (dispatch) => ({
    enable_compB: () => {dispatch({ type: ENABLE_COMPB})},
    counter: () => {dispatch({ type: COUNTER})}
})

export default connect(mapStateToProps, mapDispatchToProps)(CompB);