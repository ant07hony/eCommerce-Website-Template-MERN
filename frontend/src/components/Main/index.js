import './Main.css'
import {Routes, Route} from 'react-router'
import Product from '../../pages/Product'
import Show from '../../pages/Show'

export default function Main(props){
    return (
    <main className='Main-container'>
        <h1>Main</h1>
        <Routes>
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<Show/>} />
        </Routes>
    </main>
    )
}