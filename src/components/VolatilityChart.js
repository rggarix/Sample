import React,{Component} from 'react';
import CanvasJSReact from './canvasjs.react';

// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var dataPoints =[];
class VolatilityCharts extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataPoints : this.props.d,
		}
	}

	// componentDidMount() {
	// 	//Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
	// 	fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
	// 	  .then(res => res.json())
	// 	  .then(
	// 		(data) => {
	// 			console.log(data);
	// 		  var dps1 = [];
	// 		  for (var i = 0; i < data.length; i++) {
	// 			dps1.push({
	// 			  x: new Date(data[i].date),
	// 			  y: Number(data[i].volume_ltc)
	// 			});
	// 		  }
	// 		  this.setState({
	// 			dataPoints: dps1
				
	// 		  });
	// 		}
	// 	  )
	//   }

	render() {
		// const {dataPoints} = this.state;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Volatility"
			},
			axisY: {
				title: "Bounce Rate",
				// suffix: "%"
				// interval: 1,
			},
			axisX: {
				title: "Week of Year",
				// prefix: "W",
				interval: 1,
			},
			data: [{
				type: "line",
				// toolTipContent: "Week {x}: {y}%",
				dataPoints: this.state.dataPoints
				//  [
				// 	{ x: 1, y: 64 },
				// 	{ x: 2, y: 61 },
				// 	{ x: 3, y: 64 },
				// 	{ x: 4, y: 62 },
				// 	{ x: 5, y: 64 },
				// 	{ x: 6, y: 60 },
				// 	{ x: 7, y: 58 },
				// 	{ x: 8, y: 59 },
				// 	{ x: 9, y: 53 },
				// 	{ x: 10, y: 54 },
				// 	{ x: 11, y: 61 },
				// 	{ x: 12, y: 60 },
				// 	{ x: 13, y: 55 },
				// 	{ x: 14, y: 60 },
				// 	{ x: 15, y: 56 },
				// 	{ x: 16, y: 60 },
				// 	{ x: 17, y: 59.5 },
				// 	{ x: 18, y: 63 },
				// 	{ x: 19, y: 58 },
				// 	{ x: 20, y: 54 },
				// 	{ x: 21, y: 59 },
				// 	{ x: 22, y: 64 },
				// 	{ x: 23, y: 59 }
				// ]
			}]
		};
		const containerProps = {
			width: "100%",
			height: "100px",
			margin: "auto"
		  };
		return (
		<div>
			<CanvasJSChart options = {options} containerProps={containerProps}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
// module.exports = Charts; 
export default VolatilityCharts;