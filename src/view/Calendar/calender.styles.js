// @flow

import { Dimensions, StyleSheet } from 'react-native';
import { THEME_COLORS } from "../Theme/colors";

export const CALENDAR_STYLES = StyleSheet.create({
    calendar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    calendarNav: {
        alignItems: 'center',
        backgroundColor: THEME_COLORS.backgroundLight,
        flex: 1,
        flexDirection: 'row',
        flexGrow: 1,
        height: 60,
        justifyContent: 'space-between',
        maxHeight: 60,
        paddingLeft: 10,
        paddingRight: 10,
    },
    calendarNavTitle: {
        color: THEME_COLORS.accentDark,
        fontSize: 21,
        fontWeight: 'bold',
    },
    calendarNavButton: {
        color: THEME_COLORS.accentDark,
    },
    calendarMonth: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    calendarDay: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: THEME_COLORS.accentLight,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: Dimensions.get('window').width / 7 * 1.5,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    },
    preday: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: THEME_COLORS.accentLight,
        backgroundColor: THEME_COLORS.backgroundLight,
        flexDirection: 'row',
        height: Dimensions.get('window').width / 7 * 1.5,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    }
});