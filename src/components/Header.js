import { Link } from "react-router-dom"

function Header(){
    return(
        <>
            <nav>
                <Link to ="/">HOME</Link>
                <Link to ="/clients">All Clients</Link>
                <Link to ="/new">Add a client</Link>
            </nav>
        </>
    )
}

export default Header;