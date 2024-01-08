import './Header.css'
import {Link} from 'react-router-dom'


// Header Image
const headerImage  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs5e27yKYV8xmUsT-sRaZ0xWPKc47XrPNlw&usqp=CAU"

const Nav = (props) => {
    return (
        <nav className='nav-global'>
            <Link to="/">Logo(Home)</Link>
            <button className='hamburger-menu'>
                <h1>Ham Menu</h1>
            </button>
            <label for='search'></label>
            <input type='text' id='search' name='search bar' value='Search'/>
            <button className='store-locator'>
                <h1>store locator</h1>
            </button>
            <button className='cart'>
                <h1>cart</h1>
            </button>
              
        </nav>
    )
}

export default function Header(props){
    return (
    <header className="Header-container">
        <Nav/>
        {/* <img src={headerImage || headerImage}/> */}
        {/* <h1>Header</h1> */}
    </header>)
}