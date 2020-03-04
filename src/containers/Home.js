import React, { useEffect, useState } from "react";
import axios from "axios";

//<p> Weather: {weatherData.weather && weatherData.weather[0].all}okta </p>

  //API Keys
  const defaultKey = "ede293b25c093960ebbf782841b0b308";


function Home() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Dallas");
  const[currentTemperature, setCurrentTemperature]= useState("");

  useEffect(() => {
    //Make a get request for the weather by city
    axios

    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`
        )

    .then(function (response) {
    // handle success

    setWeatherData(response.data);
    })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

}, []);



console.log("weatherData",weatherData);




  return (
    <div className="Home">
      <h1> Weather in {city} </h1>

    <div className="WeatherInfo">

      <div className="WeatherInfo_Image">
      <img src="" alt=""/>
      </div>

    <div className="WeatherInfo_Data">

      <div className="CurrentTemperature">
        <p> {weatherData.main && weatherData.main.temp}&#176;</p>
      </div>

      <div className="OtherTemperature">
        <p> High Temp: <strong>{weatherData.main && weatherData.main.temp_max}&#176; </strong>
        </p>
        <p> Low Temp: <strong>{weatherData.main && weatherData.main.temp_min}&#176; </strong>
        </p>

      </div>

      <p> Humididty: {weatherData.main && weatherData.main.humidity}%</p>
      <p> Wind: {weatherData.wind && weatherData.wind.speed}mph </p>
      <p> Pressure: {weatherData.main && weatherData.main.pressure}psi </p>
      <p> Clouds: {weatherData.clouds && weatherData.clouds.all}okta </p>


      <div>
        <img src="" alt="" />
      </div>



    </div>

    </div>

    </div>




  );
}

export default Home;
