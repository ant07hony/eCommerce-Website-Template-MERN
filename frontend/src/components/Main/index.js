import './Main.css'
import { Routes, Route } from 'react-router'
import MainHeader from '../Main-header'
import Home from '../../pages/Home'
import Auth from '../../pages/Auth'
import Product from '../../pages/Product'
import Show from '../../pages/Show'
import Cart from '../../pages/Cart'
import Profile from '../../pages/Profile'
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
                        path='/auth'
                        element={<Auth />} 
                    />

                    <Route
                        path="/products"
                        element={<Product />}
                    />

                    <Route
                        path="/product/:id"
                        element={<Show />}
                    />

                    <Route
                        path="/products/cart"
                        element={<Cart />}
                    />

                    <Route 
                        path='/profile'
                        element={<Profile />}
                    />

                </Routes>
            </div>

            {/* <div className='Main-footer'>

                <Footer />

            </div> */}

        </main>
    )
}