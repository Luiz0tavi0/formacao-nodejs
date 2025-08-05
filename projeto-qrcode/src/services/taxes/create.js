import prompt from "prompt";
import promptSchemaTaxesCalculator from './../../prompts-schema/prompt-schema-taxes.js'
import handle from "./handle.js";

const createTaxesCalculator = async () => {
    prompt.start();
    const result = prompt.get(promptSchemaTaxesCalculator, handle)
}

export default createTaxesCalculator;