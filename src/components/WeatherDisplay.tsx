import "../assests/styles/WeatherDisplay.css";
import { CiSearch } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import axios from "axios";
import { API, API_KEY } from "../Config/api";
import { useState, useEffect } from "react";
import { WeatherData } from "../Config/types";

const WeatherDisplay: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const weatherDetails = async (city: string) => {
    try {
      const url = `${API}weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    weatherDetails("Ernakulam"); 
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      weatherDetails(searchQuery);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="searchContainer">
        <input
          type="text"
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="srh-btn" onClick={handleSearch}>
          <CiSearch className="CiSearch" />
        </button>
      </div>
      {weather && (
        <>
          <div className="weather">
            <h2 className="city">{weather.name}</h2>
            <p>{weather.sys.country}</p>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div className="degree">{weather.main.temp}°C</div>
            <div className="sky">{weather.weather[0].description}</div>
          </div>
          <div className="humadity">
            <div className="per-icon">
              <WiHumidity className="WiHumidity" />
            </div>
            <div className="humidity">
              <div className="prec">
                <b>{weather.main.humidity}%</b>
                <hr />
                Humidity
              </div>
            </div>
            <div className="wind">
              <div className="symbol"></div>
              <div className="windspeed">{weather.wind.speed} km/h wind speed</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;