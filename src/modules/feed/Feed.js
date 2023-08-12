import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FeedContainer = styled.div`
    display : flex;
    width:100%;
    flex-direction : column;
    overflow-y : auto;
    margin : 5;
    margin-top :10;
    &::-webkit-scrollbar{
        width:0px;
    }
`;

function Feed({ cityName }) {
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onFormSubmit = async (feedData) => {
        feedData.cityName = cityName;
        let response=await axios.post('/feed-api/add-feed',feedData);
        getData();
        console.log(response);
        handleClose();
    };

    const getData = async()=>{
        let response = await axios.get(`/feed-api/getfeeds/${cityName}`);
        const data = response.data.payload;
        data.reverse();
        setPosts(data);
    }

    useEffect(  ()=>{
        getData();
    },[])

    return (
        <div  className="text-dark Box col-8 col-sm-6 col-md-4 mt-3  block" style={{height:"400px"}} >
            <Button variant="dark" onClick={handleShow}>
                Add Your Feed
            </Button>
            {posts &&
                <FeedContainer>
                    {posts.map((item, index)=>(
                        <div key={index} style={{ padding: "20px", margin: "5px", backgroundColor: "white", boxShadow:"0px 8px 24px rgba(149, 157, 165, 0.2)"}}>
                            <p style={{fontSize:"16",fontWeight:"bold"}}>{item.username}</p>
                            <p style={{fontSize:"14",fontWeight:"500"}}>{item.message}</p>
                        </div>
                    ))}
                </FeedContainer>}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Feed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <Form.Group className='mt-3 mb-3'>
                            <Form.Label >Username</Form.Label>
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
                            <Form.Label>Feed</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Your Feed'
                                {...register("message", { required: true })}
                            />
                            {errors.password && (
                                <p className='text-danger'>*message is required</p>
                            )}
                        </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                       Submit
                    </Button>
                </Modal.Footer>
                </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Feed;