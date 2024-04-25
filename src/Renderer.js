import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/N/footer';
import Nav from './Components/N/Navbar';
import Contactus from './Components/ContactUs';
import WhatWeDoPage from './Components/Whatwedo';
import DefautPages from './Components/N/DefautPages';
import { ScrollToTop } from './Components/componentsmotion/ScrollToTop';
import OurPortfolio from './Components/Ourportfolio';


const Renderer = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <div className="bg-dark d-flex flex-column justify-content-between" style={{minHeight:'100vh'}}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactUs' element={<Contactus />} />
            <Route path='/WhatWeDo' element={<WhatWeDoPage />} />
            <Route path='/OurProducts' element={<DefautPages />} />
            <Route path='/OurPortfolio' element={<OurPortfolio />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default Renderer;