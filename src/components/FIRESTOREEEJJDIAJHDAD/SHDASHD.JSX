import {doc, getDocs, getFirestore, limit, orderBy, query, where} from "firebase/firestore"
import { useEffect, useState } from "react"

export const ItemDetail = () => {
    const [dbProduct, setDbProd] = useState({})

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = doc(db,"productos")

        const queryFiltrada = query(queryCollection, where("categoria", "==", id, limit(6), orderBy("categoria", "asc")))

        getDocs(queryFiltrada)
        .then(resp => setDbProd(resp.docs.map(producto => ({id: producto.id, ...producto.resp()}) )))
        .catch(err => err)
        .finally(()=>setLoading(false))

    }, [id])

    console.log(dbProduct)
}

//Para ItemDetailContainer:

useEffect(()=> {
    const db = getFirestore()
    const queryDoc = doc(db,"productos", productId)

    getDoc(queryDoc)
    .then(resp => setDbProd({productId: resp.productId, ...resp.data()}))
    .catch(err => err)
    .finally(()=>setLoading(false))

}, [productId])