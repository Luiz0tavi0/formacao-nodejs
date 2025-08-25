
const generatePassword = () => {

    let password: string = ''
    let characters: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    const PASSWORD_LENGTH = 8

    while (password.length < PASSWORD_LENGTH) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}

export default generatePassword