// @flow

import React from 'react';
import { Button, Text, View } from 'react-native';

import { CALENDAR_STYLES } from "./calender.styles";
import { THEME_COLORS } from "../Theme/colors";

export const CalenderNav = ({ onNext, onPrevious, title }) => {
    return (
        <View style={ CALENDAR_STYLES.calendarNav }>
            <Button style={ CALENDAR_STYLES.calendarNavButton } title="Prev" onPress={ onPrevious } color={THEME_COLORS.accentYellow} />
            <Text style={ CALENDAR_STYLES.calendarNavTitle }>{ title }</Text>
            <Button style={ CALENDAR_STYLES.calendarNavButton } title="Next" onPress={ onNext } color={THEME_COLORS.accentYellow} />
        </View>
    );
};