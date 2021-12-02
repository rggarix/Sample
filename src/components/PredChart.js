import React, { Component } from "react";
import CanvasJSReact from './canvasjs.stock.react';
import { Button } from 'react-bootstrap';
import VolatilityCharts from './VolatilityChart';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

 
 
class PredCharts extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        dataPoints1: this.props.d1,
        dataPoints2: this.props.d2, 
        dataPoints3: this.props.d3, 
        isLoaded: this.props.loaded,  
        start: this.props.start, 
        end: this.props.end, 
    };
  }


  render() {
    const options = {
      theme: "light2",
      title:{
        text:""
      },
      subtitles: [{
        text: ""
      }],
      charts: [{
        axisX: {
          lineThickness: 5,
          tickLength: 0,
          maximum: new Date("2019-12-31"),
          labelFormatter: function(e) {
            return "";
          },
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            labelFormatter: function(e) {
              return "";
            }
          }
        },
        axisY: {
          title: "Litecoin Price",
          prefix: "$",
          tickLength: 0,
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Price (in USD)",
          yValueFormatString: "$#,###.##",
          type: "candlestick",
          dataPoints : this.state.dataPoints1
        },
        {
            type: "scatter",
            markerColor: "blue",
            dataPoints: [
                { x: new Date("2019-01-01")  , y: 215 },
                { x: new Date("2019-01-02")  , y: 251 },
                { x: new Date("2019-01-03")  , y: 265 },
                { x: new Date("2019-01-04")  , y: 275 },
                { x: new Date("2019-01-05")  , y: 215 },
                { x: new Date("2019-01-06")  , y: 251 },
                { x: new Date("2019-01-07")  , y: 265 },
                { x: new Date("2019-01-08")  , y: 275 },
            ]
        }
        ]
      },{
        height: 100,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Volume",
          prefix: "$",
          tickLength: 0
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Volume",
          yValueFormatString: "$#,###.##",
          type: "column",
          dataPoints : this.state.dataPoints2
        }]
      }],
      navigator: {
        data: [{
          dataPoints: this.state.dataPoints3
        },
        {
        dataPoints: [
            { x: new Date("2019-01-01")  , y: 215 },
            { x: new Date("2019-01-02")  , y: 251 },
            { x: new Date("2019-01-03")  , y: 265 },
            { x: new Date("2019-01-04")  , y: 275 },
            { x: new Date("2019-01-05")  , y: 215 },
            { x: new Date("2019-01-06")  , y: 251 },
            { x: new Date("2019-01-07")  , y: 265 },
            { x: new Date("2019-01-08")  , y: 275 },
        ]
    }
],
        slider: {
          minimum: this.state.start,
          maximum: this.state.end
        }
      },
    };
    const containerProps = {
      width: "200%",
      height: "350px",
      margin: "auto"
    };
    const {show} = this.state;
    return (
      
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && 
            <CanvasJSStockChart containerProps={containerProps} options = {options}
              /* onRef = {ref => this.chart = ref} */
            />
          }
        </div>
        
    );
  }
}
export default PredCharts; 