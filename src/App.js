import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import image from './images/banner-with-blue-orange-balls-generative-al.jpg'
import image2 from './images/abstract-colorful-splash-3d-.jpg'
import image3 from './images/d-printouts-accurately-generated-by-ai.jpg'
import image1 from './images/choice.png'
import {BsFacebook} from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel'
import {AiFillInstagram} from 'react-icons/ai'
import {BiMenuAltRight} from 'react-icons/bi'

const App = () => {
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

  const checknav = async () =>{
    let value = await setNavs(!navs)
    
     if(!navs){
    document.getElementById('sidenav').style.width = '300px'
  } else {
    document.getElementById('sidenav').style.width ='0px'
  }
}


  useEffect(() => {
    const targetDate = new Date('October 30 2023 00:00:00')
    const updateDate = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      setDays(Math.floor(diff / 1000 / 60 / 60 / 24))
      setHours(Math.floor(diff / 1000 / 60 / 60) % 24)
      setMins(Math.floor(diff / 1000 / 60) % 60)
      setSec(Math.floor(diff / 1000) % 60)

    }
    setInterval(() => {
      updateDate()
    }, 1000)
  }, [])
  
  
  


  return (
    <div style={{ height: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 100,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div style={{ position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
      <Carousel fade>
      <Carousel.Item>
      <img src={image} className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
      {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
            </div>
            <div class="carousel-item" style={{ backgroundImage: `url(${image2})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
            </div>
            <div class="carousel-item" style={{ backgroundImage: `url(${image3})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', height:'100vh'}}>
            </div>
          </div>
         
        </div> */}
      </div>
      <div className="text-light d-flex justify-content-end" style={{ height:'90px', position:'fixed', width:'100%', zIndex:2}}>
      <div className="linknav">
          <BiMenuAltRight  onClick={() => checknav()}/>
      </div>
      <div className="navs"  id='sidenav' style={{backgroundColor:'rgba(255,255,255,0.3)', height:'100vh', width:'0px'}}>

      </div>
      </div>
      <div style={{ height: '100vh', color: 'white', padding: '30px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <div className="d-flex justify-content-center" style={{ height: '100%' }}>
          <div className="d-flex justify-content-center flex-column">
            <div style={{backgroundColor:'rgba(0,0,0,0.6)', padding:'40px', borderRadius:'30px', zIndex:1}}>
              <div style={{ textAlign: 'center' }}>
                <img src={image1} width='600px' />
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex" style={{ gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
                  <div className="" style={{ textAling: 'center' }}>
                    <h1 className="text-center">{days}</h1>
                    <h4>Days</h4>
                  </div>
                  <div className="" style={{ textAling: 'center' }}>
                    <h1 className="text-center">{hours}</h1>
                    <h4>Hours</h4>
                  </div>
                  <div className="" style={{ textAling: 'center' }}>
                    <h1 className="text-center">{mins}</h1>
                    <h4>Minuets</h4>
                  </div>
                  <div className="" style={{ textAling: 'center' }}>
                    <h1 className="text-center">{sec}</h1>
                    <h4>Seconds</h4>
                  </div>

                </div>
              </div>
              <div>
                <p className="text-center" style={{fontSize:'10px'}}>
                  Something big is coming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
