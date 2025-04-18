import './header.css'


function Header(){
    return(
        <header className='header'>
            <img className= 'react-img' src = "/react.svg" alt="react logo" />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header