import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)


    const {id} = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        const filteredQuery =  id ? query(queryCollection, where("categoria","==", id)) : queryCollection
        
        getDocs(filteredQuery)
        .then(data => setProducts(data.docs.map(product=>({id:product.id,...product.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
     
    }, [id])
    
    return (
        <div className="divGeneral d-flex flex-column">
            <span className="d-inline-block p-5" style={greetingStyle}>{greeting}</span>
           <ItemList products={products} loading={loading}/>
        </div>
    )
}

export default ItemListContainer;