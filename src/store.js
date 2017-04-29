import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const generateStore = initialState => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default generateStore
