import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/N/footer';
import Nav from './Components/N/Navbar';
import Contactus from './Components/ContactUs';


const Renderer = () => {
    return (
        <>
        <BrowserRouter basename='/ChoiceCreations'>
        <div className="bg-dark">
          <Nav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ContactUs' element={<Contactus/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
        </>
    )
}

export default Renderer;