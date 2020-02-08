import React from "react";
import "./App.css";
import Vertical from "./components/VerticalNavbar";
import CountryDetail from "./components/CountryDetail";
import allCountries from "./countries.json";
import { Switch, Route } from 'react-router-dom';


const countries = allCountries;

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="h-100 row">
        <div className="h-100 col-6">
          <Vertical />
        </div>
        <div className="h-100 col-6">
          <CountryDetail countryProp={countries[1]}/>
        </div>
        <Switch>
         
          <Route exact path='/countries' component={Vertical}/>
          <Route path="/countries/:id" component={CountryDetail} />
        </Switch>



      </div>
    </div>
  );
}

export default App;
