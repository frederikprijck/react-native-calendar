// @flow

import React from 'react';
import { View } from 'react-native';
import { EventComponent } from "./event.component";
import { AGENDA_STYLES } from "./agenda.styles";

export const AgendaComponent = ({ actions, events }) => {
    console.log(actions, events);

    return (
        <View style={ AGENDA_STYLES.agenda }>
            { events.map(event => <EventComponent key={event.id} event={event} onDelete={() => actions.deleteEvent(event.id)} />) }
        </View>
    );
};
