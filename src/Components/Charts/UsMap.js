import React from 'react';
import '../../css/ChartUsMap.css';
import USAMap from "react-usa-map";

const UsMapChart = () => {
  const mapHandler = (event) => {
    console.log('blah')
  };

  const statesFilling = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: () => alert("Custom callback for the NJ state")
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };
    return (
        <div className="UsChart">
        <h1>Hi</h1>
        <USAMap customize={statesFilling()} onClick={mapHandler} />
        </div>
    );
  
}

export default UsMapChart;