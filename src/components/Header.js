import {LOGO_URL} from '../utils/imgUrls'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header' style={{}}>
            <div className='logo'>
                <img className='logo-img' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./about">About</Link></li>
                    <li><Link to="./contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;