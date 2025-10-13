import { useEffect, useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,flags,currencies,languages"
    )
      .then((responseOfCountries) => responseOfCountries.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </>
  );
}
