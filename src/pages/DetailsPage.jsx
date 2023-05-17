import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // correct import
import React from "react";
import { useParams } from "react-router-dom";
import Cloud from "../assets/cloud.jpg";
import Sun from "../assets/sun.jpg";
import Rain from "../assets/rain.jpg";

const DetailsPage = () => {
  let { cityName } = useParams();

  const { data, isLoading, isError, error } = useQuery(["city", cityName], () =>
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b9ea834cd70f3cdd890ad907cb9c5465
      `
      )
      .then((res) => res.data)
  );

  const renderWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clouds":
        return Cloud;
      case "Clear":
        return Sun;
      case "Rain":
        return Rain;
      default:
        return <h1>not sure</h1>;
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        style={{
          backgroundImage: `url(${renderWeatherImage(data.weather[0].main)})`,
        }}
        className="flex items-center justify-center h-screen bg-cover bg-center"
      >
        <div></div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col text-left justify-center">
          <h1 className="text-4xl font-mono">{data.name}</h1>
          <p className="text-md">
            {data.weather[0].description
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </p>
          <p className="text-md">
            Temperature: {(((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)}
            °F
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
