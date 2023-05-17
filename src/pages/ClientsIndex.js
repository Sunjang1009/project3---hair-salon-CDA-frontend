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
                        <div>
                            <div key={idx} className="container">
                                <div className="client-image">
                                    <img src={client.image} alt={client.name} />
                                </div>
                                <div className="content">
                                    <Link to={`/clients/${client._id}`}>
                                        <h2>Name: {client.name}</h2>
                                    </Link>
                                    <h2>Email: {client.email}</h2>
                                    <h2>Phone Number: {client.phoneNumber}</h2>

                                </div>
                            </div>
                            <hr/>
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
            <div>

                { clients? loaded():loading() }

            </div>
        </>

    )
}

export default ClientsIndex;