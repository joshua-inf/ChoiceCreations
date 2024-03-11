import Lottie from 'react-lottie'
import data from './Animation - 1710115464017.json'
import { Reveal } from '../componentsmotion/Reveal'

const DefautPages = () => {

    const defaultOptions =  {
        loop: true,
        autoplay: true,
        animationData: data,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center' style={{height:'100vh'}}>
                <Reveal>
                    <div>
                        <Lottie options={defaultOptions} height={300}  />
                        <h3 className='text-white text-center mt-4'>Page still under constraction...</h3>
                    </div>
                </Reveal>
            </div>
        </>
    )
}

export default DefautPages