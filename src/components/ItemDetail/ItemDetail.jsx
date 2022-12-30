import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InputCount } from "../InputCount/InputCount";

export const ItemDetail = ({product, loading, onAdd, isCant}) => {

    return(
        <div>
            {loading
                ?
            <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>
                :
            <div key={product.id}>

                <Card style={{ width: '16rem' }} className="card border border-secondary">
                    <Card.Img variant="top" src={product.img} />

                    <Card.Body>
                        <Card.Title>{product.nombre}</Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span className="card-text">${product.precio}</span>
                            <span className="card-text">{product.descripcion}</span>
                            <span className="card-text">Categoría: {product.categoria}</span>
                            <span className="card-text">Stock: {product.stock}</span>
                        </Card.Text>

                        <Link to="/">
                          <Button variant="primary">Volver</Button>
                        </Link>
                    </Card.Body>

                    {isCant
                        ?
                    <InputCount/>
                        :
                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                    }

                </Card>



            </div>}

        </div>
    )
}