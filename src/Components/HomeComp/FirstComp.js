import image from '../../images/agency6-about-pic2.webp'

const FirstComp = () => {
    return (
        <>
            <div style={{ height: '100vh' }} className=" text-white p-3 d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                        <div className='col-6'>
                                <img src={image} width='100%' /> 
                            </div>
                            <div className="col-5">
                                <div className="display-3 mb-3 fw-bold">Welcome</div>
                                <div>
                                    Ultigraph is coined from two words: Ultimate & Graphics.
                                    We started with the mindset of rendering ultimate (best) graphic
                                    design services. With this ‘Ultimate’ mindset we have evolved into
                                    an agency that provides Innovative Branding solutions for businesses,
                                    organisations and individuals.
                                    <br/>
                                    <div className='my-3'></div>
                                    Feel at home, Welcome.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    )
}

export default FirstComp;