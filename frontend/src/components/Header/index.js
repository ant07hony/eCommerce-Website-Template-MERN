import './Header.css'
import {Link} from 'react-router-dom'


// Header Image
const headerImage  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs5e27yKYV8xmUsT-sRaZ0xWPKc47XrPNlw&usqp=CAU"

const Nav = (props) => {
    return (
        <nav className='nav-global'>
            <Link to="/">Logo(Home)</Link>
              
        </nav>
    )
}

export default function Header(props){
    return (
    <header className="Header-container">
        <Nav/>
        {/* <img src={headerImage || headerImage}/> */}
        <h1>Header</h1>
    </header>)
}