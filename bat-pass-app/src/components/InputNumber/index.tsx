import { View, Text, Pressable, TextInput } from 'react-native';
import { useRef } from 'react';
import styles from './InputNumberStyles';

interface InputNumberProps {
    value: number;
    setValue: (newValue: number) => void;
    min: number;
    max: number;
    step: number;
}

const InputNumber = ({ value, setValue, min, max, step }: InputNumberProps) => {
    const inputRef = useRef<TextInput>(null);

    const handleIncrement = () => {
        inputRef.current?.blur();
        setValue(Math.min(value + step, max));
    };

    const handleDecrement = () => {
        inputRef.current?.blur();
        setValue(Math.max(value - step, min));
    };

    const handleTextChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, '');

        if (cleaned === '') {
            setValue(min);
            return;
        }

        let num = Number(cleaned);

        // aplica limites
        if (num < min) num = min;
        if (num > max) num = max;

        setValue(num);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleDecrement}>
                <Text style={styles.text}>-</Text>
            </Pressable>

            <TextInput
                ref={inputRef}
                keyboardType="numeric"
                textAlign="center"
                style={styles.inputer}
                value={value.toString()}
                onChangeText={handleTextChange}
            />

            <Pressable onPress={handleIncrement}>
                <Text style={styles.text}>+</Text>
            </Pressable>
        </View>
    );
};

export default InputNumber;
