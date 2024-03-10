import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/N/footer';
import Nav from './Components/N/Navbar';
import Contactus from './Components/ContactUs';
import WhatWeDoPage from './Components/Whatwedo';
import DefautPage from './Components/N/DefautPage.js';


const Renderer = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-dark">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactUs' element={<Contactus />} />
            <Route path='/WhatWeDo' element={<WhatWeDoPage />} />
            <Route path='/OurProducts' element={<DefautPage />} />
            <Route path='/OurPortfolio' element={<DefautPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default Renderer;