import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useCartContext } from "../../context/CartContext/CartContext";

function ItemDetailContainer () {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const [isCant, setIsCant ] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cant) => {
        addToCart({...product, cant})
        setIsCant(true)
    }

    const {productId} = useParams()

    useEffect(()=>{        
        const db = getFirestore()
        const queryDoc = doc(db, 'productos',  productId)
        getDoc(queryDoc)
        .then(resp => setProduct( { id: resp.id,...resp.data()} ))
        .catch(err => err)
        .finally(()=> setLoading(false))
    }, [])     


    return (
       <ItemDetail product={product} loading={loading} isCant={isCant} onAdd={onAdd}/>
    )
}

export default ItemDetailContainer;