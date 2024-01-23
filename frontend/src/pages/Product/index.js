// people information [] - useState
// fetchoing data from BE - useEffect
// loading / loaded state - ???

import { useState, useEffect } from 'react'
import './Product.css'

export default function Product(props) {
    // useState section
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    // async function to get Product
    const getProduct = async () => {
        // fecthing info from this URL
        const BASE_URL = 'http://localhost:4000/product'

        const options = {
            method: 'GET'
        }

        try {
            const response = await fetch(BASE_URL, options)

            const productData = await response.json()

            console.log('The product database: ', productData)

            setProduct(productData)

            setIsLoading(false)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [isLoading])

    const loaded = () => {
        return product?.map((product) => {
            return (
                <div key={product._id}
                    className='product-card'>

                        <img src="/no-product-image.png" alt="No Product Image"></img>

                    <div className='product-card-body'>
                        <h1>{product.name}</h1>

                        <p>{product.description}</p>

                        <h2>{product.price}</h2>

                    </div>

                    <button>Add to Cart</button>

                </div>
            )
        })
    }

    const loading = () => {
        return (<h1>Loading...</h1>)
    }

    return (
        <section className='product-container'>
            {isLoading ? loading() : loaded()}
        </section>)
}