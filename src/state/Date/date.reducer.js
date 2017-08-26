// @flow

import { DATE_ACTION_TYPES } from "./date.actions";

const today = new Date();

const initialState = {
    viewDate: today,
    selectedDate: today
};

export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATE_ACTION_TYPES.SET_VIEW_DATE:
            return {
                ...state,
                viewDate: action.date
            };

        case DATE_ACTION_TYPES.SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.date
            };

        default:
            return state;
    }
};