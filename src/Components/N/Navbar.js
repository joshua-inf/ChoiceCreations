import { Link } from 'react-router-dom'
import logo from '../../images/choice.png'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    const [navbar, setNavbar] = useState(false)
    const [thatnav, setThatnav] = useState(false)


    const DropNav = () => {
        setThatnav(!thatnav)
    }

    try{
        if(thatnav){
            document.getElementById('Links').style.height = "180px"
        } else {
            document.getElementById('Links').style.height = "0px"
        }
    } catch {
    }


    let mynav = document.querySelector('mynav-cont');
    let myscroll = window.scrollY

    const changebackground = () => {
        if (window.scrollY > 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    let status = true;


    window.addEventListener('scroll', changebackground);


   

    return (
        <div id='' className={`p-3 ${navbar ? 'mycontbackg' : 'mycontbackg2'}`} style={{ zIndex: 4,  }}>
            <div className='d-flex justify-content-between mynav'  >
                <div className='d-flex justify-content-between'>
                    <Link>
                        <img src={logo} width='200px' />
                    </Link>
                    <GiHamburgerMenu  onClick={() => DropNav()} className='btn btnshow' size={60} color='white' />
                </div>
                <div id='Links' className='links d-lg-block'>
                    <Link to='/'>Home</Link>
                    <Link to='/WhatWeDo'>What We Do</Link>
                    <Link to='/OurPortfolio'>Our Portfolio</Link>
                    <Link to='/OurProducts'>Our Products</Link>
                    <Link to='/ContactUs'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav