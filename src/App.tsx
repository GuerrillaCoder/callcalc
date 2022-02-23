import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'devextreme/dist/css/dx.light.css';
import { NumberBox } from 'devextreme-react';

function App() {

  const [endUserPricePerMin, setEndUserPricePerMin] = useState(2);
  const [overflowPricePerMin, setOverflowPricePerMin] = useState(1.5);
  const [averageMinutesPerWorkday, setAverageMinutesPerWorkday] = useState(60);
  const [percentageHittingOverflow, setPercentageHittingOverflow] = useState(0.2);

  const totalMinutes = averageMinutesPerWorkday * 30;
  const overflowMinutes = totalMinutes * percentageHittingOverflow;
  const inhouseMinutes = totalMinutes * (1-percentageHittingOverflow);
  const inhouseRevenue = inhouseMinutes * endUserPricePerMin;
  const overflowRevenue = (overflowMinutes * endUserPricePerMin) - (overflowMinutes * overflowPricePerMin);

  return (
    <div className="App">
      <div className="profit-calc">

        <div className="profit-row">
          <div className="label">End User price per minute</div>
          <div className="input">
            <NumberBox format="$ #,##0.##" valueChangeEvent="keyup" value={endUserPricePerMin} onValueChanged={(e) => setEndUserPricePerMin(e.value)}></NumberBox>
          </div>
        </div>

        <div className="profit-row">
          <div className="label">Overflow price per minute</div>
          <div className="input">
            <NumberBox format="$ #,##0.##" valueChangeEvent="keyup" value={overflowPricePerMin} onValueChange={(e) => setOverflowPricePerMin(e)}></NumberBox>
          </div>
        </div>

        <div className="profit-row">
          <div className="label">Average minutes answered per day</div>
          <div className="input">
            <NumberBox value={averageMinutesPerWorkday} valueChangeEvent="keyup" onValueChange={(e) => setAverageMinutesPerWorkday(e)}></NumberBox>
          </div>
        </div>

        <div className="profit-row">
          <div className="label">Percentage of calls answered by overflow</div>
          <div className="input">
            <NumberBox format="#0%" valueChangeEvent="keyup" value={percentageHittingOverflow} onValueChange={(e) => setPercentageHittingOverflow(e)}></NumberBox>
          </div>
        </div>

        <div className="summary">

          <div className="summary-row">
            <div className="label">Total monthly minutes</div>
            <div className="result">{averageMinutesPerWorkday*30}</div>
          </div>

          <div className="summary-row">
            <div className="label">In-house revenue</div>
            <div className="result">${inhouseRevenue.toFixed(2)}</div>
          </div>

          

          <div className="summary-row">
            <div className="label">Overflow revenue</div>
            <div className="result">${overflowRevenue.toFixed(2)}</div>
          </div>

          {/* <div className="summary-row">
            <div className="label">Overflow grosse</div>
            <div className="result">${(overflowMinutes * endUserPricePerMin).toFixed(2)}</div>
          </div>

          <div className="summary-row">
            <div className="label">Overflow costs</div>
            <div className="result">${(overflowMinutes * overflowPricePerMin).toFixed(2)}</div>
          </div> */}


        </div>

      </div>
      <div className="tiered-pricing">
        <div className="pricing-row">
          <div className="label">PAYG</div>
          <div className="price">$1.50</div>
        </div>

        <div className="pricing-row">
          <div className="label">400 minute minumum</div>
          <div className="price">$1.35</div>
        </div>

        <div className="pricing-row">
          <div className="label">900 minute minumum</div>
          <div className="price">$1.25</div>
        </div>

        <div className="pricing-row">
          <div className="label">1500 minute minumum</div>
          <div className="price">$0.95</div>
        </div>

        <div className="pricing-row">
          <div className="label">2000 minute minumum</div>
          <div className="price">$0.85</div>
        </div>

      </div>
    </div>
  );
}

export default App;
