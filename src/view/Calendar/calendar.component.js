import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { CalenderNav } from "./calendar-nav.component";
import { CalendarHeader } from "./calendar-header.component";
import { CalendarMonth } from "./calendar-month.component";
import { getDaysInMonth, getFullMonthName, getWeekday } from "../../domain/date.domain";
import { CALENDAR_STYLES } from "./calender.styles";

const daysOfWeek = 'MDWDVZZ';

/*
* TODO: CalendarComponent
* TODO: show a calendar navigation (current month and links to previous and next month)
* TODO: show a header with weekdays
* TODO: calculate the number of days in the month
* TODO: calculate the number of 'predays'
* TODO: calculate the number of 'postdays'
*
* Data needed: fullYear, fullMonth, currentMonth, previousMonth, nextMonth
* */

CalendarComponent.propTypes = {
    date: PropTypes.date,
    actions: PropTypes.array,
};
