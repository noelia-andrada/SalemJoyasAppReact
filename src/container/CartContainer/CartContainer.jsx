import { useCartContext } from "../../context/CartContext/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";
import CartListF from "../../components/CartListF/CartListF";

const CartContainer = () => {
    const {cartList, emptyCart, totalPrice, deleteOneItem} = useCartContext()

    const [dataForm, setFormData] =  useState({
        name: "", email: "", phone: ""
      })

    const addOrder = (e) => {
        e.preventDefault()

        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        
        order.items = cartList.map(({id, price, name}) => ({id, price, name}))
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
    
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
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
                    <h2>Carrito Vacio</h2>
                    <Link to= '/' > Volver </Link>
                </div>

            }

        </div>
    )
}

export default CartContainer