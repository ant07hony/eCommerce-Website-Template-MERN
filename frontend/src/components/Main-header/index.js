import './Main-header.css'

export default function MainHeader(props){
    return (
        <header className='Main-header'>

            <ol>
                <li>
                    <a>Top Deals</a>
                </li>
                <li>
                    <a>Deals of the Day</a>
                </li>
            </ol>

            {/* <div className='Main-header-left-side'>
            </div>

            <div className='Main-header-right-side'>
            </div> */}

        </header>
    )
}