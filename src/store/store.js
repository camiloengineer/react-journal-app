import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducer/authReducer';
import { notesReducer } from '../reducer/notesReducer';
import { uiReducer } from '../reducer/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
});

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);