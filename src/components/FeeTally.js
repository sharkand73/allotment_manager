import React from 'react';

const FeeTally = ({data}) => {

    const allPlots = data.filter((item) => item.plotholders != null);
    const filledPlots = allPlots.filter((item) => item.plotholders !== "None" )
    const paidPlots = data.filter((item) => item.paid);
    const totalSum = paidPlots.reduce((total, item) => total + item.fee, 0);
    const percentageComplete = Math.round((paidPlots.length / filledPlots.length) * 1000) / 10;
    return (
        <>

            <p>Total number of plots: {allPlots.length}</p>
            <p>Filled plots: {filledPlots.length}</p>
            <p>Number of plots paid up: {paidPlots.length}</p>
            <p>Percentage complete: {percentageComplete}%</p>
            <p>Total sum: £{totalSum}</p>
        </>
    )

}

export default FeeTally;