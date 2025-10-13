import "./Country.css";
export default function Country({ country }) {
  const { flags, name, languages, population } = country;
  console.log(country);
  return (
    <>
      <div className="card">
        <figure className="card-img">
          <img src={flags.png} alt="" />
        </figure>
        <h1>{name.common}</h1>
        <p>Language: {languages.lit}</p>
        <p>Population: {population}</p>
      </div>
    </>
  );
}
