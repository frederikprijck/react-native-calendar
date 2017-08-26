// @flow

import { StyleSheet } from 'react-native';
import { THEME_COLORS } from "../Theme/colors";

export const AGENDA_STYLES = StyleSheet.create({
    agenda: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    event: {
        alignItems: 'stretch',
        backgroundColor: THEME_COLORS.backgroundWhite,
        borderBottomWidth: 1,
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