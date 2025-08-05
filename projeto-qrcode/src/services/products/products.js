import { products } from './utils.js';

async function getProductByEAN(eanCod) {
    const product = products[eanCod];
    return product;
}
export default getProductByEAN