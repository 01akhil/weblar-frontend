const WeatherInput = ({ city, setCity, weather, fetchWeatherForCity }) => (
  <div className="relative w-full mb-4">
    <input
      type="text"
      placeholder="City Name for Weather"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="w-full p-3 pr-16 border border-gray-300 rounded-lg bg-white text-black"
    />
    <button
      onClick={() => fetchWeatherForCity(city)}
      className="absolute right-2 top-0.5 bg-gray-300 text-black rounded-lg"
    >
      Search
    </button>

    {weather && (
      <p className="text-md text-black font-medium">Weather: {weather}</p>
    )}
  </div>
);

export default WeatherInput;
