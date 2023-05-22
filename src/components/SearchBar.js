import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

function SearchBar() {

    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    const [clients, setClients] = useState([]);

    const [searchedClient, setSearchedClient] = useState([]);

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


    useEffect(() => {
        getClients();
    }, []);

    function handleInputChange(e) {
        setQuery(e.target.value);
    };

    function handleSearch(e) {
        e.preventDefault();
        const filteredClients = clients.filter((client) => {
            return client.name.toLowerCase().includes(query.toLowerCase());
        });
        setSearchedClient(filteredClients[0]);

        if (filteredClients.length > 0) {
            navigate(`/clients/${filteredClients[0]._id}`);
        } else {
            console.log("Cannot find the search");
        }
    }

        console.log(searchedClient);

        return (

            <>
                <Form onSubmit={handleSearch}>
                    <InputGroup className="search-form">
                        <Form.Control placeholder="Search by Name" onChange={handleInputChange} value={query}/>
                        <button><FiSearch /></button>
                    </InputGroup>
                </Form>

            </>
        )
    
}

export default SearchBar;

