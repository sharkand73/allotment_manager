import React from 'react';

const Details = ({areaSelected, setAreaSelected}) => {
    
    let tableInfo = [];
    for(let key in areaSelected){
        tableInfo.push(
            <tr>
                <td>{key}</td>
                <td>{areaSelected[key]}</td>
            </tr>
            )
    }

    return (
        <div className = 'details'>
            <h1 className = 'heading'>{areaSelected.name}</h1>
            <table>
                {tableInfo}
            </table>         
        </div>
    )
}

export default Details;