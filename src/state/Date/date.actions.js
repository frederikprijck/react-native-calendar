// @flow

export const DATE_ACTION_TYPES = {
    SET_VIEW_DATE: 'SET_VIEW_DATE',
    SET_SELECTED_DATE: 'SET_SELECTED_DATE',
};

export const setViewDate = (date) => ({
    type: DATE_ACTION_TYPES.SET_VIEW_DATE,
    date
});

export const setSelectedDate = (date) => ({
    type: DATE_ACTION_TYPES.SET_SELECTED_DATE,
    date
});
