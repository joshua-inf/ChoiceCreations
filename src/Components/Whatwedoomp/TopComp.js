import image from '../../images/images3.png'
const TopComp = () => {
    return (
        <>
             <div style={{
                    position: 'relative',
                    height: '100vh',
                    background:`url(${image}) center`,
                    backgroundSize:'cover'
                }}>
                    <div style={{ zIndex: 1, position: 'absolute', backgroundImage: ``, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                    <div style={{ height: '100%',
                    //  background: `linear-gradient(black 10%,rgba(0,0,0,0) 20%, black)`,
                      height: '100vh', width: '100%', position: 'absolute', zIndex: 2 }}>
                        <div className='text-white' style={{
                            justifyContent: 'end',
                            paddingBottom: '70px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            backgroundColor: ''
                        }}>
                            <div className='px-5'>
                                <div style={{}} className='display-1 d-flex fw-bold'>
                                    <div>
                                        <div className='d-flex m-0 p-0 flex-column'>
                                            <div className='d-flex'>
                                                <div style={{ height: "10px", width: '70%', backgroundColor: 'magenta' }} className=''></div>
                                                <div style={{ height: "10px", width: '30%' }} className='bg-white'></div>
                                            </div>
                                        </div>
                                        <dv className="m-0 p-0">What We Do</dv>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ width: '70%' }} className=''>
                                        <p className='fs-5 text-white '>
                                           World-class experience through design & technology.
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

export default TopComp