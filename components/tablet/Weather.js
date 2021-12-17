import React, { useState } from "react";
import { fetchWeather } from "../../pages/api/fetchWeather";


const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="backdrop-blur-sm bg-white/30 pt-7 pb-6 px-8 rounded-2xl shadow-lg ">
                <h1 className="text-lg font-medium uppercase text-white text-center pb-2">Weather, online</h1>
            <div className="flex items-center bg-gray-300 rounded-md text-gray-500">
                <input className="bg-transparent pl-2 focus:outline-none py-1" type="text" placeholder="Search location" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            {weather.main ? (
                <div className="text-center text-white">
                    <h2 className="py-2">
                        <span className="text-xl font-medium">{weather.name}</span>
                        <sup className="px-1 font-medium">{weather.sys.country}</sup>
                    </h2>
                    <div className="text-5xl">
                        {Math.round(weather.main.temp)}
                        <sup className="text-lg">&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="bg-gray-400 mx-auto rounded-lg my-2" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p className="text-lg font-semibold uppercase">{weather.weather[0].description}</p>
                    </div>
                </div>
            ) : (
                <h2 className="text-center pt-2 text-white mb-24 mt-20">Type, your city and <br /> press enter</h2>
            )}
        </div>
    );
}

export default App;