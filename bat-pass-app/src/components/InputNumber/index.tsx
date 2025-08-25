import { View, Text, Pressable, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './InputNumberStyles';

interface InputNumberProps {
    value: number;
    setValue: (newValue: number) => void;
    min: number;
    max: number;
    step: number;
}

const InputNumber = ({ value, setValue, min, max, step }: InputNumberProps) => {
    const [inputText, setInputText] = useState(value.toString());
    const inputRef = useRef<TextInput>(null);

    // mantém o input em sincronia quando o valor externo mudar
    useEffect(() => {
        setInputText(value.toString());
    }, [value]);

    const updateValue = (newValue: number) => {
        const clamped = Math.min(Math.max(newValue, min), max);
        setValue(clamped);
    };

    const handleIncrement = () => {
        inputRef.current?.blur(); // força encerrar edição antes
        if (value < max) updateValue(value + step);
    };

    const handleDecrement = () => {
        inputRef.current?.blur(); // força encerrar edição antes
        if (value > min) updateValue(value - step);
    };

    const handleTextChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, '');
        setInputText(cleaned);
    };

    const validateAndUpdate = () => {
        if (inputText === '') {
            updateValue(min);
            return;
        }

        const num = parseInt(inputText, 10);
        if (!isNaN(num)) {
            updateValue(num);
        } else {
            setInputText(value.toString());
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleDecrement}>
                <Text style={styles.text}>-</Text>
            </Pressable>

            <TextInput
                ref={inputRef}
                keyboardType="numeric"
                placeholder={min.toString()}
                textAlign="center"
                style={styles.inputer}
                value={inputText}
                onChangeText={handleTextChange}
                onEndEditing={validateAndUpdate} 
                onFocus={() => setInputText(value.toString())}
            />

            <Pressable onPress={handleIncrement}>
                <Text style={styles.text}>+</Text>
            </Pressable>
        </View>
    );
};

export default InputNumber;
