import { useEffect, useState } from "react";
import Country from "../Country/Country";

import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages,cca2,cca3"
    )
      .then((responseOfCountries) => responseOfCountries.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className="card-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
}
