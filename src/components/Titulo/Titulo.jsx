import { NavLink } from 'react-router-dom';
import './Titulo.css'

function TituloPrincipal () {
    return (
        <div>
            <NavLink to="/">
                <h1 className="tituloPrincipal"> Salem Joyas</h1>
            </NavLink>
                
        </div>
    )
}

export default TituloPrincipal;