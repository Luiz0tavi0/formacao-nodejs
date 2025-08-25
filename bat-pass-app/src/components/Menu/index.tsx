import React from 'react';
import { Text,View } from 'react-native';

import { styles } from './MenusStyles';

export function Menu() {
    return (
        <View style={styles.container}>
            <Text>Ola do menu</Text>
        </View>
    );
}