import React, { useState } from 'react';
import Map from './Map';
import Details from './Details';
import FeeTally from './FeeTally';
import '../App.css';


const Main = ({data}) => {

    const [areaSelected, setAreaSelected] = useState(null);
  
    const findById = (id) => {
        return data.find((item) => (item.id === id));
    }

    const onClick = (e) => {
        console.log(e.target.id);
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
            <div className = 'main'>
                <div className = 'container'>
                    <Map onClick={onClick} data={data}/>
                    {areaSelected && <Details areaSelected = {areaSelected} 
                                            setAreaSelected = {setAreaSelected}
                                            data = {data}/>}
                </div>
                <div id="fee-tally">
                 <FeeTally data = {data} />
                </div>
             </div>
             
            
        </>

    )
}

export default Main;
