// @flow

export const DATE_ACTION_TYPES = {
    CHANGE_DATE: 'CHANGE_DATE',
};

export const changeDate = (date) => ({
    type: DATE_ACTION_TYPES.CHANGE_DATE,
    date
});
