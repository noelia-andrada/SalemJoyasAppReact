import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer () {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const [inputType, setInputType] = useState("agregarCarrito")

    const handleInter = () => {
        setInputType("input")
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
       <ItemDetail product={product} loading={loading} inputType={inputType} handleInter={handleInter}/>
    )
}

export default ItemDetailContainer;