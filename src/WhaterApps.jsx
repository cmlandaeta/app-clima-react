import React, { useState } from "react";
import "./styles/styles.css";
import { useFetch } from "./hooks/useFetch";
import { fetchData } from "./helpers/fetchData";

const WhaterApps = () => {
  const [ciudad, setCuidad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const fetchClima = async () => {
    try {
      const response = await fetchData(ciudad);
      setDataClima(response);
    } catch (error) {}
  };

  const hanleonsubmit = (e) => {
    e.preventDefault();
    if (ciudad > 0) fetchClima();
  };
  const onChange = (e) => {
    setCuidad(e.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={hanleonsubmit}>
        <input type="text" value={ciudad} onChange={onChange} />
        <button type="submit"> Buscar</button>
      </form>
    </div>
  );
};

export default WhaterApps;
