import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";
import './CityComponent.css';
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap"
const WeatherLogo = styled.img`
    width : 140px;
    height : 140px;
    margin : 40px auto;
`;

const ChooseCityLable = styled.span`
    color : black;
    font-size : 18px;
    font-weight: bold;
    margin: 10px auto;
`;



const CityComponent = (props) => {

    const {
        register,
        formState: { errors }
    } = useForm();

    const { updateCity, fetchWeather, fetchLoc } = props;

    return (
        <>
            <WeatherLogo src="/icons/perfect-day.svg" />
            <ChooseCityLable>Find Weather of your city</ChooseCityLable>
            <Form onSubmit={fetchWeather}>
                <Form.Group className='mb-3'>
                    <Form.Control
                        type="text"
                        placeholder="Enter City"
                        {...register("city", { required: true })}
                        onChange={(e) => updateCity(e.target.value)}
                    />
                    {errors.username && (
                        <p className='text-danger' >*city is required</p>
                    )}
                </Form.Group>
                <div className="ButtonLabel d-flex flex-row justify-content-evenly">
                    <button className="bg-dark text-light fw-bold" type="submit">Search</button>
                    <button className="ms-3 bg-dark text-light fw-bold" type="submit" onClick={fetchLoc}><ImLocation2 /></button>
                </div>
            </Form>
        </>
    )
}

export default CityComponent;