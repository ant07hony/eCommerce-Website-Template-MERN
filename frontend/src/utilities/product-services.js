import * as productAPI from './product-api'

// GET ALL PRODUCTS
export async function getProducts() {
    try{

        const request = await productAPI.index()
        console.log('getProduct find: ',request)
        return request
        
    } catch(error) {
        console.log(error)
        return error
    }
}

// CREATE A NEW PRODUCT
export async function createProduct(data) {
    try {
        
        const productData = await productAPI.create(data)
        return productData

    }catch(error){
        console.log(error)
        return error
    }
}

// GET DETAILS OF A PRODUCT
export async function getProduct(id) {
    try{

        const productDetails = await productAPI.details(id)
        // console.log(`Product id: ${productDetails}`)
        return productDetails

    }catch(error){
        console.log(error)
        return error
    }
}

// UPDATE A PRODUCT
export async function updateProduct(id, data) {
    try{

        const updateProduct = await productAPI.update(id, data)
        return updateProduct

    }catch(error){
        console.log(error)
        return error
    }
}

// DELETE A PRODUCT
export async function deleteProduct(id) {
    try{

        const deletedProduct = await productAPI.destroy(id)
        return deletedProduct

    }catch(error) {
        console.log(error)
        return error
    }
}