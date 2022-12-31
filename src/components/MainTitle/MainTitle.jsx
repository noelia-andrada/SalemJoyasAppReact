import { NavLink } from 'react-router-dom';
import './MainTitle.css'

function MainTitle () {
    return (
        <div>
            <NavLink to="/">
                <h1 className="mainTitle"> Salem Joyas</h1>
            </NavLink>
                
        </div>
    )
}

export default MainTitle;