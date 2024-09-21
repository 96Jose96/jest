let products = []
let id = 0

const resetProducts = () => {
    products = []
    id = 0
}

const getProducts = () => {
    console.log(products)
}

const addProduct = (name, price) => {
    id++
    const product = {
        id: id,
        name: name,
        price: `${price}€`
    }

    products.push(product)
}

const removeProduct = (id) => {
    products = products.filter(product => product.id !== id)
}

const getProduct = (id) => {
    console.log(products.filter(product => product.id === id))
}

const updateProduct = (id, name, price) => {
    products.forEach(product => {
        if (product.id === id) {
            product.name = name;
            product.price = price;
        }
    });
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
