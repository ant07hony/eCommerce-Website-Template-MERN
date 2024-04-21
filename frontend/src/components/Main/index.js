import './Main.css'
import MainHeader from '../Main-header'
import { Routes, Route } from 'react-router'
import Home from '../../pages/Home'
import Product from '../../pages/Product'
import Show from '../../pages/Show'
import Footer from '../Footer'

export default function Main(props) {
    return (
        <main className='Main-container'>

            {/* <MainHeader /> */}
           
            <div className='Main-container-top'>
                <Routes>

                    <Route 
                    path="/" 
                    element={<Home />}
                    />

                    <Route 
                    path="/products" 
                    element={<Product />}
                    />

                    <Route
                    path="/product/:id" 
                    element={<Show />}
                    />

                </Routes>
            </div>

            {/* <div className='Main-footer'>

                <Footer />

            </div> */}
            
        </main>
    )
}