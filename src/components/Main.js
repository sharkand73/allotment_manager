import React, {useState, useEffect} from 'react';
import Map from './Map';
import Satellite from './allotment_satellite.svg';
import '../App.css';


const Main = () => {

    const [pageLoaded, setPageLoaded] = useState(false);
    const [startPressed, setStartPressed] = useState(false);
    const [transitionFinished, setTransitionFinished] = useState(false);
  
    useEffect(() => {
        setPageLoaded(true); 
        }, []);

    useEffect(() => {
        if (pageLoaded) {
        setTimeout( () => setTransitionFinished(true), 4900) };
        }, [startPressed]);
  
    const onClick = (e) => {
      console.log(e.target.id);
    }
  
    return (
        <>
            {/* <div id="menu">
                <h1>
                Menu goes here
                </h1>
            </div> */}
            <div className = 'container'>
                {(!transitionFinished) && 
                <img src={Satellite} 
                    width="1024" 
                    className={startPressed? 'fade-out': 'static'} 
                    />}
                {(!transitionFinished) && <button type='button' 
                        onClick = {() => setStartPressed(true)}
                        value = "START"
                        className={startPressed? 'fade-out': 'static'} >START</button>}
                {startPressed &&
                <Map onClick={onClick}/>}
             </div>
            
        </>

    )
}

export default Main;
