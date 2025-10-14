import { useEffect, useState } from "react";
import Country from "../Country/Country";

import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  // using fetch()
  // useEffect(() => {
  //   fetch(
  //     "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages,cca2,cca3"
  //   )
  //     .then((responseOfCountries) => responseOfCountries.json())
  //     .then((data) => setCountries(data));
  // }, []);

  // using async/await
  useEffect(() => fetchData, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages,cca2,cca3"
    );
    const data = await response.json();
    setCountries(data);
  };

  return (
    <>
      <div className="parent-container">
        <div className="country-list">
          <h3 className="list-title">Visited Country List</h3>
        </div>

        <div className="card-container">
          {countries.map((country) => (
            <Country key={country.cca3} country={country}></Country>
          ))}
        </div>
      </div>
    </>
  );
}
