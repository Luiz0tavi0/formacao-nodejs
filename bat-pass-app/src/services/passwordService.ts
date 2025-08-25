import { Config } from "screens/Home"

const generatePassword = (config: Config) => {
    let password: string = ''
    let possibleCharacters: string = ''
    const { numberOfChararcters, alphabetic, numeric, specialCharacters } = config;
    
    if (alphabetic)
        possibleCharacters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numeric)
        possibleCharacters += '0123456789';
    if (specialCharacters)
        possibleCharacters += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


    while (password.length < numberOfChararcters) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
    }
    return password
}

export default generatePassword