import React from "react";
import allCountries from "../countries.json";

const countries = allCountries;

const VerticalNavbar = () => {
  return (
    <div >
      {countries.map(countrie => (
          <div key={countrie.name.common}>
         <img  src={`https://www.countryflags.io/${countrie.cca2}/flat/64.png`} alt={`This is ${countrie.name}`} />
        <p> {countrie.name.common} </p>
        </div>
      ))}
    </div>
  );
};
export default VerticalNavbar;
