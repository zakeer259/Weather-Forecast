import React, { useEffect, useState } from 'react'
import {
    Map,
    Popup,
    TileLayer,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import axios from 'axios'


export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
    "13d": "/icons/snow.png",
    "13n": "/icons/snow.png",
    "50d": "/icons/haze.png",
    "50n": '/icons/haze.png',
}
function Maps() {
    const [center, setCenter] = useState([17.5389, 78.3863])
    const [place, setPlace] = useState(null);
    const [weather, setWeather] = useState();
    const getWeather = async() => {
        const API_K = "452c0f36bef65e371e0fef4d0aa653ce";
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${center[0]}&lon=${center[1]}&appid=${API_K}`)
        setWeather(data.data)
    }
    useEffect(() => {
        getWeather();
    },[center])
    return (
        <Map
            center={center}
            zoom={10}
            style={{ width: '100vw', height: '100vh' }}    
            doubleClickZoom={false}
            ondblclick={(e) => {
                setCenter([e.latlng.lat, e.latlng.lng])
                setPlace(e.latlng)
            }}
        >
            {place &&
                <Popup position={[place.lat, place.lng]} onClose={() => { setPlace(null); setWeather(null); }} closeOnClick={true} closeButton={true} >
                    <div style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>{weather?.name}</div>
                    <div style={{
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "row",
                        alignItems:"center"
                    }}>
                        <div>
                            <span style={{fontSize:14,fontWeight:"bold"}}>Temperature</span> : {Math.round(weather?.main?.temp-273)}°C<br/>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>Humidity</span> : {weather?.main?.humidity}<br/>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>Pressure</span> : {weather?.main?.pressure}<br/>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>Wind Speed</span> : {weather?.wind?.speed}
                        </div>
                        <img src={WeatherIcons[weather?.weather[0]?.icon]} alt="" width="50px" height="50px" />
                    </div>
                </Popup>}
            <TileLayer 
                url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=hfMKA5NRb8gJmjnMXHqI'
            ></TileLayer>
        </Map>
    )
}

export default Maps