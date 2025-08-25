import { View, Text, Switch, Pressable, TextInput } from 'react-native';
import styles from './InputNumberStyles';

interface InputNumberProps {
    value: number,
    setValue: (newValue: number) => void,
    min: number,
    max: number,
    step: number
}

const InputNumber = ({
    value, setValue, min, max, step
}: InputNumberProps) => {
    const handleIncrement = () => {
        if (value < max) {
            setValue(value + step);
        }
    };
    const handleDecrement = () => {
        if (value > min) {
            setValue(value - step);
        }
    };

    const handleTextChange = (text: string) => {
        // Remove caracteres não numéricos
        const cleaned = text.replace(/[^0-9]/g, '');
        const num = parseInt(cleaned, 10);
        // Só atualiza se for um número válido e estiver dentro dos limites
        if (!isNaN(num) && num >= min && num <= max) {
            setValue(num);
        } else if (cleaned === '') {
            // Permite campo vazio temporariamente
            setValue(min); // Ou mantenha o valor atual, dependendo do comportamento desejado
        }
    };
    return (
        <Pressable style={styles.container}>

            <Pressable onPress={handleDecrement} >
                <Text style={styles.text}>-</Text>
            </Pressable>
            <TextInput keyboardType="numeric"
                placeholder={min.toString()}
                textAlign="center"
                style={styles.inputer} value={value.toString()}
                onChangeText={handleTextChange}
            />
            <Pressable onPress={handleIncrement} >
                <Text style={styles.text}>+</Text>
            </Pressable>
        </Pressable >
    );
};
export default InputNumber