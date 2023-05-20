import { useState } from "react"
import { Link } from "react-router-dom"
import Home from "../pages/Home";
import ClientsIndex from "../pages/ClientsIndex";
import NewClients from "../pages/NewClients";
import About from "../pages/About";
//import react-bootstrap

import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from "react-bootstrap/Navbar";
import { HiMenu } from "react-icons/hi";


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar>
                <span className="nav-button" onClick={handleShow}>
                    <HiMenu />
                </span>

            </Navbar>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >

                    <div className="offcanvas-body">

                        <Link style={{textDecoration:"none"}} to="/" element={<Home />}>
                            HOME</Link>

                        <Link style={{textDecoration:"none"}} to="/clients" element={<ClientsIndex />}>
                            CLIENTS</Link>

                        <Link style={{textDecoration:"none"}} to="/new" element={<NewClients />}>
                            NEW</Link>

                        <Link style={{textDecoration:"none"}} to="/about" element={<About />}>
                            ABOUT</Link>

                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;
