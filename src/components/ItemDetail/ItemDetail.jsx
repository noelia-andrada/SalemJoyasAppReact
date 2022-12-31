import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InputCount } from "../InputCount/InputCount";

export const ItemDetail = ({product, loading, onAdd, isCant}) => {

    return(
        <div className="d-inline-block p-2 pt-5 pb-5">
            {loading
                ?
            <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>
                :
            <div key={product.id} className="d-flex flex-row" >

                <Card.Img variant="top" style={{ width: '16rem' }} src={product.img} />
                <Card style={{ width: '16rem' }} className="card border border-secondary">

                    <Card.Body>
                        <Card.Title>{product.nombre}</Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span className="card-text">${product.precio}</span>
                            <span className="card-text">{product.descripcion}</span>
                            <span className="card-text">Categoría: {product.categoria}</span>
                            <span className="card-text">Stock: {product.stock}</span>
                        </Card.Text>
                        
                        <Link to="/">
                          <Button variant="dark">Volver</Button>
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