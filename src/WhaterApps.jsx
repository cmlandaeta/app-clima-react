import React, { useState } from "react";
import "./styles/styles.css";
import { useFetch } from "./hooks/useFetch";
import { kelvinCent } from "./helpers/fetchData";

const WhaterApps = () => {
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);
  const [iLoading, setIsLoading] = useState(true);
  const [error, setErrors] = useState(null);

  const key = import.meta.env.VITE_KEY;

  const { data, isLoading, errors } = useFetch(
    ciudad
      ? `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
      : null
  );

  console.log(data);

  const getCiudad = (e) => {
    setCiudad(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataClima(data);
  };

  const handleChange = (e) => {
    getCiudad(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="titulo">Busca el Clima</h1>

      <div className="max-w-lg mx-auto">
        <div className="p-6 mt-10">
          {dataClima ? (
            <div className="flex flex-col">
              <p className="text">Ciudad: {dataClima.name}</p>
              <p className="text">
                Temperatura Min: {kelvinCent(dataClima.main.temp_min)}°C
              </p>
              <p className="text">
                Temperatura Max: {kelvinCent(dataClima.main.temp_max)}°C
              </p>
              <img
                className="items-center"
                src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </div>
          ) : (
            <p className="text-center text-white mt-6">
              {isLoading ? "Cargando..." : "Agrega tu ciudad para ver el clima"}
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>

      {errors && (
        <p className="error">
          {"La Cuidad no ha sido encontrada, ingrese una ciudad validad"}
        </p>
      )}
    </div>
  );
};

export default WhaterApps;
