// people information [] - useState
// fetching data from BE - useEffect
// loading / loaded state - ???

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../utilities/product-services'
import './Product.css'

export default function Product(props) {
    // useState section
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    // async function to get Product
    // const getProduct = async () => {
    //     // fecthing info from this URL
    //     const BASE_URL = 'http://localhost:4000/product'

    //     const options = {
    //         method: 'GET'
    //     }

    //     try {
    //         const response = await fetch(BASE_URL, options)

    //         const productData = await response.json()

    //         console.log('The product database: ', productData)

    //         setProduct(productData)

    //         setIsLoading(false)


    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getProduct()
    // }, [isLoading])
    async function handleApiRequest() {
        try {
            const apiRepsonse = await getProducts()
            // console.log('API response',apiRepsonse)

            setProduct(apiRepsonse)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleApiRequest()
    }, [isLoading])

    // handle onclick event on 'Add to Cart' button to add product to 1) redirect to Cart page and 2) add product to Cart page

    const loaded = () => {
        return product?.map((product) => {
            return (
                <div key={product._id}
                    className='product-card'>

                    <Link to={`/product/${product._id}`}>

                        <div className='product-card-flex-column-top'>
                            <img src="/no-product-image.png" alt="No Product Image"></img>
                        </div>

                    </Link>

                    <div className='product-card-flex-column-middle'>
                        <Link to={`/product/${product._id}`}>
                            <h1>This h1 slot is designated for product name (<span className='fetch-data'>{product.name}</span>)</h1>
                        </Link>

                        <p>This p slot is designated for product description: {product.description} </p>

                    </div>

                    <div className='product-card-flex-column-right'>
                        <h2>{product.price}</h2>

                        <Link to={``}>
                            <button>Add to Cart</button>
                        </Link>

                    </div>

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