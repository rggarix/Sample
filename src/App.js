import Navbar from './components/Navbar'
import Home from './components/Home'

import TickersList from './components/TickersList'
import { Route, Switch } from 'react-router';
import StockCharts from './components/StockCharts'
import Chartnavbar from './components/ChartNav'
function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      {/* <br/> */}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/charts" component={Chartnavbar} />
      <Route exact path="/tickers" component={TickersList} />
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
