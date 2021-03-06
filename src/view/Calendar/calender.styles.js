import { Dimensions, StyleSheet } from 'react-native';
import { THEME_COLORS } from "../Theme/colors";

export const CALENDAR_STYLES = StyleSheet.create({
    calendar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: THEME_COLORS.backgroundWhite,
    },
    calendarNav: {
        alignItems: 'center',
        backgroundColor: THEME_COLORS.backgroundWhite,
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
        borderBottomWidth: 1,
        borderColor: THEME_COLORS.backgroundLight,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    calendarHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    calendarHeaderDay: {
        alignItems: 'center',
        backgroundColor: THEME_COLORS.accentYellow,
        flexDirection: 'row',
        height: Dimensions.get('window').width / 7,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    },
    calendarDay: {
        alignItems: 'center',
        // borderTopWidth: 1,
        borderColor: THEME_COLORS.accentYellow,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flexGrow: 1,
        height: Dimensions.get('window').width / 7,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    },
    activeCalendarDay: {
        alignItems: 'center',
        // borderTopWidth: 1,
        borderColor: THEME_COLORS.accentYellow,
        backgroundColor: THEME_COLORS.accentYellow,
        flexDirection: 'row',
        height: Dimensions.get('window').width / 7,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    },
    preday: {
        alignItems: 'center',
        // borderTopWidth: 1,
        borderColor: THEME_COLORS.accentYellow,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        height: Dimensions.get('window').width / 7,
        justifyContent: 'center',
        minWidth: Dimensions.get('window').width / 7,
    }
});