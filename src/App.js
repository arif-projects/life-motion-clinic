import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import MedicalServices from './components/MedicalServices/MedicalServices';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import initializeFirebase from './components/Firebase/Firebase.init';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const userContext = createContext();



initializeFirebase();

function App() {
  const [login, setLogin] = useState({});
  return (
    <userContext.Provider value={[login, setLogin]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/services">
              <MedicalServices></MedicalServices>
            </PrivateRoute>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;

