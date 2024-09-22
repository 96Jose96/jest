let products = []
let id = 0

const resetProducts = () => {
    products = []
    id = 0
}

const getProducts = () => {
    return products
}

const addProduct = (name, price) => {
   
    if (!name || typeof name !== 'string') {
        throw new Error('Name required and must be a string.');
    }
    if (price === undefined || typeof price !== 'number') {
        throw new Error('Price required and must be a number');
    }
    
    const exists = products.some(product => product.name === name);
    if (exists) {
        throw new Error('Product already exists');
    }

    id++;
    const product = {
        id: id,
        name: name,
        price: `${price}€`
    };
    products.push(product);
};

const removeProduct = (id) => {
    const exists = products.some(products => products.id === id)

    if(!exists) {
        throw new Error('Product doesnt exists')
    }
    products = products.filter(product => product.id !== id)
}

const getProduct = (id) => {
    const product = products.find(product => product.id === id)

    if(!product) {
        throw new Error('Product doesnt exists')
    }
    return product
}

const updateProduct = (id, name, price) => {
    const product = products.find(product => product.id === id);

    if (!product) {
        throw new Error('Product doesnt exists');
    }

    product.name = name;
    product.price = `${price}€`

    return product
};

module.exports = {
    addProduct,
    removeProduct,
    getProducts,
    resetProducts,
    getProduct,
    updateProduct,
    products,
    id
}
