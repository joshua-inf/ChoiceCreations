import image from '../images/contact-us_36325-2135.webp'

const Contactus = () => {
    return (
        <>
            <div>
                <div style={{height:'100vh'}}>
                    <div style={{height:'300px', background:`url(${image}) no-repeat center`, backgroundSize:'cover'}}>
                        <div className='d-flex flex-column justify-content-end p-3' style={{height:'100%'}}>
                        <h3 className='display-1 fw-bold' style={{color:'magenta'}}>Contact Us</h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus;