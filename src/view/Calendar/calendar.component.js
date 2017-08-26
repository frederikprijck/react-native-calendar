// @flow

import React from 'react';
import { ScrollView } from 'react-native';
import { CalenderNav } from "./calendar-nav.component";
import { CalendarHeader } from "./calendar-header.component";
import { CalendarMonth } from "./calendar-month.component";
import { getDaysInMonth, getFullMonthName, getWeekday } from "../../domain/date.domain";
import { CALENDAR_STYLES } from "./calender.styles";

export class CalendarComponent extends React.Component {
    componentWillMount() {
        this.date = this.props.date;
        this.actions = this.props.actions;

        this._calculateMonthValues();
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.date || nextProps.date !== this.props.date) {
            this.date = nextProps.date;
            this._calculateMonthValues();
        }
    }

    _calculateMonthValues() {
        this.fullYear = this.date.selected.getFullYear();
        this.fullMonth = getFullMonthName(this.date.selected, this.date.locale);
        this.currentMonth = this.date.selected.getMonth();
        this.previousMonth = new Date(this.fullYear, this.currentMonth - 1);
        this.nextMonth = new Date(this.fullYear, this.currentMonth + 1);

        this.daysInMonth = this._calculateDaysInMonth();
        this.predaysInMonth = this._calculatePredays();
        this.postdaysInMonth = this._calculatePostdays();
    }

    _calculateDaysInMonth() {
        return getDaysInMonth(this.currentMonth, this.fullYear);
    }

    _calculatePredays() {
        if (getWeekday(new Date(this.fullYear, this.currentMonth)) > 0) {
            return getWeekday(new Date(this.fullYear, this.currentMonth)) - 1;
        }

        return getWeekday(new Date(this.fullYear, this.currentMonth)) + 6;
    }

    _calculatePostdays() {
        return (this.daysInMonth + this.predaysInMonth) % 7 > 0 ? 7 - ((this.daysInMonth + this.predaysInMonth) % 7) : 0;
    }

    render() {
        return (
            <ScrollView contentContainerstyle={CALENDAR_STYLES.calendar}>
                <CalenderNav
                    title={`${this.fullMonth} ${this.fullYear}`.toUpperCase()}
                    onPrevious={() => this.actions.changeDate(this.previousMonth)}
                    onNext={() => this.actions.changeDate(this.nextMonth)}
                />

                <CalendarHeader daysOfWeek="MDWDVZZ" />

                <CalendarMonth daysInMonth={this.daysInMonth} predaysInMonth={this.predaysInMonth} postdaysInMonth={this.postdaysInMonth}/>
            </ScrollView>
        );
    }
}
