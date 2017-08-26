// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../state/store";
import { DateContainer } from "../state/Date/date.container";

export const App = () => (
    <Provider store={ store }>
        <DateContainer />
    </Provider>
);