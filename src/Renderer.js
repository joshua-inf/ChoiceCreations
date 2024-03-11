import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/N/footer';
import Nav from './Components/N/Navbar';
import Contactus from './Components/ContactUs';
import WhatWeDoPage from './Components/Whatwedo';
import DefautPages from './Components/N/DefautPages';
import { ScrollToTop } from './Components/componentsmotion/ScrollToTop';


const Renderer = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <div className="bg-dark">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactUs' element={<Contactus />} />
            <Route path='/WhatWeDo' element={<WhatWeDoPage />} />
            <Route path='/OurProducts' element={<DefautPages />} />
            <Route path='/OurPortfolio' element={<DefautPages />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default Renderer;