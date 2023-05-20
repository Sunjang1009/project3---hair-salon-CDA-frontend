import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewClients() {

    const navigate = useNavigate();


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
        console.log(e.target)
        setClientForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    };

    console.log(clientForm)

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

            navigate(`/clients`);


            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }


    return (
      
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>*Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Client's Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="image" type="text" placeholder="Image URL" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>*Email</Form.Label>
                <Form.Control name="email" type="text" placeholder="123@gmail.com" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>*Phone Number</Form.Label>
                <Form.Control name="phoneNumber" type="text" placeholder="010-123-4567" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="hairStyle">
                <Form.Label>Hair Style
                </Form.Label>
                <Form.Control name="hairStyle" type="text" placeholder="current client's hair style" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="service">
                <Form.Label>Services that he/she needs
                </Form.Label>
                <Form.Control name="service" type="text" placeholder="what services do you want?" onChange={handleChange} />
            </Form.Group>


            <Button type="submit">
                Add a New Client
            </Button>
        </Form>
       
    );
}

export default NewClients;