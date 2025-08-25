import CheckBox from './../CheckBox';
import { View } from 'react-native';
import styles from './ConfigSectionStyles';
import { Config, ConfigSectionProps } from 'screens/Home';
import InputNumber from './../InputNumber';



const ConfigSection = ({ config, setConfig }: ConfigSectionProps) => {
    const makeBooleanState = (key: 'alphabetic' | 'numeric' | 'specialCharacters') => ({
        value: config[key],
        toggle: () => setConfig({ ...config, [key]: !config[key] }),
    });

    const handleNumberCharactersChange = (newValue: number) => {
        setConfig({
            ...config,
            numberOfChararcters: newValue // Fixed typo
        });
    };

    return (
        <View style={styles.container}>
            <View >
                <CheckBox
                    key='alphabetic'
                    label="Alphabetic"
                    state={makeBooleanState('alphabetic')}
                />
                <CheckBox
                    key='numeric'
                    label="Numeric"
                    state={makeBooleanState('numeric')}
                />
                <CheckBox
                    key='specialCharacters'
                    label="Special Characters"
                    state={makeBooleanState('specialCharacters')}
                />
            </View>
            <InputNumber
                max={25}
                min={8}
                step={1}
                value={config.numberOfChararcters}
                setValue={handleNumberCharactersChange}
            />
        </View>
    );
};

export default ConfigSection;
