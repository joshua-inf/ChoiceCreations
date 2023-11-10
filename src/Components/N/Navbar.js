import { Link } from 'react-router-dom'
import logo from '../../images/choice.png'
const Nav = () => {
    return(
        <div className='mynav-cont p-4'>
        <div className='d-flex justify-content-between mynav'  style={{}}>
            <Link>
                <img src={logo}  width='200px'/>
            </Link>
            <div className='links d-none d-lg-block'>
                <Link to='/'>Home</Link>
                <Link>What We Do</Link>
                <Link>Our Portfolio</Link>
                <Link>Our Products</Link>
                <Link to='/ContactUs'>Contact Us</Link>
            </div>
        </div>
        </div>
    )
}

export default Nav