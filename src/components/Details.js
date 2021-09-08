import React from 'react';

const Details = ({areaSelected, setAreaSelected}) => {
    

    
    return (
        <div className = 'details'>
            <h1 className = 'heading'>{areaSelected.name}</h1>
            
        </div>
    )
}

export default Details;