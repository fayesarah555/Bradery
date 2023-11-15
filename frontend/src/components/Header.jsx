import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
// , FaSignOutAlt
function Header() {
  return (
    <>
    <header className='header'>
        <div className="logo">
            <Link to='/'>The Bradery</Link>
        </div>
        <ul>
            <li>
            <Link to="/login">
                <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
            <Link to="/register">
                <FaUser /> Register 
                </Link>
            </li>

        </ul>
    </header>
    </>
  )
}

export default Header