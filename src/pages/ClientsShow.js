import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function ClientsShow(){

    //create navigate instance
    const navigate = useNavigate();

    const [ client, setClient ] = useState(null)
    const [ editForm, setEditForm ] = useState(client)


    const { clientId } = useParams();


    // console.log(clientId);

    const URL = `https://project3-hair-salon-api.onrender.com/clients/${clientId}`

    
    async function removeClient(){
        try{
            const options = {
                method : "DELETE"
            }
            
            const response = await fetch(URL, options);
            const deletedClient = await response.json();
            console.log(deletedClient);
            navigate("/");
            
        }catch(err){
            console.log(err)
        }
    }
    // console.log(`Current Client is ${JSON.stringify(client)}`);
    
    async function updatedClient(e){
        e.preventDefault();
        try{
            const response = await fetch(URL, {
                method: "PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(editForm),
            })
            
            const updatedClient = await response.json();
            setClient(updatedClient)
            setEditForm(updatedClient)
            
        }catch(err){
            console.log(err)
        }
    }

    async function getClient(){
        try{
            const response = await fetch(URL)
            const foundClient = await response.json();
            setClient(foundClient);
            setEditForm(foundClient);

        }catch(err){
            console.log(err);
        };
    };

    function handleChange(e){
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        getClient()
    },[]);

    function loaded(){
        return (
            <div>
                <h1>Client's Detail</h1>
                <h2>{client.name}</h2>
                <img src={client.image} alt={client.name}/>
                <h2>{client.email}</h2>
                <h2>{client.phoneNumber}</h2>
                <h2>{client.hairStyle}</h2>
                <h2>{client.services}</h2>
                <div>
                    <button className="delete" onClick={removeClient}>
                        Remove Client
                    </button>
                </div>
                <section>
                    <h2>Edit this Person</h2>
                    <form onSubmit={updatedClient}>
                        <input 
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="name"
                        onChange={handleChange}    
                        />
                        <input 
                        type="text"
                        value={editForm.image}
                        name="image"
                        placeholder="image URL"
                        onChange={handleChange}    
                        />
                        <input 
                        type="text"
                        value={editForm.email}
                        name="email"
                        placeholder="email"
                        onChange={handleChange}    
                        />
                        <input 
                        type="text"
                        value={editForm.phoneNumber}
                        name="phoneNumber"
                        placeholder="phoneNumber"
                        onChange={handleChange}    
                        />
                        <input 
                        type="text"
                        value={editForm.hairStyle}
                        name="hairStyle"
                        placeholder="hairStyle"
                        onChange={handleChange}    
                        />
                        <input 
                        type="text"
                        value={editForm.services}
                        name="services"
                        placeholder="services"
                        onChange={handleChange}    
                        />
                        <input type="submit" value="Update" />
                    </form>
                </section>
            </div>
        )
    }

    function loading(){
        return (
            <h1>Loading...</h1>
        )
    }



    return(
        client ? loaded() : loading()
    )
}

export default ClientsShow;