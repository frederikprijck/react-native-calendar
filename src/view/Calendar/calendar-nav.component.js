import React from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { CALENDAR_STYLES } from "./calender.styles";
import { THEME_COLORS } from "../Theme/colors";

/*
* TODO: CalenderNav-component
* TODO: Show the current month
* TODO: Change to previous / next month
* */

CalenderNav.propTypes = {
    title: PropTypes.string,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func
};