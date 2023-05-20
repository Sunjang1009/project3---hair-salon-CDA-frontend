import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormControl } from 'react-bootstrap';
import { useState } from "react";

function NewClientsBootStrap() {

    const [clientForm, setClientForm] = useState([{
        name: "",
        image: "",
        email: "",
        phoneNumber: "",
        hairStyle: "",
        //later will be array with photos??
        services: ""
    }]);

    function handleChange(e) {
        setClientForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    };

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch("https://project3-hair-salon-api.onrender.com/clients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(clientForm)
            });

            // getClients();

            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Client's Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="image">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image URL" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="123@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>PhoneNumber</Form.Label>
                <Form.Control placeholder="010-123-4567" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>


            <Button type="submit">
                Add a New Client
            </Button>
        </Form>
    );
}

export default NewClientsBootStrap;