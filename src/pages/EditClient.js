import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
            <h2>Edit this Person</h2>
            <form onSubmit={updatedClient}>
                <input
                type="text"
                value={client.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                />
                <input
                type="text"
                value={client.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
                />
                <input
                type="text"
                value={client.email}
                name="email"
                placeholder="email"
                onChange={handleChange}
                />
                <input
                type="text"
                value={client.phoneNumber}
                name="phoneNumber"
                placeholder="phoneNumber"
                onChange={handleChange}
                />
                <input
                type="text"
                value={client.hairStyle}
                name="hairStyle"
                placeholder="hairStyle"
                onChange={handleChange}
                />
                <input
                type="text"
                value={client.services}
                name="services"
                placeholder="services"
                onChange={handleChange}
                />
                <input type="submit" value="Update" />
            </form>
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
