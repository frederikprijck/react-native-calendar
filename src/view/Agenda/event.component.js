// @flow

import React from 'react';
import { Text, View } from 'react-native';
import { AGENDA_STYLES } from "./agenda.styles";
import { THEME_COLORS } from "../Theme/colors";

function eventTypeStyle(color) {
    return {
        backgroundColor: color,
        width: 10
    };
}

export const EventComponent = ({ event }) => {
    let eventType;
    switch (event.type) {
        case 'WORK':
            eventType = <View style={ eventTypeStyle(THEME_COLORS.accentOrange) } />;
            break;

        case 'SOCIAL':
            eventType = <View style={ eventTypeStyle(THEME_COLORS.accentBlue) } />;
            break;

        case 'PRIVATE':
            eventType = <View style={ eventTypeStyle(THEME_COLORS.accentGreen) } />;
            break;

        default:
            eventType = <View style={ eventTypeStyle(THEME_COLORS.accentYellow) } />;
    }

    // TODO: Handle event times

    return (
        <View style={ AGENDA_STYLES.event }>
            { eventType }

            <View style={ AGENDA_STYLES.eventBody }>
                <Text>{ event.title }</Text>
                <Text>{ event.description }</Text>
            </View>
        </View>
    );
};
