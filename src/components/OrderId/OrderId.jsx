import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"

const OrderId = ({orderId}) => {
   return (
    <>
        <h2 className="p-5 m-5">¡Muchas gracias por su compra! Su orden es: {orderId}</h2>
        <Link to= "/" > 
        <Button variant="dark">Volver</Button>
        </Link>
    </>
    )
}

export default OrderId