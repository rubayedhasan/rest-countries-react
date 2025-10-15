import { useState } from "react";
import "./Country.css";
export default function Country({ country, handleCountryList }) {
  const { flags, cca3, name, languages, population } = country;

  const [status, setStatus] = useState(false);

  const handleStatusBtn = () => {
    setStatus(!status);
  };
  return (
    <>
      <div
        style={{ backgroundColor: status && "rgba(127, 255, 212, 0.152)" }}
        className="card"
      >
        <figure className="card-img">
          <img src={flags?.png} alt={flags?.alt} />
        </figure>
        <h1>{name.common}</h1>
        <p>Language: {languages?.lit}</p>
        <p>Population: {population}</p>

        <div className="btn-container">
          <button onClick={handleStatusBtn} className="btn-visit" type="button">
            {status ? "Visited" : "Go on..."}
          </button>

          <button
            id={`btn-${cca3}`}
            onClick={() => {
              document.getElementById(`btn-${cca3}`).style.backgroundColor =
                "#81c1bd82";
              handleCountryList(country);
            }}
            className="btn-add-list"
            style={{
              display: status ? "inline" : "none",
            }}
            type="button"
          >
            Add to List
          </button>
        </div>
        <p
          style={{
            color: "brown",
            textAlign: "center",
            margin: "10px auto 0",
            display: status ? "block" : "none",
            backgroundColor: "rgba(240, 255, 255, 0.819)",
            border: "0.8px inset teal",
            borderRadius: "5px",
            padding: "6px",
            fontSize: "14px",
          }}
        >
          Country has visited
        </p>
      </div>
    </>
  );
}
