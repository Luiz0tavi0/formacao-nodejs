import { taxesByCountry } from './utils.js'

async function getTaxByEAN(eanCod) {
    const decinalTax = taxesByCountry[Number(eanCod.substr(0, 3))];
    return decinalTax;
}
export default getTaxByEAN;