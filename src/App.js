import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Header from './Component/Header';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Contact" component={Contact} />
  </Switch>
)

export default App;
