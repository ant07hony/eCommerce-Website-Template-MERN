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

// function to toggle open dropdown menu when clicking hamburger menu/button
function openDropdownMenu() {

    const activateDropdownMenu = document.getElementById("activate-menu");
    const deactivateDropdownMenu = document.getElementById("deactivate-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // condition to toggle dropdown menu using hamburger menu/button
    if (activateDropdownMenu.style.display != "none") {
        activateDropdownMenu.style.display = "none";
        deactivateDropdownMenu.style.visibility = "visible";
        dropdownMenu.style.visibility = "visible"
    }
    else if (activateDropdownMenu.style.display != "flex") {
        // close dropdown menu when clicking outside hamburger menu container
        window.addEventListener('click', function () {
            activateDropdownMenu.style.display = "flex";
            deactivateDropdownMenu.style.visibility = "hidden";
            dropdownMenu.style.visibility = "hidden";
        }, true)
    }
    else {
        // default position of dropdown menu
        activateDropdownMenu.style.display = "flex";
        deactivateDropdownMenu.style.visibility = "hidden";
        dropdownMenu.style.visibility = "hidden";

    }
}


// condition to return dropdown menu to default condition when mouse click document window
function dropdownContent() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const activateDropdownMenu = document.getElementById("activate-menu");
    const deactivateDropdownMenu = document.getElementById("deactivate-menu");

    dropdownMenu.classList.toggle('hide');

    if (dropdownMenu.classList.contains('hide')) {
        activateDropdownMenu.style.display = 'flex';
        deactivateDropdownMenu.style.visibility = "hidden";
        dropdownMenu.style.visibility = "hidden";
    }
}

window.onload = function () {
    const hamburgerMenu = document.getElementById('hamDroMnu');
    hamburgerMenu.addEventListener('click', openDropdownMenu);

}

document.addEventListener('click', function () {
    
    dropdownContent()
})

const NavTop = (props) => {

    return (
        <nav className='nav-global-top'>

            <div className='logo-anchor'>
                <Link to='/'>
                    Logo
                </Link>
            </div>

            <div
                className='hamburger-dropdown-menu'
                id='hamDroMnu'
            // onClick={openDropdownMenu}
            // onClick={dropdownContent}
            >


                <div className='hamburger-menu' id='hamburger-menu'>

                    <div className='activate-hamburger-menu' id='activate-menu'>

                        <div className='hamburger-menu-line'>
                        </div>

                        <div className='hamburger-menu-line'>
                        </div>

                        <div className='hamburger-menu-line'>
                        </div>

                    </div>

                    <div className='deactivate-hamburger-menu' id='deactivate-menu'>

                        <div className='left-line'></div>

                        <div className='right-line'></div>

                    </div>

                </div>

                <button
                    type='button'
                    id='dropdownBtn'
                >
                    Menu
                </button>

                <div className='dropdown-menu' id='dropdown-menu'>

                    <div className='active-hamburger-menu-triangle-tab'>
                    </div>
                    {/* need to switch out lists with anchors */}
                    {/* <a href='/'>Home</a> */}
                    <ul>
                        {/* look up purpose of href used below */}
                        <li href='/'>Home
                            <span className='dropdown-list-arrow'></span>
                        </li>

                        <li href=''>Products
                            <span className='dropdown-list-arrow'></span>
                        </li>

                        <li href=''>Cart
                            <span className='dropdown-list-arrow'></span>
                        </li>

                        <li href=''>Contact Us
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