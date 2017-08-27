import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AGENDA_STYLES } from "./agenda.styles";
import { THEME_COLORS } from "../Theme/colors";

function eventTypeStyle(color) {
    return {
        backgroundColor: color,
        width: 10
    };
}

/*
* TODO: EventComponent
* TODO: Show an event ( type, title, description, timing )
* TODO: Switch between event-types
* */

EventComponent.propTypes = {
    event: PropTypes.object,
};
