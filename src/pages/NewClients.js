import { useState } from "react"

function NewClients(){

    const [clientForm, setClientForm] = useState([{
        name : "",
        image:"",
        email:"",
        phoneNumber:"",
        hairStyle:"",
        //later will be array with photos??
        services:""
    }]);

    function handleChange(e){
        setClientForm((prevForm)=>({
            ...prevForm,
            [e.target.name]:e.target.value
        }))
    };

    // async function getClients(){
    //     try{
    //         let myClients = await fetch(URL + "/clients");
    //         myClients = await myClients.json();
    //         setClients(myClients);

    //     }catch(err){
    //         console.log(err)
    //     };
    // };


    async function handleSubmit(e){
        try{
            e.preventDefault();
            await fetch("https://project3-hair-salon-api.onrender.com/clients", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(clientForm)
            });

            // getClients();

            e.target.reset();
        }catch(err){
            console.log(err);
        }
    }


    return(

        <>
            <h1>Add a New Client</h1>
            <div>

                <form onSubmit={handleSubmit}>
                    <label>
                        <h5>Name: </h5>
                        <input type="text" name="name" 
                        onChange={handleChange} placeholder="client's name" required /> 
                    </label>
                    <label>
                        <h5>Image URL: </h5>
                        <input type="text" name="image" 
                        onChange={handleChange} placeholder="client's picture" /> 
                    </label>
                    <label>
                        <h5>Email: </h5>
                        <input type="text" name="email" 
                        onChange={handleChange} placeholder="client's email" required /> 
                    </label>
                    <label>
                        <h5>Phone Number: </h5>
                        <input type="text" name="phoneNumber" 
                        onChange={handleChange} placeholder="client's Phone Number" required /> 
                    </label>
                    <label>
                        <h5>Hair Style: </h5>
                        <input type="text" name="hairStyle" 
                        onChange={handleChange} placeholder="client's hair style" /> 
                    </label>
                    <label>
                        <h5>Service: </h5>
                        <input type="text" name="services" 
                        onChange={handleChange} placeholder="client's hair services" /> 
                    </label>
                    <button>Add a Client!</button>

                </form>
            </div>
        </>
    )
}

export default NewClients;