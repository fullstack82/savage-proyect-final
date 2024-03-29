import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Experiences from './components/pages/Experiences'
import Register from './components/pages/Register'
import Footer from './components/Footer'
import './App.css';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/experiences' >
            <Experiences />
          </Route>
          <Route path='/register' >
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
