import { applyMiddleware, createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import authreducers from '../reducers/authreducers'
import loginreducers from '../reducers/loginreducers'
const reducer = combineReducers({
    auth: authreducers,
    login:loginreducers
})

const middleware = composeWithDevTools(applyMiddleware(...[]));

export const store = createStore(reducer, middleware);