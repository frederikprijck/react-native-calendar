// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './date.actions';
import { CalendarComponent } from "../../view/Calendar/calendar.component";
import { datesAreFromSameMonth } from "../../domain/date.domain";

function mapStateToProps(state) {
    return {
        date: state.date,
        events: state.events.filter(event => datesAreFromSameMonth(event.date, state.date.viewDate)),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export const DateContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
