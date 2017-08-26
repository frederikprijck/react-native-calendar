// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "../state/store";
import { DateContainer } from "../state/Date/date.container";
import { EventsContainer } from "../state/Events/events.container";

export const App = () => (
    <Provider store={store}>
        <ScrollView>
            <DateContainer />
            <EventsContainer />
        </ScrollView>
    </Provider>
);