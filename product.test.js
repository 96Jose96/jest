const {
    addProduct,
    removeProduct,
    getProducts,
    resetProducts,
    getProduct,
    updateProduct,
    products,
    id
} = require('./product')

describe('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });
    it('should add new product on products', () => {
        expect(addProduct('pollo', 10)).toBe()
    })
})