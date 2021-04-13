import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Main from '../Main';
import Home from '../../pages/Home';
import First from '../../pages/First';
import Second from '../../pages/Second';
import Navbar from '../Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App ">
        <Main />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/first">
          <First />
        </Route>
        <Route exact path="/second">
          <Second />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
