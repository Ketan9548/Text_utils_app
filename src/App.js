// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [Darkmode, setdarkmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  const togglemode = () => {
    if (Darkmode === 'light') {
      setdarkmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enable", "Success");
    }
    else {
      setdarkmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Ligth Mode has been enable", "Success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={Darkmode} togglemode={togglemode} />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/about">
            <About mode={Darkmode}/>
          </Route>
          <Route exact path="/">
            <div className="container my-3">
              <TextForm mode={Darkmode} showAlert={showAlert} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

// npm install react-router-dom@5
// npm install react-router-dom@5.2.0