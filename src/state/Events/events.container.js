import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './events.actions';
import { AgendaComponent } from "../../view/Agenda/agenda.component";
import { datesAreEqual } from "../../domain/date.domain";

// TODO: map state to props (events, date)
// TODO: map dispatch to props (bindActionCreators)
// TODO: connect container to AgendaComponent
