import { Link } from 'react-router-dom'
import logo from '../../images/choice.png'
const Nav = () => {
    return(
        <div className='mynav-cont p-4'>
        <div className='d-flex justify-content-between mynav'  style={{}}>
            <Link>
                <img src={logo}  width='200px'/>
            </Link>
            <div className='links'>
                <Link>Home</Link>
                <Link>What We Do</Link>
                <Link>Our Portfolio</Link>
                <Link>Our Products</Link>
                <Link>Contact Us</Link>
            </div>
        </div>
        </div>
    )
}

export default Nav