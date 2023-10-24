import './Main.css'
import { Routes, Route } from 'react-router'
import MainHeader from '../Main-header'
import Footer from '../Footer'
import Product from '../../pages/Product'
import Show from '../../pages/Show'

export default function Main(props) {
    return (
        <main className='Main-container'>
            <MainHeader />
            <div className='Main-container-top'>
                <h1>Main</h1>
                <Routes>
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<Show />} />
                </Routes>
            </div>
            <div className='Main-container-bottom'>
                <Footer />
            </div>
        </main>
    )
}