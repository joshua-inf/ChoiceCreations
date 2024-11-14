import { Reveal } from "../componentsmotion/Reveal"
import image from '../../images/partners/CHC CHEMICALS Logos.png'
import image2 from '../../images/partners/datavid syngenta partner logo.png'
import image3 from '../../images/partners/Global link logo.png'
import image4 from '../../images/partners/goodfellow.png'
import image5 from '../../images/partners/ISHOOT (2).png'
import image6 from '../../images/partners/la byta.png'
import image7 from '../../images/partners/magnifica.png'
import image8 from '../../images/partners/mmc.png'
import image9 from '../../images/partners/p5.png'
import image10 from '../../images/partners/paige.png'
import image11 from '../../images/partners/PSZ.png'
import image12 from '../../images/partners/shoprite.png'
import image13 from '../../images/partners/ST. EDMUNDS LOGO.png'
import image14 from '../../images/partners/unifi.png'
import image15 from '../../images/partners/ZUSIAW LOGO.png'

const ThirdComp = () => {
    const Comp = ({image}) => {
        return (
            <>
                    <div className="p-3" style={{alignContent:'center'}}>
                        <div className="" style={{}}>
                            <img src={image} alt="png image here" width='100px' />
                        </div>
                    </div>
            </>
        )
    }
    return (
        <>
            <div style={{ paddingBlock:'20px', backgroundColor:'rgba(255,255,255,0.5)' }}>
                <div className="text-white p-3 py-5">
                    <Reveal>
                        <div className="text-center h2">Trusted by many.</div>
                        <div className="text-center fw-5">we partner with big and small</div>
                        <div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <div className="d-flex" style={{flexWrap:'wrap', justifyContent:'center'}}>
                                        <Comp image={image} />
                                        <Comp image={image2} />
                                        <Comp image={image3} />
                                        <Comp image={image4} />
                                        <Comp image={image5} />
                                        <Comp image={image6} />
                                        <Comp image={image7} />
                                        <Comp image={image8} />
                                        <Comp image={image9} />
                                        <Comp image={image10} />
                                        <Comp image={image11} />
                                        <Comp image={image12} />
                                        <Comp image={image13} />
                                        <Comp image={image14} />
                                        <Comp image={image15} />
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </>
    )
}

export default ThirdComp