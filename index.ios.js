import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { App } from "./src/view/App.component";

export default class Calendar extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('Calendar', () => Calendar);
