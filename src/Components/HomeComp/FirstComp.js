import image from '../../images/images.png'

const FirstComp = () => {
    return (
        <>
            <div style={{ minHeight: '100vh', }} className=" text-white p-3 d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="display-3 mb-3 fw-bold">WHO WE ARE</div>
                                <div>
                                    <p>
                                        Choice Creations Limited is a focused, agile, and trustworthy creative agency that
                                        offers an extensive range of services to businesses and individuals. We are in love
                                        with fresh ideas and this also drives our passion to launch top of the range products
                                        that add value to people and society
                                    </p>
                                    <p>
                                        As a professional team of multi-disciplinary specialists, Choice Creations Limited’s
                                        experience runs deep in graphic designing, printing, brand development and brand
                                        positioning, website design and interactive multimedia development, digital
                                        marketing and advanced search engine marketing. We provide an integrated
                                        service to enhance our customers’ marketing return and improve the top line. Our
                                        products and services are modern-touch, robust, and coherent and this is how we
                                        remain effective. We strongly believe that our success is intertwined with the suc-
                                        cess of businesses and people we serve.
                                    </p>
                                    <p>
                                        Hence, we understand your requirements and infuse our interaction with innovative
                                        concepts around strategy, technology, concepts and creative design. By adopting a
                                        Wow & How approach, we turn your distinct needs into digital reality.
                                    </p>
                                    <p>
                                        We take pride in what we do and we hold high expectations for our work.
                                    </p>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div >
                                    <img src={image} style={{width:'150%'}} />
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