import React, { useState, useEffect } from 'react'
import {Navbar, Button, Form, Nav, FormControl, Container,Row} from 'react-bootstrap';
import Logo from '../Images/Vector2.png'
import { NavLink, useLocation } from 'react-router-dom';
import StockCharts from './StockCharts';
import PredChart from './PredChart';
import VolatilityCharts from './VolatilityChart';

function Chartnavbar(props) {
    const [start, setStart] = useState(new Date("2018-05-01"));
    const [end, setEnd] = useState(new Date("2018-11-01"));
    const [predstart, setPredStart] = useState(new Date("2019-01-01"));
    const [predend, setPredEnd] = useState(new Date("2019-01-08"));
    const [predict, setPredict] = useState(false);
    const [impV, setImpV] = useState(false);
    const [dataPoints1, setData1] = useState([]);
    const [dataPoints2, setData2] = useState([]);
    const [dataPoints3, setData3] = useState([]);
    const [dataPointsImp, setDataImp] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [query, setQuery] = useState("FB");
    const [dropdata, setDropdata] = useState([]);
    const {location} = useLocation();
    const [propvalue, setpropvalue] = useState(props.location.state);

function changeQuery(e){
  setQuery(e.target.value);
}

function onclickImpV(e){
    setImpV(!impV);
};
function onclickPredict(e){
    setPredict(!predict);
};
useEffect(() => {

  fetch('http://127.0.0.1:8000/tickers/')
  .then( response => {
      return response.json()
  })
  .then(data => {
      console.log(data)
      setDropdata(data)
  })

    fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then(res => res.json())
      .then(
        (data) => {
          var dps1 = [], dps2 = [], dps3 = [], dps4 = [];
          for (var i = 0; i < data.length; i++) {
            dps1.push({
              x: new Date(data[i].date),
              y: [
                Number(data[i].open),
                Number(data[i].high),
                Number(data[i].low),
                Number(data[i].close)
              ]
            });
            dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
            dps3.push({x: new Date(data[i].date), y: Number(data[i].close)});
            dps4.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
          }
          setData1(dps1);
          setData2(dps2);
          setData3(dps3);
          setDataImp(dps4);
          setIsLoaded(true);
        }
      )
      
        
},[query])

    return (
        <React.Fragment>
        { isLoaded && (
    <div style={{paddingTop: '10px'}} wait={2000}>
        <Navbar bg="light" variant="dark">
            {/* <NavLink to="/"><Navbar.Brand href="">
                <img src={Logo} height="30px" alt="React Bootstrap logo" style={{ paddingRight: '10px'}} />
                G A R G L E T
                </Navbar.Brand></NavLink> */}
            <Nav className="mr-auto">
                <Nav.Link onClick={onclickImpV}><span style={{ color : 'black'}}>ImpVolatility</span></Nav.Link>
                <Nav.Link onClick={onclickPredict}><span style={{ color : 'black'}}>Predictions</span></Nav.Link>
            </Nav>
            <Form inline>
                {/* <FormControl type="text" placeholder="Ticker Name" className="mr-sm-2" /> */}
                <label>
          Tickers:
          <select value={query} onChange={changeQuery}>            
            {/* <option value="grapefruit">Grapefruit</option> */}
            {dropdata.map(data => (
              <option value={data.name}>{data.name}</option>
            ))}
            {/* <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
          </select>
        </label>
                
            </Form>
        </Navbar>
        <br/>
        {
            predict ? <PredChart start={predstart} end={predend} d1={dataPoints1} d2={dataPoints2} d3={dataPoints3} loaded={isLoaded} /> : <StockCharts start={start} end={end} d1={dataPoints1} d2={dataPoints2} d3={dataPoints3} loaded={isLoaded} />
        }
            <br/>
        {impV && (
				
			<VolatilityCharts d={dataPointsImp}/> )
		}
        
    </div>
         ) }
         </React.Fragment>
    )
}

export default Chartnavbar;