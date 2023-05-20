import { useState } from "react"
import { Link } from "react-router-dom"
import Home from "../pages/Home";
import ClientsIndex from "../pages/ClientsIndex";
import NewClients from "../pages/NewClients";
//import react-bootstrap

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from "react-bootstrap/Navbar";
import NewClientsBootStrap from "../pages/NewClients";


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Navbar>
            <span className="nav-button" onClick={handleShow}>
            MENU
            </span>

        </Navbar>
    

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Link to="/" element={<Home />}>Home</Link>
                <Link to="/clients" element={<ClientsIndex />}>Clients</Link>
                <Link to="/new" element={<NewClients />}>New</Link>
                <Link to="/newb" element={<NewClientsBootStrap />}>NewClientsBootStrap</Link>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

export default Header;
