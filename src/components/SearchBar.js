import { useState, useEffect } from "react";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

function SearchBar(){

    const [ clients, setClients ] = useState([]);

    const [query, setQuery] = useState("");

    const [ searchedClient, setSearchedClient ] = useState(null);

    const URL = "https://project3-hair-salon-api.onrender.com"

    async function getClients(){
        try{
            const response = await fetch(URL + `/clients`);
            const myClients = await response.json();
            setClients(myClients);

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getClients();
    },[]);

    function handleInputChange(e){
        setQuery(e.target.value);
    };

    function handleSearch(e){
        e.preventDefault();
        const filteredClients = clients.filter((client)=>(
            client.name.toLowerCase().includes(query.toLowerCase())
        ))
        setSearchedClient(filteredClients);
    }

    return (

        <>
            <Form onSubmit={handleSearch}>
                    <InputGroup className="search-form">
                        <Form.Control placeholder="Search by Name" onChange={handleInputChange}/>
                        <button><FiSearch/></button>
                    </InputGroup>
            </Form>

            <div>
                {searchedClient ? (searchedClient.map((client)=>(
                    
                        <div key={client._id}>
                            {client.name}
                        </div>
                        
                    )
                )) : <div>Cannot find the client.</div>}
            </div>
            
        
        </>
    )
}
export default SearchBar;

