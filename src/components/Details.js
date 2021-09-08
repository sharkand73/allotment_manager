import React from 'react';

const Details = ({areaSelected, setAreaSelected}) => {
    
    let tableInfo = [];
    for(let key in areaSelected){
        if (key !== 'id'){
        tableInfo.push(
            <tr key={key}>
                <td className='key'>{key}</td>
                <td>{areaSelected[key]}</td>
            </tr>
            )
        }
    }

    return (
        <div className = 'details'>
            <h1 className = 'heading'>{areaSelected.name}</h1>
            <table id='plotInfo'>
                <tbody>
                    {tableInfo}
                </tbody>
            </table>         
        </div>
    )
}

export default Details;