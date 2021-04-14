import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './components/Error/Error';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
