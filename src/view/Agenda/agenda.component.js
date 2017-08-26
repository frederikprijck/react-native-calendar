// @flow

import React from 'react';
import { Text, View } from 'react-native';
import { EventComponent } from "./event.component";
import { AGENDA_STYLES } from "./agenda.styles";
import { getFullMonthName } from "../../domain/date.domain";

export const AgendaComponent = ({ actions, date, events }) => {
    return (
        <View style={ AGENDA_STYLES.agenda }>
            { events.length > 0 ?
                <View style={ AGENDA_STYLES.dateHeader }>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{`${date.getDate()} ${getFullMonthName(date)} ${date.getFullYear()}`}</Text>
                </View> : null
            }

            { events.map(event => <EventComponent key={event.id} event={event} onDelete={() => actions.deleteEvent(event.id)} />) }
        </View>
    );
};
