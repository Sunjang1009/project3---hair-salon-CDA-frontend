import { Link } from "react-router-dom"

function Header(){
    return(
        <>
            <nav>
                <Link to ="/">HOME</Link>
                <Link to ="/clients">CLIENTS</Link>
                <Link to ="/new">NEW CLIENT</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </>
    )
}

export default Header;