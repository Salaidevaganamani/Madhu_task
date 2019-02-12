import { createStore } from 'redux';
import task1Reducer from '../reducers/task1';

const store = createStore(task1Reducer);

export default store;