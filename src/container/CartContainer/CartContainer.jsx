import { useCartContext } from "../../context/CartContext/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";
import CartListF from "../../components/CartListF/CartListF";
import Button from "react-bootstrap/esm/Button";

const CartContainer = () => {
    const {cartList, emptyCart, totalPrice, deleteOneItem} = useCartContext()

    const [dataForm, setFormData] =  useState({
        name: "", email: "", phone: "", confirmEmail: ""
      })

    const addOrder = (e) => {
        e.preventDefault()

        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        
        order.items = cartList.map(({id, precio, nombre}) => ({id, precio, nombre}))
        
        const db = getFirestore()
        const queryCollection = collection(db, "orders")

        addDoc(queryCollection, order)
        .then(resp => resp)
        .catch(err => console.log(err))
        .finally(() => emptyCart())
      }

      const handleOnChange = (e) => {
        setFormData({
          ...dataForm,
          [e.target.name]: e.target.value
        })
      }
    return (
        <div>
            {cartList.length !== 0

                    ? 

            <CartListF cartList={cartList} deleteOneItem={deleteOneItem} totalPrice={totalPrice}
            dataForm={dataForm} handleOnChange={handleOnChange} addOrder={addOrder} emptyCart={emptyCart}/>

                    :
                
                <div>
                    <h2 className="p-5 m-5">No hay productos en el carrito</h2>
                    <Link to= "/" > 
                      <Button variant="dark">Volver</Button>
                     </Link>
                </div>

            }

        </div>
    )
}

export default CartContainer