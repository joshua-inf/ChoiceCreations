import { Link } from 'react-router-dom'
import logo from '../../images/choice.png'
import { useState } from 'react';
const Nav = () => {
    const [navbar, setNavbar] = useState(false)


let mynav = document.querySelector('mynav-cont');
let myscroll = window.scrollY

const changebackground = () => {
    if (window.scrollY > 80){
        setNavbar(true)
    } else {
        setNavbar(false)
    }
}

let status = true;


window.addEventListener('scroll', changebackground);

    return(
        <div id='' className={`p-3 ${navbar ? 'mycontbackg' : 'mycontbackg2'}`}>
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