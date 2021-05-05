import React, { useState } from 'react';
import './App.scss';
import { weatherApiFetching } from './api/weatherApiFetching';

function App() {
  const [name, setName] = useState('');
  const [forecast, setForecast] = useState({});

  const searchCity = async (e) => {
    if (e.key === 'Enter') {
      const data = await weatherApiFetching(name);

      if (data.cod === '404') {
        console.log('Not found');
      }

      setForecast(data);
      setName('');
    }
  }

  return (
    <div className="mainContainer">
      <h2 className="header"> Weather Forecast ⛅</h2>
      <input type="text" className="search" placeholder="Search for city ..." value={name} onChange={(e) => setName(e.target.value)} onKeyPress={searchCity} />

      {forecast.main && (
        <div className="city">
          <h2 className="cityName">
            <span>{forecast.name}</span>
            <sup>{forecast.sys.country}</sup>
          </h2>

          <div className="cityTemperature">
            {Math.round(forecast.main.temp)}
            <sup>&deg;C</sup>
          </div>

          <div className="info">
            <img className="cityIcon" src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
            <p>{forecast.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;