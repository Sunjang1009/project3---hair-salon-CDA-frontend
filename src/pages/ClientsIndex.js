import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ClientsIndex(){
    const [clients, setClients] = useState(null);

    const URL = "https://project3-hair-salon-api.onrender.com"

    async function getClients(){
        try{
            let myClients = await fetch(URL + "/clients");
            myClients = await myClients.json();
            setClients(myClients);

        }catch(err){
            console.log(err)
        };
    };

    //evoke function when browser is loaded
    useEffect(()=>{
        getClients();
    },[]);

    //console.log 

    console.log(clients)

    function loaded(){
        return (
            <>
                {clients.map((client,idx)=>{
                    return (
                        <div key={idx}>
                            <Link to={`/clients/${client._id}`}>
                                <h2>name:{client.name}</h2>
                            </Link>
                            <h2>email:{client.email}</h2>
                        </div>
                    )
                })}
            
            </>
        )
    };

    function loading(){
        return(
            <h1>Loading...</h1>
        )
    }
    

    return(
        <>
            <h1>These are my clients!</h1>
            { clients? loaded():loading() }
        </>

    )
}

export default ClientsIndex;