import image from '../../images/cmyk-inspiration-creative-colours-graphics.jpg'
import image1 from '../../images/images.png'
import image2 from '../../images/images1.png'
import image3 from '../../images/images2.png'
import image4 from '../../images/modern-manufacturing-equipm.jpg'

const SeconComp = () => {
    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div style={{ gap: '20px' }} className="p-3 d-flex flex-column bg-white">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-light" style={{ height: '300px', background: `url(${image}) center`, backgroundSize: "cover" }}></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-dark text-white p-3" style={{ height: '300px' }}>
                                <div className='text-center h2'>CREATIVE DEISGNS</div>
                                <div className='text-end fs-4'>
                                    <p>
                                        At the heart of a distinctive brand is its design DNA which is reflected in its
                                        appearance, both in digital and printed form, creating recognition, loyalty and
                                        value for its customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-dark text-white p-3" style={{ height: '300px' }}>
                                <div className='text-center h2'>BRANDING & PRINTING</div>
                                <div className='text-end fs-4'>
                                    <p>
                                        Understanding client’s goals is step one. Having the ability to come alongside and
                                        help a brand tell their story, through thought-evoking colors, meaningful design,
                                        and then seeing that brand come to life– in print and online– is a rewarding step
                                        in the marketing journey
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-light" style={{ height: '300px', background: `url(${image4}) center`, backgroundSize: "cover" }}></div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-light" style={{ height: '300px', background: `url(${image3}) center`, backgroundSize: "cover" }}></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-dark text-white p-3" style={{ height: '300px' }}>
                                <div className='text-center h2'>DIGITAL MARKETING</div>
                                <div className='text-end fs-4'>
                                    <p>
                                        Creating a strategy that encompasses all corners of the web including social,
                                        search, and local is a key component in a business’s plan for success. In order
                                        to create a lasting impression, no detail should be left untouched
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-dark text-white p-3" style={{ height: '300px' }}>
                                <div className='text-center h2'>PHOTO & VIDEOGRAPHY</div>
                                <div className='text-end fs-4'>
                                    <p>
                                        The nature of photos and videos make it one of the most impactful tools for lead
                                        generation. In seconds, a business can make a first impression, set
                                        themselves apart from competitors, and establish a connection.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-light" style={{ height: '300px', background: `url(${image2}) center`, backgroundSize: "cover" }}></div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-light" style={{ height: '300px', background: `url(${image1}) center`, backgroundSize: "cover" }}></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-dark text-white p-3" style={{ height: '300px' }}>
                                <div className='text-center h2'>WEB DEVELOPMENT</div>
                                <div className='text-end fs-4'>
                                    <p>
                                        "Design isn’t just about proportions, layouts and how information flows. It’s
                                        about creating an experience for people to fall in love with.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SeconComp