import React, {useState, useEffect} from 'react';
import Map from './Map';
import Satellite from './allotment_satellite.svg';
import Details from './Details';
import '../App.css';


const Main = ({data}) => {

    const [pageLoaded, setPageLoaded] = useState(false);
    const [startPressed, setStartPressed] = useState(false);
    const [transitionFinished, setTransitionFinished] = useState(false);
    const [areaSelected, setAreaSelected] = useState(null);
  
    useEffect(() => {
        setPageLoaded(true); 
        }, []);

    useEffect(() => {
        if (pageLoaded) {
        setTimeout( () => setTransitionFinished(true), 4900) };
        }, [startPressed]);
  
    const findById = (id) => {
        return data.find((item) => (item.id === id));
    }

    const onClick = (e) => {
      const areaClicked = findById(e.target.id);
      setAreaSelected(areaClicked);
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
                    alt='Satellite view'
                    />}
                {(!transitionFinished) && <button type='button' 
                        onClick = {() => setStartPressed(true)}
                        value = "START"
                        className={startPressed? 'fade-out': 'static'} >START</button>}
                {startPressed &&
                <Map onClick={onClick}/>}
                {areaSelected && <Details areaSelected = {areaSelected} 
                                        setAreaSelected = {setAreaSelected}
                                        data = {data}/>}
             </div>
            
        </>

    )
}

export default Main;
