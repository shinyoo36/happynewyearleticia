import './App.css';
import {Butterfly} from './models/Butterfly'
import {Dragon} from './models/Dragon'
import { Environment,Sparkles,ScrollControls,Scroll,PositionalAudio,Float } from '@react-three/drei';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useEffect, useRef } from 'react';
import { EffectComposer, DepthOfField, Bloom, Vignette} from '@react-three/postprocessing'


function App() {
  
  return (
    <>

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} />
        <Vignette eskil={false} offset={.1} darkness={1.5} />
      </EffectComposer>    
    
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
   

      <ScrollControls pages={7} damping={0.25}>

      <Scroll>
        {/* top */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly rotation-x={Math.PI * 0.05} scale={0.05} position={[0,-2.5,0]}/>
        <Butterfly scale={0.05} position={[-10,-3,-6]}/>
        <Butterfly scale={0.05} position={[10,-4,-10]}/>   
        <Butterfly scale={0.05} position={[-20,2,-6]}/>
        <Butterfly scale={0.05} position={[20,-4,-10]}/>  
        </Float>
        {/* top */}

        {/* middle */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-1,-12.5,0]}/>
        <Butterfly scale={0.05} position={[12,-14,-10]}/>   
        <Butterfly scale={0.05} position={[-8,-12.5,0]}/>
        <Butterfly scale={0.05} position={[18,-14,-15]}/>   
        </Float>        
        {/* middle */}

        {/* middle */}
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Butterfly scale={0.05} position={[-3,-19.5,2]}/>
        <Butterfly scale={0.05} position={[8,-23,-10]}/>
        <Butterfly scale={0.05} position={[4,-24,2]}/>  
        <Butterfly scale={0.05} position={[-16,-19.5,2]}/>
        <Butterfly scale={0.05} position={[12,-23,-10]}/>
        </Float>  
        {/* middle */}        

        <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#8ce2ee"} opacity={10} scale={[80,100,80]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={5} scale={[30,100,10]} ></Sparkles>
        <Sparkles noise={0} count={200} speed={0.01} size={10} color={"#8ce2ee"} opacity={6} scale={[20,100,20]} ></Sparkles>
      </Scroll>

      <Scroll html style={{width: '100%'}}>
         <Container style={{height: '100px', position: 'relative'}} >
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom: '0px', fontSize:'80px'}}>Happy New Year, </h1>
                  <h1 style={{marginBottom: '0px', fontSize:'80px'}}>Leticia</h1>

                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '100vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px', fontSize:'72px'}}>A picture is worth</h1>
                    <h1 style={{marginBottom: '0px', fontSize:'72px'}}>a thousand words</h1>
                  </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '200vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px', fontSize:'67px'}}>But one look at you</h1>
                    <h1 style={{marginBottom: '0px', fontSize:'67px'}}>leaves me speechless</h1>
                  </div>
              </Col>
            </Row> 
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '300vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px', fontSize:'67px'}}>
                      May this year<br/>  
                      grant us more<br/> 
                      chances to create<br/> 
                      beautiful memories<br/> 
                      side by side.</h1>
                  </div>
              </Col>
            </Row>   

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '400vh'}}>
              <Col xs={8}>
                  <div>
                    <h1 style={{marginBottom: '0px', fontSize:'72px'}}>Wishing you</h1>
                    <h1 style={{marginBottom: '0px', fontSize:'45px'}}>
                      12 months of success, 52 weeks of laughter<br />
                      365 days of fun, 8760 hours of joy <br/>
                      525600 minutes of good luck <br/> 
                      and 31536000 seconds of happiness.<br/>
                      </h1>
                  </div>
              </Col>
            </Row>  

            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '500vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px',fontSize:'64px'}}>
                      May this year's canvas be painted 
                      with the realization of <br/>
                      your deepest wishes...</h1>
                  </div>
              </Col>
            </Row>   
            
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px',top: '600vh'}}>
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px',fontSize:'64px'}}>
                      and the vibrant manifestation of 
                      your wildest dreams.</h1>
                  </div>
              </Col>
            </Row>                                  
          </Container>        
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
