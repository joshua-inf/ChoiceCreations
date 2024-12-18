import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";

import Renderer from "./Renderer";

const App = () => {
  const [ready, setReady] = useState(true)
  const [navs, setNavs] = useState(false)
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
  }, []);

  const opennav = () => {
    document.getElementById('sidenav').style.width = '300px'

    document.getElementById('opennav').style.display = 'none'
    document.getElementById('closenav').style.display = 'block'
  }
  const closenav = () => {
    document.getElementById('sidenav').style.width = '0px'

    document.getElementById('closenav').style.display = 'none'
    document.getElementById('opennav').style.display = 'block'
  }


  useEffect(() => {
    const targetDate = new Date('February 28 2024 00:00:00')
    const updateDate = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      setDays(Math.floor(diff / 1000 / 60 / 60 / 24))
      setHours(Math.floor(diff / 1000 / 60 / 60) % 24)
      setMins(Math.floor(diff / 1000 / 60) % 60)
      setSec(Math.floor(diff / 1000) % 60)

    }
    // setInterval(() => {
    //   updateDate()
    // }, 1000)
  }, [])



  if (ready) {
    return (
      <Renderer />
    )
  } 
  // else {
  //   return (
  //     <div>
  //       <div className="d-sm-none d-flex flex-column justify-content-center " style={{height:'100vh'}}>
  //         <div className="p-4 text-center">
  //             <h2>Please view on Desktop...;)</h2>
  //         </div>
  //       </div>
  //       <div className="d-none d-sm-block" style={{ height: '100vh' }}>
  //         <Particles
  //           id="tsparticles"
  //           init={particlesInit}
  //           loaded={particlesLoaded}
  //           options={{
  //             fpsLimit: 120,
  //             interactivity: {
  //               events: {
  //                 onClick: {
  //                   enable: true,
  //                   mode: "push",
  //                 },
  //                 onHover: {
  //                   enable: true,
  //                   mode: "repulse",
  //                 },
  //                 resize: true,
  //               },
  //               modes: {
  //                 push: {
  //                   quantity: 8,
  //                 },
  //                 repulse: {
  //                   distance: 200,
  //                   duration: 0.4,
  //                 },
  //               },
  //             },
  //             particles: {
  //               color: {
  //                 value: "#fff",
  //               },
  //               links: {
  //                 color: "#fff",
  //                 distance: 100,
  //                 enable: true,
  //                 opacity: 0.9,
  //                 width: 1,
  //               },
  //               move: {
  //                 direction: "none",
  //                 enable: true,
  //                 outModes: {
  //                   default: "bounce",
  //                 },
  //                 random: false,
  //                 speed: 2,
  //                 straight: false,
  //               },
  //               number: {
  //                 density: {
  //                   enable: true,
  //                   area: 800,
  //                 },
  //                 value: 80,
  //               },
  //               opacity: {
  //                 value: 0.5,
  //               },
  //               shape: {
  //                 type: "circle",
  //               },
  //               size: {
  //                 value: { min: 1, max: 5 },
  //               },
  //             },
  //             detectRetina: true,
  //           }}
  //         />
  //         <div style={{ position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
  //           <Carousel fade controls={false}>
  //             <Carousel.Item>
  //               <img src={image} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image2} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image3} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image4} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image5} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image6} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image7} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image8} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //             <Carousel.Item>
  //               <img src={image9} className="d-block w-100" alt='...' />
  //             </Carousel.Item>
  //           </Carousel>
  //           {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  //         <div class="carousel-inner">
  //           <div class="carousel-item active" style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
  //           </div>
  //           <div class="carousel-item" style={{ backgroundImage: `url(${image2})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
  //           </div>
  //           <div class="carousel-item" style={{ backgroundImage: `url(${image3})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
  //           </div>
  //         </div>
         
  //       </div> */}
  //         </div>
  //         <div className="text-light d-flex justify-content-end" style={{ height: '90px', position: 'fixed', width: '100%', zIndex: 2 }}>
  //           <div className="linknav">
  //             <BiMenuAltRight id='opennav' onClick={() => opennav()} />
  //             <BiMenuAltRight id='closenav' style={{ display: 'none' }} onClick={() => closenav()} />
  //           </div>
  //           <div className="navs" id='sidenav' style={{ backgroundColor: 'rgba(255,255,255,0.3)', height: '100vh', width: '0px' }}>
  //             <button className='btn btn-outline-warning rounded-0 w-100 fw-bold' onClick={() => setReady(true)}>view site</button>
  //           </div>
  //         </div>
  //         <div style={{ height: '100vh', color: 'white', padding: '30px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
  //           <div className="d-flex justify-content-center" style={{ height: '100%' }}>
  //             <div className="d-flex justify-content-center flex-column">
  //               <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '30px', zIndex: 1 }}>
  //                 <div style={{ textAlign: 'center' }}>
  //                   <img src={image1} width='70%' alt='...' />
  //                 </div>
  //                 <div className="d-flex justify-content-center">
  //                   <div className="d-flex" style={{ gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
  //                     <div className="" style={{ textAling: 'center' }}>
  //                       <h1 className="text-center">{days}</h1>
  //                       <h4>Days</h4>
  //                     </div>
  //                     <div className="" style={{ textAling: 'center' }}>
  //                       <h1 className="text-center">{hours}</h1>
  //                       <h4>Hours</h4>
  //                     </div>
  //                     <div className="" style={{ textAling: 'center' }}>
  //                       <h1 className="text-center">{mins}</h1>
  //                       <h4>Minuets</h4>
  //                     </div>
  //                     <div className="" style={{ textAling: 'center' }}>
  //                       <h1 className="text-center">{sec}</h1>
  //                       <h4>Seconds</h4>
  //                     </div>

  //                   </div>
  //                 </div>
  //                 <div>
  //                   <p className="text-center" style={{ fontSize: '10px' }}>
  //                     Something big is coming
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //   );
  // }

};

export default App;
