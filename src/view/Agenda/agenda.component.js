import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { EventComponent } from "./event.component";
import { AGENDA_STYLES } from "./agenda.styles";
import { getFullMonthName } from "../../domain/date.domain";

/*
* TODO: AgandaComponent
* TODO: Show the selected date in a header when the date has events
* TODO: Show events (in order)
* */

AgendaComponent.propTypes = {
    actions: PropTypes.array,
    date: PropTypes.date,
    events: PropTypes.array,
};
