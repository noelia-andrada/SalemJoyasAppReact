import { useState } from "react";

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
          <button className="btn btn-outline-success btn-block" onClick={ handleOnAdd }>Agregar al carrito</button>
        </section>
    )
}

export default ItemCount;