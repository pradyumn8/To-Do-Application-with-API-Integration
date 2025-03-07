import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Delhi'); 

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = 'e8c7a9a15ba0643c63261b5a7f9b638c'; 
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  const handleLocationChange = (e) => {
    e.preventDefault();
    const newLocation = e.target.elements.location.value;
    if (newLocation) {
      setLocation(newLocation);
    }
  };

  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-xl font-bold text-gray-800">Weather</h2>
      
      <form onSubmit={handleLocationChange} className="flex mb-4 space-x-2">
        <input
          type="text"
          name="location"
          placeholder="Enter city name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          defaultValue={location}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </form>
      
      {loading && <p className="text-gray-600">Loading weather data...</p>}
      
      {error && (
        <div className="p-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg">
          Error: {error}. Please check the city name and try again.
        </div>
      )}
      
      {weather && !loading && !error && (
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{weather.name}, {weather.sys.country}</h3>
              <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
              <p className="text-gray-600">Feels like: {Math.round(weather.main.feels_like)}°C</p>
            </div>
            
            <div className="text-center">
              {weather.weather[0].icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="w-16 h-16"
                />
              )}
              <p className="text-sm text-gray-600 capitalize">{weather.weather[0].description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4">
            <div className="p-2 text-center bg-white rounded-md">
              <p className="text-xs text-gray-500">Humidity</p>
              <p className="text-lg font-medium">{weather.main.humidity}%</p>
            </div>
            <div className="p-2 text-center bg-white rounded-md">
              <p className="text-xs text-gray-500">Wind</p>
              <p className="text-lg font-medium">{Math.round(weather.wind.speed * 3.6)} km/h</p>
            </div>
            <div className="p-2 text-center bg-white rounded-md">
              <p className="text-xs text-gray-500">Pressure</p>
              <p className="text-lg font-medium">{weather.main.pressure} hPa</p>
            </div>
            <div className="p-2 text-center bg-white rounded-md">
              <p className="text-xs text-gray-500">Visibility</p>
              <p className="text-lg font-medium">{(weather.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget; 