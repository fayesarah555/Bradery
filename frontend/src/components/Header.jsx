import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='header'>
        <div className="logo">
            <Link to='/'>The Bradery</Link>
        </div>
        <ul>
            <li>
                <Link>
                <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link>
                <FaUser /> Register 
                </Link>
            </li>

        </ul>
    </header>
    </>
  )
}

export default Header