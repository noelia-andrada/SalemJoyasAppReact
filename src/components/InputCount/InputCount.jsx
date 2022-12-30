import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const InputCount = () => {
    return (
        <>
            <Link to="/cart">
                <Button variant="primary">Ver carrito de compras</Button>
            </Link>

            <Link to="/">
                <Button variant="primary">Seguir comprando</Button>
            </Link>
        </>
    )
}