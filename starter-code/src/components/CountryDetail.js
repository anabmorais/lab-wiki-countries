import React from "react";
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

const CountryDetail = props => {
  const borderCountries = props.countryProp.borders;

  return (
    <div>
      <h1>{props.countryProp.name.common}</h1>
      <hr />
      <p>Capital: {props.countryProp.capital}</p>
      <hr />
      <p>Area: {props.countryProp.area} km2</p>
      <hr />
      Borders:
      
        {borderCountries.map(countrie => (
            <div>
            <h3>
            <Link to={`/countries/${countrie}`}>{countrie}</Link>
            </h3>
          </div>
        ))}
    </div>
  );
};
export default CountryDetail;
