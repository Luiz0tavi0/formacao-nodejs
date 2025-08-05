import getProductByEAN from './../../services/products/products.js';
import getTaxByEAN from './../../services/products/taxes.js';
import chalk from 'chalk';

const handle = async (err, result) => {
    if (err) {
        console.log("error on application");
        return;
    }
    const eanCod = result.productId
    const taxCountry = await getTaxByEAN(eanCod);
    if (!taxCountry) {
        console.log(chalk.red.bold("País não encontrado"));
        return;
    }


    const { country, tax } = taxCountry;
    const product = await getProductByEAN(eanCod);
    if (!product) {
        console.log(chalk.red.bold("Produto não encontrado"));
        return;
    }

    const { name: name_product, category, price } = product;
    const taxPercent = (tax / 100.00)
    console.log(chalk.green.bold(`País: ${country}`));
    console.log(chalk.green(`Produto: ${name_product}\n\tPreço: ${price}\n\tCategoria: ${category}`));
    console.log(chalk.green(`Taxa para paisXproduto: ${taxPercent.toFixed(3)}`));
    const effectiveTax = taxPercent * price;
    console.log(chalk.green(`Taxa efetiva: R$ ${effectiveTax.toFixed(2)}`));
}

export default handle;