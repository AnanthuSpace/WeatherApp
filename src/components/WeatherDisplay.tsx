import "../assests/styles/WeatherDisplay.css";
import { CiSearch } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";

function WeatherDisplay() {
  return (
    <>
      <div className="container">
        <div className="searchContainer">
          <input type="text" className="search" />
          <button className="srh-btn">
            <CiSearch className="CiSearch" />
          </button>
        </div>
        <div className="weather">
          <h2 className="city">City</h2>
          <p>NZ</p>
          <div className="icon">
            <h1>icon</h1>
          </div>
          <div className="degree">Degree</div>
          <div className="sky">Clouds</div>
        </div>
        <div className="humadity">
          <div className="per-icon">
            <WiHumidity className="WiHumidity"/>
          </div>
          <div className="humidity">
            <div className="prec">
              <b>64%</b>
              <hr />
              Humidity
            </div>
          </div>
          <div className="wind">
            <div className="symbol"></div>
            <div className=" windspeed">3.35km/h
              wind speed
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
