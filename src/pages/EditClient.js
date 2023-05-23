import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
//import react-bootstrap 
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


function EditClient() {

    const navigate = useNavigate();

    const [ client, setClient ] = useState(null)

    const { clientId } = useParams();

    const URL = `https://project3-hair-salon-api.onrender.com/clients/${clientId}`

    async function getClient(){
        try{
            const response = await fetch(URL)
            const foundClient = await response.json();
            setClient(foundClient);
            

        }catch(err){
            console.log(err);
        };
    };

    
    useEffect(()=>{
        getClient()
    },[]);

    async function updatedClient(e){
        e.preventDefault();
        try{
            const response = await fetch(URL, {
                method: "PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(client),
            })
            
            //navigate to updated Client show page
            return navigate(`/clients/${clientId}`);
            
            // const updatedClient = await response.json();
            // setClient(updatedClient)
            
            
        }catch(err){
            console.log(err)
        }
    }

    function handleChange(e){
        setClient((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    function loaded(){

        return (
        <>
            <section>
            <h2>Edit this Client:: [{client.name}]</h2>
            <Form onSubmit={updatedClient}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>*Name</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>*Email</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>*Phone Number</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.phoneNumber}
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hairStyle">
                    <Form.Label>Current Hair Style</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.hairStyle}
                    name="hairStyle"
                    placeholder="hairStyle"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="service">
                    <Form.Label>Hair Service</Form.Label>
                    <Form.Control
                    type="text"
                    value={client.service}
                    name="service"
                    placeholder="services"
                    onChange={handleChange}
                    />
                </Form.Group>

                <Button 
                style={{
                    backgroundColor:"rgb(244 167 187)",
                    color:"white",
                    borderColor:"rgb(244 167 187)"
                    
                    }}  type="submit">Update</Button>

            </Form>
            </section>
        
        </>
        )
    }
    return (
        <>
            {client ? loaded() : <h1>Loading...</h1>}
        </>
    )

}

export default EditClient;
