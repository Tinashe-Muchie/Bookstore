import './App.css';
import GlobalContext from './Context/Context';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import CategoryBar from './Components/CategoryBar';
import Home from './Pages/Home';
import Accounting from './Pages/Accounting';
import Algorithms from './Pages/Algorithms';
import Ecommerce from './Pages/Ecommerce';
import History from './Pages/History';
import Management from './Pages/Management';

function App() {
  return (
    <GlobalContext>
      <Router>
        <Header />
        <CategoryBar />

        {/*The Switch is used to change the current page when a route is clicked */}
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/accounting' component={ Accounting } />
          <Route exact path='/management' component={ Management } />
          <Route exact path='/algorithms' component={ Algorithms } />
          <Route exact path='/ecommerce' component={ Ecommerce } />
          <Route exact path='/history' component={ History } />
        </Switch>
      </Router>
    </GlobalContext>  
  );
}

export default App;
