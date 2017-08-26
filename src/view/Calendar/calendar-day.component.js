// @flow
import React from 'react';
import { Text, View } from 'react-native';

export const CalendarDay = ({ day, style }) => (
    <View style={ style }>
        <Text>{ day }</Text>
    </View>
);