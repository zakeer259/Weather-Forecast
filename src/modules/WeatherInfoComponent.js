import styled from "styled-components";

const WeatherInfoIcons = {
    Sunset : "/icons/temp.svg",
    Sunrise : "/icons/temp.svg",
    Humidity : "/icons/humidity.svg",
    Wind : "/icons/wind.svg",
    Pressure: "/icons/pressure.svg",
    "Sea Level" : "/icons/wind.svg"
};

export const WeatherIcons ={
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

const WeatherCondition = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 100%;
    justify-content : space-between;
`;

const WeatherLogo = styled.img`
    width : 100px;
    height : 100px;
    margin : 5px auto;
`;


const Condition = styled.span`
    margin :  auto;
    font-size : 14px;
    & span{
        font-size : 28px;
    }
`;

const Location = styled.span`
    font-size : 28px;
    font-weight : bold;
`;

const WeatherInfoLabel = styled.span`
    font-size : 16px;
    font-weight : bold;
    text-align : center;
`;

const WeatherInfoContainer = styled.div`
    display : flex;
    width : 90%;
    flex-direction : row;
    justify-content : space-evenly;
    align-items : center;
    flex-wrap : wrap;
`;

 const InfoContainer = styled.div`
    display : flex;
    margin : 10px 10px;
    flex-direction : row;
    justify-content : space-evenly;
    align-items : center;
 `;

 const InfoIcon = styled.img`
    width : 36px;
    height : 36px;
 `;

 const InfoLabel = styled.span`
    display : flex;
    flex-direction : column;
    font-weight : 500;
    font-size : 14px;
    margin : 15px;
    &span {
        font-size : 12px;
    }
 `;

const WeatherInfoComponent=(props)=>{
    const {name,value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )  
}

const WeatherComponent =(props)=>{
    const { weather, forecastWeatherData } = props;
    const isDay=weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) =>{
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return(
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(forecastWeatherData===undefined ? weather?.main?.temp-273 : forecastWeatherData.main.temp -273)}°C`}</span>{` | ${forecastWeatherData===undefined ? weather?.weather[0].description : forecastWeatherData.weather[0].description}`}</Condition>
                <WeatherLogo  src={WeatherIcons[forecastWeatherData === undefined ? weather?.weather[0].icon : forecastWeatherData?.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent 
                    name={forecastWeatherData === undefined ? (isDay ? "Sunset" : "Sunrise") : ("Sea Level") } 
                    value={forecastWeatherData===undefined ? `${getTime(weather?.sys[isDay ? "sunset" : "sunrise" ])}` : forecastWeatherData?.main?.sea_level}
                />
                <WeatherInfoComponent name={"Humidity"} value={forecastWeatherData===undefined ? weather?.main?.humidity : forecastWeatherData?.main?.humidity } />
                <WeatherInfoComponent name={"Wind"} value={forecastWeatherData === undefined ? weather?.wind?.speed : forecastWeatherData?.wind?.speed } />
                <WeatherInfoComponent name={"Pressure"} value={forecastWeatherData === undefined ? weather?.main?.pressure : forecastWeatherData?.main?.pressure} />
            </WeatherInfoContainer>
        </>

    );

}

export default WeatherComponent;