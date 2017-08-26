// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './events.actions';
import { AgendaComponent } from "../../view/Agenda/agenda.component";
import { datesAreEqual } from "../../domain/date.domain";

function mapStateToProps(state) {
    return {
        events: state.events.filter(event => datesAreEqual(event.date, state.date.selectedDate)),
        date: state.date.selectedDate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export const EventsContainer = connect(mapStateToProps, mapDispatchToProps)(AgendaComponent);
