// @flow
import moment from 'moment';

export function getDaysInMonth(month, fullYear) {
    return new Date(fullYear, month + 1, 0).getDate();
}

export function getFullMonthName(date) {
    return moment(date).format('MMMM');
}

export function getWeekday(date) {
    return date.getDay();
}