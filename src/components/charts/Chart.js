import React from "react";
import "./css/chart.css";
import ChartBars from "./ChartBars";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

    return (
        <>
            <div className="chart">
                {
                    props.dataPoints.map((dataPoint) =>
                        <ChartBars key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
                    )}
            </div>

        </>
    );


}

export default Chart;