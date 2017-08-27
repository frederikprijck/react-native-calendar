import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './date.actions';
import { CalendarComponent } from "../../view/Calendar/calendar.component";
import { datesAreFromSameMonth } from "../../domain/date.domain";

// TODO: map state to props (events from the same month, date)
// TODO: map dispatch to props (bindActionCreators)
// TODO: connect to CalendarComponent
