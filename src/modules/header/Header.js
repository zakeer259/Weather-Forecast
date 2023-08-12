import React, { useState } from "react";
import "./Header.css";
import {Navbar , Nav, Container ,Button ,Form  } from "react-bootstrap";
import { NavLink,  useNavigate} from 'react-router-dom';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const InputContainer = styled.input`
  border:1px solid #14A44D;
  margin-right:15px;
  border-radius:5px;
  &:focus{
    outline : none;
    border : 1.5px solid #14A44D;
  }
`

function Header({ setCityName,fetchWeather}) {
  const [city, setCity] = useState();
    let navigate=useNavigate();

    let {  isSuccess } = useSelector(
      (state) => state.user
    );
    //get dispathc function
    let dispath = useDispatch();
  
  
    //logout user
    const userLogout = () => {
      localStorage.clear();
      dispath(clearLoginStatus());
      navigate("/login");
    };

    return (
        <div>
            <Navbar bg="light"  expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><TiWeatherPartlySunny size={32}/><b>Weather Forecast </b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                <Nav.Link as={NavLink} to="map">MAP</Nav.Link>
              <Nav.Link as={NavLink}  to="aboutus">ABOUT US</Nav.Link>
              <Nav.Link as={NavLink}   to="faqs">FAQ's</Nav.Link>
              <Nav.Link as={NavLink}   to="contactus">CONTACT US</Nav.Link>
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                  aria-label="Search"
                  onTex
              /> */}
                <InputContainer onChange={e=>setCity(e.target.value)} placeholder="Enter City" />
                <Button variant="outline-success" disabled={city === "" ? true : false} onClick={() => {
                  setCityName(city);
                  fetchWeather()
                }} >Search</Button>
            </Form>
            {isSuccess !== true ? (
                <>
            <Button className='m-2' variant="outline-primary" onClick={() => navigate('/login')}>Signin/Signup</Button>
              </>):
              (
                <Button className='m-2' variant="outline-primary" onClick={userLogout}>
                      Logout
                      </Button>
              )
}
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default Header;