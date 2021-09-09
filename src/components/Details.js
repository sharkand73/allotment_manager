import React from 'react';

const Details = ({areaSelected, setAreaSelected}) => {

    let tableInfo = [];
    for(let key in areaSelected){
        if (key !== 'id' && areaSelected[key]){
        tableInfo.push(
            <tr key={key}>
                <td className='key'>{key}:</td>
                
                <td>{areaSelected[key].toString()}</td>
                
            </tr>
            )
        }
    }

    return (
        <div className = 'details'>
            <h1 className = 'heading'>{areaSelected.name}</h1>
            <span className='X' onClick = {() => setAreaSelected(null)}>X</span>
            <table id='plotInfo'>
                <tbody>
                    {tableInfo}
                </tbody>
            </table>         
        </div>
    )
}

export default Details;