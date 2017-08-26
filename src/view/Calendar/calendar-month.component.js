// @flow

import React from 'react';
import { View } from 'react-native';
import { CalendarDay } from "./calendar-day.component";
import { CALENDAR_STYLES } from "./calender.styles";

export const CalendarMonth = ({ daysInMonth, postdaysInMonth, predaysInMonth }) => {
    console.log(postdaysInMonth);

    const days = [];
    const predays = [];
    const postdays = [];

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    for (let i = 1; i <= predaysInMonth; i++) {
        predays.push(i);
    }

    for (let i = 1; i <= postdaysInMonth; i++) {
        postdays.push(i);
    }

    return (
        <View style={ CALENDAR_STYLES.calendarMonth }>
            { predays.map(day => <CalendarDay style={ CALENDAR_STYLES.preday } key={day} day={''} />) }
            { days.map(day => <CalendarDay style={ CALENDAR_STYLES.calendarDay } key={day} day={day} />) }
            { postdays.map(day => <CalendarDay style={ CALENDAR_STYLES.preday } key={day} day={''} />) }
        </View>
    );
};