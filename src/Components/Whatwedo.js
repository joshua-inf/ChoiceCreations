import Contacts from "./Whatwedoomp/Contacts";
import FirstComp from "./Whatwedoomp/FirstComp";
import SeconComp from "./Whatwedoomp/SecondComp";
import ThirdComp from "./Whatwedoomp/ThierdComp";
import TopComp from "./Whatwedoomp/TopComp";

const WhatWeDoPage = () => {
    return (
        <>
            <Contacts/>
            <div style={{ minHeight: '100vh' }}>
                <TopComp />
                <FirstComp />
                <SeconComp />
                <ThirdComp/>
            </div>
        </>
    )
}

export default WhatWeDoPage;