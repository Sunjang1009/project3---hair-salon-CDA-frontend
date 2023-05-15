import { useState, useEffect } from "react"

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

    
    

    return(
        <h1>These are my clients!</h1>

    )
}

export default ClientsIndex;