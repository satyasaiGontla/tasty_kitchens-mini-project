import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dm4o2tuyu/image/upload/v1639533730/erroring_1_vr2z5i.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found <br /> Please go
        back to the homepage
      </p>
      <Link to="/">
        <button type="button" className="home-btn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
