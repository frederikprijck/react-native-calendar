import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { CALENDAR_STYLES } from "./calender.styles";

/*
* TODO: CalenderDay
* TODO: Switch between an active day, a normal day or a day of another month
* */

CalendarDay.propType = {
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    onSelect: PropTypes.func,
    events: PropTypes.array
};
