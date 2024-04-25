import { useEffect, useRef } from "react"
import { useInView, motion, useAnimation } from "framer-motion" 
import image from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpg'
import image11 from './images/11.jpg'
import './style.css'
const Cont = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])
    return (
        <>
            <motion.div className="p-2 " style={{float:'left'}}
             ref={ref}
             variants={{
                 hidden: {opacity: 0, y: 35},
                 visible: {opacity: 1, y:0},
             }}
 
             initial = "hidden"
             animate = {mainControls}
             transition={{duration: 0.5, delay: 0.25}}
            >
                <div className="imagecont">
                    <img src={props.image} className="bg-light rounded-1" style={{ height:'300px', cursor:'pointer'}}/>
                </div>
            </motion.div>
        </>
    )
}


const ProductCont = () => {
    return(
        <>
            <div className="p-4">
                <div className="">
                    <Cont image={image} />
                    <Cont image={image2} />
                    <Cont image={image3} />
                    <Cont image={image4} />
                    <Cont image={image5} />
                    <Cont image={image6} />
                    <Cont image={image7} />
                    <Cont image={image8} />
                    <Cont image={image9} />
                    <Cont image={image10} />
                    <Cont image={image11} />
                </div>
            </div>
        </>
    )
}


export default ProductCont