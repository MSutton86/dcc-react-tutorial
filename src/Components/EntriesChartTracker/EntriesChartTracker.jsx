import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartDataA(tempChartData);
    }, [props.parentEntries])

    return ( 
        <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ['2022-01-01', 174], ['2022-02-02', 178], ['2022-03-03', 187]]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;