import React from 'react'
import styled from 'styled-components'

const ForecastContainer = styled.div`
    display : flex;
    flex-direction : row;
    overflow-x : auto;
    margin : 10;
    &::-webkit-scrollbar{
        width:0px;
    }
`;
const Forecast = styled.div`
    background-color : white;   
    margin : 10px;
    border-radius : 5px;
    padding-right : 10px;
    padding-left : 10px;
    flex-wrap:wrap;
    text-align:center;
    transition : 0.5s;
    box-shadow: 0 3px 6px 0 #555;
    &:hover{
        transform : scale(1.2)
    }
`;
const ForecastComponents = ({ data, setForecastWeatherData }) => {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return (
        <ForecastContainer>
            {data.map((item, index) => {
                const date = item.dt_txt.substring(8, 10)
                const month = item.dt_txt.substring(5, 7)
                const time = item.dt_txt.substring(10,19)
                return (
                    <Forecast key={index} onClick={()=>{setForecastWeatherData(item)}}>
                        <p style={{fontSize:40, fontWeight:"bold"}}>
                            {date}<span style={{fontSize:15,fontWeight:"lighter"}}>{monthName[month-1]}</span><p style={{ fontSize: 20, fontWeight:"500" }}>{time}</p>
                        </p>
                    </Forecast>
                )
            })}
        </ForecastContainer>
    )
}

export default ForecastComponents