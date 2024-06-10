import { LOGO_URL } from '../utils/imgUrls'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex justify-between bg-amber-100 px-12'>
            <div className='logo'>
                <img className='w-28' src={LOGO_URL} />
            </div>

            <ul className='flex justify-around w-80' >
                <li className="self-center"><Link to="./">Home</Link></li>
                <li className="self-center"><Link to="./about">About</Link></li>
                <li className="self-center"><Link to="./contact">Contact</Link></li>
                <li className="self-center">Cart</li>
            </ul>

        </div>
    )
}

export default Header;