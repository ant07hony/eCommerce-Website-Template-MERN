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

function dropdownMenu() {



}

const NavTop = (props) => {

    return (
        <nav className='nav-global-top'>

            <div className='logo-anchor'>
                <Link to='/'>
                    Logo
                </Link>
            </div>

            <div className='hamburger-dropdown-menu'>

                <div className='hamburger-menu'>

                    <div className='hamburger-menu-line'>
                    </div>

                    <div className='hamburger-menu-line'>
                    </div>

                    <div className='hamburger-menu-line'>
                    </div>

                </div>

                <button
                    type='button'
                    id='dropdownBtn'
                    onClick={dropdownMenu}
                >
                    Menu
                </button>

                <div className='dropdown-menu'>

                    <ul>
                        {/* look up purpose of href used below */}
                        <li href='/'>Home
                            <span className='dropdown-list-arrow'></span>
                        </li>

                        <li href='/products'>Products
                        <span className='dropdown-list-arrow'></span>
                        </li>

                    </ul>

                </div>


            </div>

            <div className='search-bar'>

                <label
                    htmlFor='search'>
                </label>

                <input
                    type='text'
                    id='search'
                    name='search bar' placeholder='What can we help you find today?'
                />

                <button
                    type="submit"
                    id="searchBtn"
                    onClick={handleSearchClick}
                >
                    Search
                </button>

            </div>

            <div className='store-locator'>

                <button>
                    Store Locator
                </button>

            </div>



            <Link
                to='/products/cart'
                className='cart'
            >
                Cart
            </Link>



        </nav>
    )
}

const NavBottom = (props) => {
    return (
        <nav className='nav-global-bottom'>
            <ol>
                <li>
                    <a>Top Deals</a>
                </li>
                <li>
                    <a>Deals of the Day</a>
                </li>
            </ol>
        </nav>
    )
}

export default function Header(props) {
    return (
        <header className="Header-container">

            <NavTop />
            <NavBottom />

            {/* <img src={headerImage || headerImage}/> */}
            {/* <h1>Header</h1> */}

        </header>)
}