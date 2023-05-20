import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ClientsIndex() {
    const [clients, setClients] = useState(null);

    const URL = "https://project3-hair-salon-api.onrender.com"

    async function getClients() {
        try {
            let myClients = await fetch(URL + "/clients");
            myClients = await myClients.json();
            setClients(myClients);

        } catch (err) {
            console.log(err)
        };
    };

    //evoke function when browser is loaded
    useEffect(() => {
        getClients();
    }, []);

    //console.log 

    console.log(clients)

    function loaded() {
        return (
            <>
                {clients.map((client, idx) => {
                    return (
                        <div>
                            <div key={idx} className="container">
                                <div className="client-image">
                                    <img src={client.image} alt={client.name} />
                                </div>
                                <div className="content">
                                    <Link style={{ textDecoration: "none" }} to={`/clients/${client._id}`}>
                                        <h5>Name: {client.name}</h5>
                                    </Link>
                                    <h5>Email: {client.email}</h5>
                                    <h5>Phone Number: {client.phoneNumber}</h5>

                                </div>
                            </div>
                            <hr />
                        </div>

                    )
                })}

            </>
        )
    };

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }


    return (
        <>

            <div className="index-body">


                {clients ? loaded() : loading()}

            </div>

        </>

    )
}

export default ClientsIndex;