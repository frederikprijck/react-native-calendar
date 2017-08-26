// @flow
import { createStore, combineReducers } from 'redux';

import { dateReducer } from "./Date/date.reducer";
import { eventsReducer } from "./Events/events.reducer";

const rootReducer = combineReducers({
    date: dateReducer,
    events: eventsReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);