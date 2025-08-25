import React from 'react';
import { Image, View, Text } from 'react-native';
import batLogo from '../../../assets/bat-logo.png'
import { styles } from './BatLogoStyles';


export default function BatLogo() {
    return (
        <>
            <Text style={styles.title}>BAT PASS GENERATOR</Text>
            <Image style={styles.logo} source={batLogo}></Image>
        </>
    );
}