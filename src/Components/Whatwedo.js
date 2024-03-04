import Contacts from "./Whatwedoomp/Contacts";
import FirstComp from "./Whatwedoomp/FirstComp";
import SeconComp from "./Whatwedoomp/SecondComp";
import ThirdComp from "./Whatwedoomp/ThierdComp";
import TopComp from "./Whatwedoomp/TopComp";
import { motion } from "framer-motion"
import image1 from '../images/9019808.jpg'

const WhatWeDoPage = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Contacts />
                <div style={{ background: `url(${image1}) fixed center`, backgroundSize: "cover", minHeight: '100vh' }}>
                    <TopComp />
                    <FirstComp />
                    <SeconComp />
                    <ThirdComp />
                </div>

            </motion.div>
        </>
    )
}

export default WhatWeDoPage;