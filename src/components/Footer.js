import Navbar from "react-bootstrap/Navbar";
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

function Footer(){
    return(
        <>
            <Navbar className="footer-container" fixed="bottom">
                Connect with us{'\u00A0'}{'\u00A0'}
                <FaInstagram />{'\u00A0'}{'\u00A0'}
                <FaTwitter />{'\u00A0'}{'\u00A0'}
                <FaFacebook />{'\u00A0'}{'\u00A0'}
                <FaYoutube />
            </Navbar>
        </>
    )
}

export default Footer;