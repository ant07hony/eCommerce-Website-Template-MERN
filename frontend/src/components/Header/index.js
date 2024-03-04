import './Header.css'
import { Link } from 'react-router-dom'


// Header Image
const headerImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs5e27yKYV8xmUsT-sRaZ0xWPKc47XrPNlw&usqp=CAU"

// const handleChange = (e) => {
//     e.target.value
// }

// variable for search input fiels button
const searchBtn = document.getElementById('searchBtn')

// searchBtn.addEventListener('click',searchSuccessfulMessage)

function handleClick() {
    // variable for search input field
    // const searchInput = document.getElementById('search').innerHTML
    alert('Successful Button Click!')}

const Nav = (props) => {
    
    return (
        <nav className='nav-global'>
            <div className='logo-anchor'>
                <Link to="/">Logo</Link>
            </div>

            <div className='hamburger-menu'>
                <div className='dropdown-menu'>
                    <div className='hamburger-menu-line'></div>
                    <div className='hamburger-menu-line'></div>
                    <div className='hamburger-menu-line'></div>
                </div>
                <button>
                    Menu
                </button>
            </div>

            <div className='search-bar'>
                <label 
                htmlFor='search'>
                </label>
                <input 
                type='text' 
                id='search' 
                name='search bar'  placeholder='What can we help you find today?' />
                <button type="submit" id="searchBtn"
                onClick={handleClick}>Search</button>
                
            </div>

            <div className='store-locator'>
                <button>
                    store locator
                </button>
            </div>

            <div className='cart'>
                <button>
                    cart
                </button>
            </div>

        </nav>
    )
}

export default function Header(props) {
    return (
        <header className="Header-container">
            <Nav />
            {/* <img src={headerImage || headerImage}/> */}
            {/* <h1>Header</h1> */}
        </header>)
}