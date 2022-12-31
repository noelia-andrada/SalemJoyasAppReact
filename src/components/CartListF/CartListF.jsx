import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormUser from '../FormUser/FormUser';

const CartListF = ({dataForm, cartList, handleOnChange, addOrder, deleteOneItem, totalPrice, emptyCart}) => {
    return (
        <div>
        {cartList.map(prod =>

            <div key={prod.id}>
                <Card style={{width: '16rem'}} className="card border border-secondary">
                    <Card.Img variant="top" src={prod.img} />

                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span className="card-text">${prod.precio}</span>
                            <span className="card-text">Categoría: {prod.categoria}</span>
                            <span className="card-text">Cantidad: {prod.cant}</span>
                        </Card.Text>
                    </Card.Body>

                    <Button variant="primary" onClick={() => deleteOneItem(prod.id)}>Eliminar Item</Button>
                </Card>
            </div>
        )}

        <h2>El precio total es: ${totalPrice()}</h2>

        <FormUser dataForm={dataForm} handleOnChange={handleOnChange} addOrder={addOrder}/>

        <Button variant="primary" onClick={emptyCart}>Vaciar carrito</Button>
    </div>
    )
}

export default CartListF