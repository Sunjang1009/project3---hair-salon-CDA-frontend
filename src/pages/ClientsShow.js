import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ClientsShow(){

    const [ client, setClient ] = useState(null)
    const { clientId } = useParams();

    // console.log(clientId);

    const URL = `https://project3-hair-salon-api.onrender.com/clients/${clientId}`

    async function getClient(){
        try{
            const response = await fetch(URL)
            const myClient = await response.json();
            setClient(myClient);

        }catch(err){
            console.log(err);
        };
    };

    // console.log(`Current Client is ${JSON.stringify(client)}`);

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