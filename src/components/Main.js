import React, {useState, useEffect} from 'react';
import Map from './Map';
import Satellite from './allotment_satellite.svg';
import '../App.css';


const Main = () => {

    const [pageLoaded, setPageLoaded] = useState(false);
    const [transitionInProgress, setTransitionInProgress] = useState(true);
  
    useEffect(() => {
      setPageLoaded(true);
        }, []);
  
    useEffect(() => {
        setTimeout( () => setTransitionInProgress(false), 4900);
        }, [pageLoaded]);
  
    const onClick = (e) => {
      console.log(e.target.id);
    }
  

    return (
        <>
            <div id="menu">
                <h1>
                Menu goes here
                </h1>
            </div>
            <div className = 'container'>
                {transitionInProgress && 
                <img src={Satellite} width="1024" className='fade-out' />}
                <Map onClick={onClick}/>
             </div>
            
        </>

    )
}

export default Main;
