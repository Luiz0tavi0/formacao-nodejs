import { useState } from 'react';
import BatTextInput from '../BatTextInput';
import styles from './BatButtonStyles';
import * as Clipboard from 'expo-clipboard';
import { Text, Pressable, View, PressableStateCallbackType } from 'react-native';
import generatePassword from './../../services/passwordService'
import { Config } from 'screens/Home';

interface BatButtonProps {
    config: Config
}

const BatButton = ({ config }: BatButtonProps) => {
    const [password, setPassword] = useState('')

    const handleGenerateButton = () => {
        const generateToken: string = generatePassword()
        setPassword(generateToken)
    }
    const handleCopyButton = () => Clipboard.setStringAsync(password)

    return (
        <>
            <BatTextInput pass={password} />
            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.text} >GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.text}>⚡ COPY</Text>
            </Pressable>
        </>
    )
}

export default BatButton