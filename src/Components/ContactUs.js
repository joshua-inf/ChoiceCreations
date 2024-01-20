import image from '../images/contact-us_36325-2135.webp'
import { MdPhoneInTalk, MdOutlineLocationOn, MdEmail } from 'react-icons/md'

const Contactus = () => {
    const ContactComp = (props) => {
        return (
            <>
                <div className='col-12 p-3'>
                    <div className=''>
                        <props.icon size={50} />
                        <div style={{ lineHeight: '18px' }}>
                            <h5>{props.title}</h5>
                            {props.values.map((t) => (
                                <>
                                    <div>{t}</div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div style={{ minHeight: '100vh' }}>
                    <div style={{ height: '300px', background: `url(${image}) no-repeat center`, backgroundSize: 'cover' }}>
                    </div>
                    <div style={{ minHeight: '100vh' }} className='text-white  py-5'>
                        <div className='text-center' >
                            <div className='text-center'>
                                <h3>Contact Us</h3>
                            </div>
                            <div className='d-flex mb-5 justify-content-center'>
                                <div style={{ height: '5px', width: '30px', backgroundColor: 'white' }}></div>
                            </div>

                        </div>

                        <div className='p-3 mt-5'>
                            <div className='row'>
                                <div className='col-1'></div>
                                <div className='col-10'>
                                    <div className='row'>
                                        <div className='col-md-3 col-12'>
                                            {/* this is wher the icons go for the contacts i.e email, phone number or written locatios */}
                                            <div className='p-3 my-5 text-center'>
                                                <div style={{}} className='row' >
                                                    <ContactComp icon={MdPhoneInTalk} title='Phone' values={['+260 988 888 888', '+260 988 888 888', '+260 988 888 888']} />
                                                    <ContactComp icon={MdOutlineLocationOn} title='Location' values={['P.O.Box 670000', 'Plot #119, Kaonga', 'Mazabuka, Zambia']} />
                                                    <ContactComp icon={MdEmail} title='Email' values={['choicecreationsltd@gmail.com']} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-9 '>
                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '75vh' }}>
                                    <div className='text-center my-5'>
                                        <h3>Do you have any questions to ask please let us know.</h3>
                                    </div>
                                    <form>
                                        <div className='row'>
                                            <div className='col-md-6 col-12 p-3'>
                                                <div className='p-3'>
                                                    <div className='customForm'>
                                                        <div className='emailinput'>
                                                            <input className='input' type='text' required />
                                                            <span ></span>
                                                            <label className='custom-text'>Your name <div className='text-danger'>*</div> </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12 p-3'>
                                                <div className='p-3'>
                                                    <div className='customForm'>
                                                        <div className='emailinput'>
                                                            <input className='input' type='text' required />
                                                            <span ></span>
                                                            <label className='custom-text'>Your name<div className='text-danger'>*</div></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='p-3'>
                                            <div className='customForm'>
                                                <div className='emailinput'>
                                                    <input className='input' type='text' required />
                                                    <span ></span>
                                                    <label className='custom-text'>Your message <div className='text-danger'>*</div></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <button className='btn btn-lg px-5 fw-bold btn-info rounded-5' type='submit'>Send message</button>
                                        </div>
                                    </form>
                                </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='col-1'></div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='p-3'>
                            <iframe width="100%" style={{ borderRadius: '10px', height: "40vh" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-15.862038,%2027.764519+(Choice%20Creations%20Ltd)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">Population Estimator map</a>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus;