// @flow

import React from 'react';
import { View } from 'react-native';
import { CalendarDay } from "./calendar-day.component";
import { CALENDAR_STYLES } from "./calender.styles";
import { datesAreEqual } from "../../domain/date.domain";

export const CalendarMonth = ({ daysInMonth, events, month, onSelect, postdaysInMonth, predaysInMonth, selectedDate, year }) => {
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
                    events={events.filter(event => datesAreEqual(event.date, new Date(year, month, day)))}
                    key={day}
                    month={month}
                    onSelect={onSelect}
                    selectedDate={selectedDate}
                    year={year}
                />
            ))}

            { postdays.map(day => <CalendarDay key={day} />) }
        </View>
    );
};