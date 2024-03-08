import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../../utilities/product-services'
import { useParams } from 'react-router-dom'
import './Show.css'

export default function Show(props) {

    const { id } = useParams()
    console.log(`DocumentID: ${id}`)
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function handleApiRequest() {
        try {
            const productData = await getProduct(id)
            console.log(productData)
            setProduct(productData)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleApiRequest()
    }, [])

    const loaded = () => {
        return (
            <div className='show-page'>

                <h1>Show Page</h1>
                
                <div className='product-section'>
                    <div className='product-image-about-description-col'>
                        <img src={product.image}
                            alt={`Image of ${product.name}`}
                        />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                    </div>

                    <div className='product-title-shipping-cart-col'>

                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className='loading-product-page'>
                <h1>
                    Loading...
                    <span>
                        <img className='loading-spinner' src='https://freesvg.org/img/1544764567.png'
                            alt='loading spinner'
                        />
                    </span>
                </h1>

            </div>
        )
    }

    return (
        <div className='product-show-card'>
            {isLoading ? loading() : loaded()}
        </div>
    )
}