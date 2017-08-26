// @flow
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const CalendarDay = ({ day, month, onSelect, style, year }) => {
    if (onSelect) {
        return (
            <TouchableOpacity style={ style } onPress={() => onSelect(new Date(year, month, day)) } >
                <Text>{ day }</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={ style }>
            <Text>{ day }</Text>
        </View>
    );
};