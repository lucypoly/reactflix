import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers';
import promise from "redux-promise-middleware";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(promise(),  thunk,  createLogger()));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}