import Carousel from 'react-bootstrap/Carousel';
import image from './OurPortfolio/images/5.jpg'
import image2 from './OurPortfolio/images/6.jpg'
import { motion } from "framer-motion"
import ProductCont from './OurPortfolio/ProductCont';


const OurPortfolio = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <div className="" style={{}}>
                    <div style={{}}>
                        <Carousel className='' style={{}} fade controls={true}>
                            <Carousel.Item className='bg-light' style={{ height: '80vh' }}>
                                <div className='bg-light' style={{ height: '100%', background: `url(${image}) center no-repeat`, backgroundSize: 'cover' }}></div>
                            </Carousel.Item>
                            <Carousel.Item className='bg-light' style={{ height: '80vh' }}>
                                <div className='bg-light' style={{ height: '100%', background: `url(${image2}) center no-repeat`, backgroundSize: 'cover' }}></div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <motion.div
                    initial={{ y: "15%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{}}>
                    <div className='p-4'>
                        <div className='text-white'>
                            <div className=' h2'>
                                Product Categories
                            </div>
                        </div>
                        <div>
                            <div style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none', width: '100%', gap: '20px' }} className='d-flex' >
                                <div className='m-2 '>
                                    <button className='btn btn-outline-info'>Vehicle branding</button>
                                </div>
                                <div className='m-2'>
                                    <button className='btn btn-outline-info'>Bill board Branding</button>
                                </div>
                                <div className='m-2'>
                                    <button className='btn btn-outline-info'>Bill board Branding</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* container for products related to the filter goes here */}
                <div className='' style={{minHeight:'100vh'}}>
                    <ProductCont />
                </div>
            </motion.div>
        </>
    )
}


export default OurPortfolio;