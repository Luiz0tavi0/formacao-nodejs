import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";
import styles from './Style';
import BatLogo from './../../components/BatLogo';
import BatButton from '../../components/BatButton'
import { useState } from 'react';
import ConfigSection from 'components/ConfigSection';

export interface Config {
    alphabetic: boolean;
    numeric: boolean;
    specialCharacters: boolean;
    numberOfChararcters: number
}

export interface ConfigSectionProps {
    config: Config;
    setConfig: (newConfig: Config) => void;
}

export default function Home() {
    const [baseConfig, setConfig] = useState<Config>(
        {
            alphabetic: true,
            numeric: false,
            specialCharacters: false,
            numberOfChararcters: 8
        }
    );

    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <ConfigSection config={baseConfig} setConfig={setConfig} />
            <View style={styles.inputContainer}>
                <BatButton config={baseConfig} />
            </View>

            <StatusBar style="light" />
        </View>)
}

