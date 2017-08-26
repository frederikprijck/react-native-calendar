// @flow
import React from 'react';
import { View } from 'react-native';
import { CalendarDay } from "./calendar-day.component";
import { CALENDAR_STYLES } from "./calender.styles";

export const CalendarHeader = ({ daysOfWeek }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        { daysOfWeek.split('').map((day, i) => <CalendarDay key={`${day}${i}`} style={CALENDAR_STYLES.calendarDay} day={day} />) }
    </View>
);