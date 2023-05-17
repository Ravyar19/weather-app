import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityInputPage = () => {
  let navigate = useNavigate();
  const [cityName, setCityName] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    navigate(`/details/${cityName}`);
  };

  return (
    <div className="main">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col justify-center items-center h-screen"
      >
        <input
          type="text"
          placeholder="Enter City Name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl md:w-1/5 focus:ring-blue-500 block p-2.5 dark:"
        />
        <button
          type="submit"
          className="text-white bg-yellow-500 mt-5 hover:bg-yellow-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm md:w-1/5 sm-w-auto px-5 py-2 text-center focus:ring-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CityInputPage;
