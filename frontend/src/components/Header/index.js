import './Header.css'
import { Link } from 'react-router-dom'


// Header Image
const headerImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs5e27yKYV8xmUsT-sRaZ0xWPKc47XrPNlw&usqp=CAU"

function handleSearchClick() {
    // variable for search input field value
    const searchInputValue = document.getElementById('search').value

    // alert box displaying search input field value
    alert(`Searching for: ${searchInputValue}`)
    // console.log(searchInputValue)
}

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
                onClick={handleSearchClick}>Search</button>
                
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