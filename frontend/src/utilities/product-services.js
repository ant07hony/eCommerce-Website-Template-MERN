import * as productAPI from './product-api'

export async function getProducts() {
    try{
        const request = await productAPI.index()
        // console.log('getProduct find: ',request)
        return request
        
    } catch(error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function getProduct(id) {
    try{
        const productDetails = await productAPI.details(id)
        // console.log(`Product id: ${productDetails}`)
        return productDetails

    }catch(error){
        console.log(error)
        throw new Error(error)
    }
}