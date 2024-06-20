import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='navbar'>
                <div className="leftbox">
                    <ul>
                        <Link className='navHome' to='/Home'>Home</Link>
                    </ul>
                    <ul>About</ul>
                </div>

                <div className="rightbox">
                    <ul>
                        <Link className='navLogin' to='/'>Login</Link>
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Navbar