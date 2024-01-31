import image from '../../images/cmyk-inspiration-creative-colours-graphics.jpg'
import image1 from '../../images/sssssss.png'
import image2 from '../../images/images1.png'
import image3 from '../../images/images2.png'
import image4 from '../../images/modern-manufacturing-equipm.jpg'

const SeconComp = () => {
    const Comp = (props) => {
        return (
            <>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="bg-light" style={{ height: '100%', background: `url(${props.image}) center`, backgroundSize: "cover" }}></div>
                    </div>
                    <div className="col-12  col-md-6">
                        <div className='bg-dark d-flex flex-column justify-content-center ' style={{ minHeight: '100vh' }}>
                            <div className=" text-white p-3">
                                <div className='text-center h2'>{props.title}</div>
                                <div className='text-center p-3 fs-4'>
                                    <p>
                                        {props.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const Comp2 = (props) => {
        return (
            <>
                <div className="row">
                    <div className="col-12  col-md-6">
                        <div className='bg-dark d-flex flex-column justify-content-center ' style={{ minHeight: '100vh' }}>
                            <div className=" text-white p-3">
                                <div className='text-center h2'>{props.title}</div>
                                <div className='text-center p-3 fs-4'>
                                    <p>
                                        {props.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="bg-light" style={{ height: '100%', background: `url(${props.image}) center`, backgroundSize: "cover" }}></div>
                    </div>
                </div>
            </>
        )
    }



    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div style={{ gap: '20px' }} className="p-3 d-flex flex-column bg-white">
                    <Comp
                        title='CREATIVE DEISGNS'
                        image={image}
                        text='
                    At the heart of a distinctive brand is its design DNA which is reflected in its
                    appearance, both in digital and printed form, creating recognition, loyalty and
                    value for its customers.
                    '
                    />
                    <Comp2
                    title='BRANDING & PRINTING'
                    image={image4}
                    text='
                    Understanding client’s goals is step one. Having the ability to come alongside and
                    help a brand tell their story, through thought-evoking colors, meaningful design,
                    and then seeing that brand come to life– in print and online– is a rewarding step
                    in the marketing journey
                    '
                    />
                    <Comp
                    title='DIGITAL MARKETING'
                    image={image3}
                    text='
                    Creating a strategy that encompasses all corners of the web including social,
                    search, and local is a key component in a business’s plan for success. In order
                    to create a lasting impression, no detail should be left untouched
                    '
                    />
                    <Comp2
                    title='PHOTO & VIDEOGRAPHY'
                    image={image2}
                    text='
                    The nature of photos and videos make it one of the most impactful tools for lead
                                        generation. In seconds, a business can make a first impression, set
                                        themselves apart from competitors, and establish a connection.
                    '
                    />
                    <Comp
                    title='WEB DEVELOPMENT'
                    image={image1}
                    text='
                    "Design isn’t just about proportions, layouts and how information flows. It’s
                                        about creating an experience for people to fall in love with.”
                    '
                    />
                   
                </div>
            </div>
        </>
    )
}


export default SeconComp