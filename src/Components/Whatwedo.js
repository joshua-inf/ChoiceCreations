import Contacts from "./Whatwedoomp/Contacts";
import FirstComp from "./Whatwedoomp/FirstComp";
import SeconComp from "./Whatwedoomp/SecondComp";
import ThirdComp from "./Whatwedoomp/ThierdComp";
import TopComp from "./Whatwedoomp/TopComp";
import image1 from '../images/9019808.jpg'

const WhatWeDoPage = () => {
    return (
        <>
            <Contacts/>
            <div  style={{ background: `url(${image1}) fixed center`, backgroundSize: "cover", minHeight:'100vh' }}>
                <TopComp />
                <FirstComp />
                <SeconComp />
                <ThirdComp/>
            </div>
        </>
    )
}

export default WhatWeDoPage;