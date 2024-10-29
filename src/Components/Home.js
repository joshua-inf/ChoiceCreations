import { Link } from 'react-router-dom';
import image from '../images/modern-manufacturing-equipm.png'
import image1 from '../images/9019808.jpg'
import image2 from '../images/modern-manufacturing-equipm.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import FirstComp from './HomeComp/FirstComp';
import SecondComp from './HomeComp/SecondComp';
import Contacts from './Whatwedoomp/Contacts';
import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Contacts />
                <div style={{ background: `url(${image1}) fixed center`, backgroundSize: "cover" }}>
                    <div style={{
                        position: 'relative',
                        height: '100vh'
                    }}>
                        <div style={{ zIndex: 1, position: 'absolute', backgroundImage: ``, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        <div style={{
                            height: '100%',
                            background: `url(${image}) center`,
                            backgroundSize: 'cover',
                            height: '100vh', width: '100%', position: 'absolute', zIndex: 2
                        }}>
                            <div className='text-white' style={{
                                justifyContent: 'end',
                                paddingBottom: '70px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                backgroundColor: ''
                            }}>
                                <motion.div
                                initial={{ y:"25%"}}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                                >
                                    <div className='px-5'>
                                        <div style={{}} className='display-2 d-flex fw-bold'>
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
                                            <div style={{ fontSize:'20px' }} className=''>
                                                <p className=' text-white '>
                                                    We partner with impactful brands to generate meaningful results
                                                    while uplifting your mission.
                                                    The digital experiences we create are engaging, empowered by strategy, and technically sound.
                                                    Average isn’t an option — amazing starts here.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }} className=''>
                        <FirstComp />
                    </div>
                    <div>
                        <SecondComp />
                    </div>

                </div>
            </motion.div>


        </>
    )
}

export default Home;



