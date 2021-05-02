import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './base/home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact>
          <Home /> 
        </Route>
        <Route  path="/about">
          <h2>ABOUT AREA we ah e</h2>
        </Route>
        <Route path="*">
          <h2>NOT FOUND</h2>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
