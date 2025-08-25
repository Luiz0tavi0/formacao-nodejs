import { TextInput, View } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
    pass: string

}
const BatTextInput = (props: BatTextInputProps) => {
    return <TextInput multiline={false} style={styles.inputer} placeholder='pass' value={props.pass} />
}
export default BatTextInput