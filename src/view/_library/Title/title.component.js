// @flow

import React from 'react';
import { Text } from 'react-native';

type Props = {
    children: string
}

export const Title = ({ children, style }: Props) => (
    <Text style={ style }>{ children }</Text>
);
