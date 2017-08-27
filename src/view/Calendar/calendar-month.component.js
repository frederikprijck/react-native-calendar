import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { CalendarDay } from "./calendar-day.component";
import { CALENDAR_STYLES } from "./calender.styles";
import { datesAreEqual } from "../../domain/date.domain";

/*
* TODO: CalenderMonth-component
* TODO: Show days of the current month
* TODO: Show days of the previous month
* TODO: Show days of the next month
* */

CalendarMonth.propTypes = {
    daysInMonth: PropTypes.number,
    predaysInMonth: PropTypes.number,
    postdaysInMonth: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    selectedDate: PropTypes.date,
    onSelect: PropTypes.func,
    events: PropTypes.array
};