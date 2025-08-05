import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE\n(2- PASSWORD\n(3- CALCULA TAXAS"
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1, 2 e 3"),
    required: true,
  },
];

export default promptSchemaMain;
