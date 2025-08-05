const products = {
    "7894900011517": { name: "Café Pilão 500g", category: "Alimentos", price: 12.90 },
    "7891000055120": { name: "Leite Itambé Integral 1L", category: "Bebidas", price: 4.50 },
    "7891910000197": { name: "Guaraná Antarctica 2L", category: "Bebidas", price: 7.99 },
    "7894900700023": { name: "Arroz Tio João 5kg", category: "Alimentos", price: 25.90 },
    "7896019600038": { name: "Sabonete Dove 90g", category: "Higiene", price: 3.50 },
    "7891910000463": { name: "Cerveja Skol 350ml", category: "Bebidas", price: 2.80 },
    "4006381333931": { name: "Caneta Bic Azul", category: "Papelaria", price: 2.50 },
    "8410031960500": { name: "Azeite Gallo 500ml", category: "Alimentos", price: 24.90 },
    "8809269500016": { name: "Celular Samsung Galaxy S23", category: "Eletrônicos", price: 4999.00 },
    "6920702700010": { name: "Fone de Ouvido Xiaomi Redmi Buds", category: "Eletrônicos", price: 199.90 },
    "8999999001234": { name: "Camiseta Nike Dry-Fit", category: "Vestuário", price: 129.90 },
    "0001234567895": { name: "Produto Genérico", category: "Diversos", price: 9.99 }
};

const taxesByCountry = {
    "000": { country: "EUA/Canadá (UPC)", tax: 8 },
    "380": { country: "Bulgária", tax: 20 },
    "400": { country: "Alemanha", tax: 19 },
    "460": { country: "Rússia", tax: 20 },
    "471": { country: "Taiwan", tax: 5 },
    "480": { country: "Filipinas", tax: 12 },
    "489": { country: "Hong Kong", tax: 0 },
    "500": { country: "Reino Unido", tax: 20 },
    "529": { country: "Chipre", tax: 19 },
    "560": { country: "Portugal", tax: 23 },
    "569": { country: "Islândia", tax: 24 },
    "570": { country: "Dinamarca", tax: 25 },
    "590": { country: "Polônia", tax: 23 },
    "600": { country: "África do Sul", tax: 15 },
    "640": { country: "Finlândia", tax: 24 },
    "690": { country: "China", tax: 13 },
    "729": { country: "Israel", tax: 17 },
    "740": { country: "Guatemala", tax: 12 },
    "770": { country: "Colômbia", tax: 19 },
    "780": { country: "Chile", tax: 19 },
    "789": { country: "Brasil", tax: 17 },
    "800": { country: "Itália", tax: 22 },
    "840": { country: "Espanha", tax: 21 },
    "880": { country: "Coreia do Sul", tax: 10 },
    "890": { country: "Índia", tax: 18 },
    "900": { country: "Áustria", tax: 20 }
};

// const ean = "7894900011517";
// const prefixoPais = ean.substring(0, 3);

// console.log("Produto:", products[ean]);
// console.log("Imposto do país:", taxaPorPais[prefixoPais]);

export { products, taxesByCountry }