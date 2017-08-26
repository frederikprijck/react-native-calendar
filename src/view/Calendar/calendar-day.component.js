// @flow
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { CALENDAR_STYLES } from "./calender.styles";

export const CalendarDay = ({ day, events, month, onSelect, selectedDate, year }) => {
    let eventsToday = '';

    if (events) {
        eventsToday = events.length;
    }

    if (selectedDate) {
        let selectedDay = selectedDate.getDate();
        let selectedMonth = selectedDate.getMonth();
        let selectedYear = selectedDate.getFullYear();

        if (selectedDay === day && selectedMonth === month && selectedYear === year) {
            return (
                <TouchableHighlight style={ CALENDAR_STYLES.activeCalendarDay } onPress={() => onSelect(new Date(year, month, day)) } >
                    { eventsToday ? <Text style={{ fontWeight: 'bold' }}>{ `${day} (${eventsToday})` }</Text> : <Text>{ day }</Text> }
                </TouchableHighlight>
            );
        }

        return (
            <TouchableHighlight style={ CALENDAR_STYLES.calendarDay } onPress={() => onSelect(new Date(year, month, day)) } >
                { eventsToday ? <Text style={{ fontWeight: 'bold' }}>{ `${day} (${eventsToday})` }</Text> : <Text>{ day }</Text> }
            </TouchableHighlight>
        );
    }

    if (day) {
        return (
            <View style={ CALENDAR_STYLES.calendarHeaderDay }>
                <Text style={{ fontWeight: 'bold' }}>{ day }</Text>
            </View>
        );
    }

    return (
        <View style={ CALENDAR_STYLES.preday }>
            <Text>{ day }</Text>
        </View>
    );
};