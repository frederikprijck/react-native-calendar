// @flow

import { EVENT_ACTION_TYPES } from "./events.actions";
import { mockEvents } from "./events.mock";

const initialState = [
    ...mockEvents
];

export const eventsReducer = (state: Event[] = initialState, action) => {
    switch (action.type) {
        case EVENT_ACTION_TYPES.CREATE_EVENT:
            return [
                ...state,
                action.event
            ];

        case EVENT_ACTION_TYPES.UPDATE_EVENT:
            return state.map(event => event.id === action.event.id ? action.event : event );

        case EVENT_ACTION_TYPES.DELETE_EVENT:
            return state.filter(event => event.id !== action.id);

        default:
            return state;
    }
};
