import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function ItemCount({stock=50, initial=1, onAdd}) {
    const [count, setCount] = useState (initial)
    
    const sumar = () => {
        if(count < stock) {
            setCount (count + 1)
        }
    }
    
    const restar = () => {
        if(count > initial) {
            setCount (count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(count)
   
    }

    return (
        <section className="d-inline-block">
          <button onClick = {restar}>-</button>
          <span>{count}</span>
          <button onClick = {sumar}>+</button>
          <Button variant="dark" onClick={ handleOnAdd }>Agregar al carrito</Button>
        </section>
    )
}

export default ItemCount;