import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import { MdLogin } from 'react-icons/md';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const onFormSubmit = (userObj) => {
        axios.post('http://localhost:4000/user-api/create-user', userObj)
            .then(response => {
                alert(response.data.message);
                if (response.data.message === 'user created successfully') {
                    navigate('/login')
                }
            })
            .catch(error => {
                console.log(error)
                alert("something went wrong in creating user")
            })
    }
    return (
        <Container>
            <div className='fw-bold text-center mb-4 headers text-success'>Signup</div>
            <div className='w-50 mx-auto mt-5 p-3 bd forms'>
                <div className='row '>
                    <div className='col-12 w-75 col-sm-8 col-md-6 mx-auto'>
                        <Form onSubmit={handleSubmit(onFormSubmit)}>
                            <Form.Group className='mb-3'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    {...register("username", { required: true })}
                                />
                                {errors.username && (
                                    <p className='text-danger' >*Username is required</p>
                                )}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                    <p className='text-danger'>*Password is required</p>
                                )}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <p className='text-danger'>*email is required</p>
                                )}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city"
                                    {...register("city", { required: true })}
                                />
                                {errors.city && (
                                    <p className='text-danger'>*city is required</p>
                                )}
                            </Form.Group>
                            <Button variant='secondary' className='buton' id='a' type='submit'>
                                Signup <MdLogin />
                            </Button>
                        </Form>
                        <h1 className='h1-e'>Already registered <Link to={{pathname : '/login'}}>Login?</Link></h1>
                    </div>
                    
                </div>
            </ div>
        </Container>
    );
}

export default Signup;