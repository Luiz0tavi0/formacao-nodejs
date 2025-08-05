import chalk from "chalk";
const promptSchemaTaxesCalculator = [
    {
        name: 'productId', description: chalk.yellow("Digite o identificador (EAN-13) do produto"),
        pattern: /^\d{13}$/,
        required: true,
    }
]
export default promptSchemaTaxesCalculator