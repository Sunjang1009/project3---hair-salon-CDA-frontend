// import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ClientsShow(){

    const { clientId } = useParams();


    return(
        <h1>Client's Detail</h1>
    )
}

export default ClientsShow;