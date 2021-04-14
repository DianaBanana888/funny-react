import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Main from '../Main';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
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
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
