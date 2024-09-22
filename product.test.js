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
    })
        
    it('should add a new product to products', () => {
        addProduct('monitor', 99)
        const products = getProducts()
        
        expect(products.length).toBe(1)

        expect(products[0]).toEqual({
            id: 1,
            name: 'monitor',
            price: '99€'
        })
    })

    it('should throw an error if the name is not defined', () => {
        expect(() => addProduct(undefined, 99)).toThrow('Name required and must be a string.')
        expect(() => addProduct('', 99)).toThrow('Name required and must be a string')
    })

    it('should throw an error if the price is not defined', () => {
        expect(() => addProduct('monitor')).toThrow('Price required and must be a number')
        expect(() => addProduct('monitor', undefined)).toThrow('Price required and must be a number')
    })

    it('should throw an error if the product already exists', () => {
        addProduct('monitor', 99)
        expect(() => addProduct('monitor', 100)).toThrow('Product already exists')
    })
})



describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('monitor', 99)
    })
        
    it('should remove the product from products by id', () => {
        removeProduct(1)
        const products = getProducts()
        expect(products.length).toBe(0)
    })

    it('Should throw an error if the product doesnt exist', () => {
        removeProduct(1)
        expect(() => removeProduct(1)).toThrow('Product doesnt exists')
    })
})


describe('getProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('monitor', 99)
    })

    it('Should return a product by id', () => {
        const product = getProduct(1)
        expect(product).toEqual({
            id: 1,
            name: 'monitor',
            price: '99€'
        })
    })

    it('Should throw and error if product doesnt exist', () => {
        removeProduct(1)
        expect(() => getProduct(1)).toThrow('Product doesnt exists')
    })
})


describe('Should update a product by id', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('monitor', 99)
    })

    it('Should update a product by id', () => {
        const product = updateProduct(1, 'teclado', 7)
        const products = getProducts()
        expect(product).toEqual({
            id: 1,
            name: 'teclado',
            price:'7€'
        })
        expect(products[0]).toEqual(product)
    })

    it('Should throw and error if product doesnt exist', () => {
        removeProduct(1)
        expect(() => updateProduct(1)).toThrow('Product doesnt exists')
    })
})