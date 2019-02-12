import {ENABLE_COMPA} from '../actionTypes/task1';
import { connect } from 'react-redux';
import CompA from './CompA';
// import counterReducer from '../reducers/counter';

const mapStateToProps = (state) => ({
    view_compA: state.view_compA
})

const mapDispatchToProps = (dispatch) => ({
    enable_compA: () => {dispatch({ type: ENABLE_COMPA})}
})

export default connect(mapStateToProps, mapDispatchToProps)(CompA);