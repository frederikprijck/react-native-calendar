// @flow

import { StyleSheet } from 'react-native';
import { THEME_COLORS } from "../Theme/colors";

export const AGENDA_STYLES = StyleSheet.create({
    agenda: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    dateHeader: {
        alignItems: 'center',
        backgroundColor: THEME_COLORS.backgroundWhite,
        flex: 1,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
    },
    event: {
        alignItems: 'stretch',
        backgroundColor: THEME_COLORS.backgroundWhite,
        borderTopWidth: 1,
        borderColor: THEME_COLORS.backgroundLight,
        flex: 1,
        flexDirection: 'row',
    },
    eventBody: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        padding: 14,
    },
});