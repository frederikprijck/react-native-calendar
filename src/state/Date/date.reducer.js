// @flow

import { DATE_ACTION_TYPES } from "./date.actions";

const initialState = {
    selected: new Date(),
    locale: 'nl-be',
};

export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATE_ACTION_TYPES.CHANGE_DATE:
            return {
                ...state,
                selected: action.date
            };

        default:
            return state;
    }
};