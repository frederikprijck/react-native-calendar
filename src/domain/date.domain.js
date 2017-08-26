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

export function datesAreEqual(date1, date2) {
    let sameYear = date1.getFullYear() === date2.getFullYear();
    let sameMonth = date1.getMonth() === date2.getMonth();
    let sameDayOfMonth = date1.getDate() === date2.getDate();

    return sameYear && sameMonth && sameDayOfMonth;
}