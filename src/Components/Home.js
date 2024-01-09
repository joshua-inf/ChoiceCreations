import { Link } from 'react-router-dom';
import image from '../images/agency6-about-pic2.webp'
import image1 from '../images/9019808.jpg'
import image2 from '../images/modern-manufacturing-equipm.jpg'


import { AiOutlineArrowRight } from 'react-icons/ai'
import FirstComp from './HomeComp/FirstComp';
import SecondComp from './HomeComp/SecondComp';

const Home = () => {
    return (
        <>  
            <div style={{ position: 'fixed', zIndex: 3, bottom: "30px", right: "30px", height: '50px', width: "50px" }} className='btn-light btn rounded-3'>

            </div>
            <div style={{background:`url(${image1}) fixed center`, backgroundSize:"cover"}}>
                <div style={{
                    position: 'relative',
                    height: '100vh'
                }}>
                    <div style={{ zIndex: 1, position: 'absolute', backgroundImage: ``, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                    <div style={{ height: '100%',
                    //  background: `linear-gradient(black 10%,rgba(0,0,0,0) 20%, black)`,
                      height: '100vh', width: '100%', position: 'absolute', zIndex: 2 }}>
                        <div className='text-white' style={{
                            justifyContent: 'end',
                            paddingBottom: '70px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            backgroundColor: ''
                        }}>
                            <div className='px-5'>
                                <div style={{}} className='display-1 d-flex fw-bold'>
                                    <div>
                                        <div className='d-flex m-0 p-0 flex-column'>
                                            <div className='d-flex'>
                                                <div style={{ height: "10px", width: '70%', backgroundColor: 'magenta' }} className=''></div>
                                                <div style={{ height: "10px", width: '30%' }} className='bg-white'></div>
                                            </div>
                                            <div className='m-0 p-0'>
                                                Welcome to
                                            </div>
                                        </div>
                                        <dv className="m-0 p-0">Choice Creations</dv>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ width: '70%' }} className=''>
                                        <p className='fs-5 text-white '>
                                            We partner with impactful brands to generate meaningful results
                                            while uplifting your mission.
                                            The digital experiences we create are engaging, empowered by strategy, and technically sound.
                                            Average isn’t an option — amazing starts here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{}} className=''>
                    <FirstComp />
                </div>
                <div>
                    <SecondComp />
                </div>

            </div>

        </>
    )
}

export default Home;



