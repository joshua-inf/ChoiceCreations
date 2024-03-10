import { useInView, motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export const Reveal = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])

    return(
        <>
        <motion.div
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y:0},
            }}

            initial = "hidden"
            animate = {mainControls}
            transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>
        </>
    )
}

export const RevealInLeft = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])

    return(
        <>
        <motion.div
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y:0},
            }}

            initial = "hidden"
            animate = {mainControls}
            transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>
        </>
    )
}

export const RevealInRight = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])

    return(
        <>
        <motion.div
            ref={ref}
            variants={{
                hidden: {opacity: 0, x: -75},
                visible: {opacity: 1, x:0},
            }}

            initial = "hidden"
            animate = {mainControls}
            transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>
        </>
    )
}