// @flow
import React from 'react';
import { View } from 'react-native';
import { CalendarDay } from "./calendar-day.component";

export const CalendarHeader = ({ daysOfWeek }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        { daysOfWeek.split('').map((day, i) => <CalendarDay key={`${day}${i}`} day={day} />) }
    </View>
);