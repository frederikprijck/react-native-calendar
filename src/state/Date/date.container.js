// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './date.actions';
import { CalendarComponent } from "../../view/Calendar/calendar.component";

function mapStateToProps(state) {
    return {
        date: state.date
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export const DateContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
