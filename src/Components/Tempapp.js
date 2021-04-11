import React, { useEffect, useState } from "react";
import "./style.css";
import axios from 'axios'

const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a08cbd99ad10761ab8c4f5c98ce42504`;
      const response = await fetch(url);
      const resJason = await response.json();
      setCity(resJason.main);
    };
    fetchApi();
  }, [search])

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        { ! city ? (
          <p className="error">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}*Cel </h1>
              <h3 className="tempmin_max">Min : {city.temp_min}*Cel | Max : {city.temp_max}*Cel</h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
