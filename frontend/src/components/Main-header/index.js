import './Main-header.css'

export default function MainHeader(props){
    return (
        <header className='Main-header'>

            <div className='Main-header-left-side'>
            {/* <a>Top Deals</a>
            <a>Deals of the Day</a> */}
            <ol>
                <li>
                    <a>Top Deals</a>
                </li>
                <li>
                    <a>Deals of the Day</a>
                </li>
            </ol>
            </div>

            <div className='Main-header-right-side'>
            </div>
        </header>
    )
}