// @flow

import React from 'react';
import { View } from 'react-native';
import { CalendarDay } from "./calendar-day.component";
import { CALENDAR_STYLES } from "./calender.styles";

export const CalendarMonth = ({ daysInMonth, month, onSelect, postdaysInMonth, predaysInMonth, selectedDate, year }) => {
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
            { predays.map(day => <CalendarDay key={day} />) }

            { days.map(day => (
                <CalendarDay
                    day={day}
                    key={day}
                    month={month}
                    selectedDate={selectedDate}
                    year={year} onSelect={onSelect}
                />
            ))}

            { postdays.map(day => <CalendarDay key={day} />) }
        </View>
    );
};