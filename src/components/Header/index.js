import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }

  const getColor = current => {
    const {history} = props
    if (history.location.pathname === current) {
      return '#f7931e'
    }
    return '#334155'
  }

  return (
    <nav className="nav-header">
      <div className="nav-bar-large-container">
        <div className="icon-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dm4o2tuyu/image/upload/v1639382999/Vector_yumvdx.png"
              alt="website logo"
            />
          </Link>
          <h1 className="icon-heading">Tasty Kitchens</h1>
        </div>

        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li className="nav-menu-item" style={{color: getColor('/')}}>
              Home
            </li>
          </Link>

          <Link to="/cart" className="nav-link">
            <li className="nav-menu-item" style={{color: getColor('/cart')}}>
              Cart
            </li>
          </Link>
          <li>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
        <Popup
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={25} className="hamburger" />
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <div className="nav-link-container">
                <Link to="/" className="nav-link">
                  <p className="nav-menu-item" style={{color: getColor('/')}}>
                    Home
                  </p>
                </Link>
                <Link to="/cart" className="nav-link">
                  <p
                    className="nav-menu-item"
                    style={{color: getColor('/cart')}}
                  >
                    Cart
                  </p>
                </Link>
                <button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </div>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default withRouter(Header)
