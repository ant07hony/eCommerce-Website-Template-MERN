import './Home.css'
import { useState } from 'react'

export default function Home(props) {

    const [isLoading, setIsLoading] = useState(false)

    const loaded = () => {
        return (
            <div className='home-page'>

                <div className='home-page-wrapper-1'>

                    <h1>
                    Area designated for the first Homepage wrapper
                    </h1>

                </div>

                <div className='home-page-carousel'>

                    <h1>
                        Area designated for a the Home page carousel
                    </h1>

                </div>

            </div>
        )
    }

    const loading = () => {
        return (
            <div className='loading-home-page'>
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

        <div className='Home-page'>
            {isLoading ? loading() : loaded()}
        </div>
    )
}