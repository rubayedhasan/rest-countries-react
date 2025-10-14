import { useState } from "react";
import "./Country.css";
export default function Country({ country }) {
  const { flags, name, languages, population } = country;

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
          <img src={flags.png} alt="" />
        </figure>
        <h1>{name.common}</h1>
        <p>Language: {languages.lit}</p>
        <p>Population: {population}</p>

        <div className="btn-container">
          <button onClick={handleStatusBtn} className="btn-visit" type="button">
            {status ? "Visited" : "Go on..."}
          </button>
          <p
            style={{
              color: "brown",
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
      </div>
    </>
  );
}
