// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './events.actions';
import { AgendaComponent } from "../../view/Agenda/agenda.component";

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export const EventsContainer = connect(mapStateToProps, mapDispatchToProps)(AgendaComponent);
