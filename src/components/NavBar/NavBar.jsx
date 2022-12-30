import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar () {
    return (
        <div className="divMenu">

            
            <Navbar bg="light" expand="lg">
                <Container>
                    <div className="menu">
                        <NavLink className="menuItem" to="/categoria/aros">Aros</NavLink>
                        <NavLink className="menuItem" to="/categoria/collares">Collares</NavLink>
                        <NavLink className="menuItem" to="/categoria/anillos">Anillos</NavLink>
                        <NavLink className="menuItem" to="/categoria/dijes">Dijes</NavLink>
                    </div>
                    <CartWidget/>
                </Container>
             </Navbar>

        </div>
    )
}

export default NavBar;