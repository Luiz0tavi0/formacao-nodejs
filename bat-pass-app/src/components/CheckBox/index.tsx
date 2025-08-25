import { View, Text, Switch, Pressable } from 'react-native';
import styles from './CheckBoxStyles';

interface CheckBoxProps {
    label: string;
    state: {
        value: boolean;
        toggle: () => void;
    };
}

const CheckBox = ({ label, state }: CheckBoxProps) => {
    return (
        <Pressable style={styles.container} onPress={state.toggle}>
            <Text style={styles.text}>{label}</Text>
            <Switch
                trackColor={
                    {
                        true: '#E5Df3C',
                        false: '#e5df3c20'
                    }
                }
                thumbColor={state.value ? '#242423' : '#cdcba24c'}
                style={styles.switch}
                value={state.value}
                onValueChange={state.toggle}
            />
        </Pressable>
    );
};

export default CheckBox;