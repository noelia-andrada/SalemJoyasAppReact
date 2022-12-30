import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}

    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [loading, setLoading] = useState (true)


    const {id} = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        
        if (id) {
            const queryFiltrada =  query(queryCollection, where('categoria','==', id), where('isActive', '==', true))

            getDocs(queryFiltrada)
            .then(data => setProducts(data.docs.map(product=>({id:product.id,...product.data()}))))
            .catch(err => err)
            .finally(()=> setLoading(false))
        } else {
            getDocs(queryCollection)
            .then(data => setProducts(data.docs.map(product=>({id:product.id,...product.data()}))))
            .catch(err => err)
            .finally(()=> setLoading(false))   
        }      
    }, [id])
    console.log("productos:", products )
    return (
        <div className="divGeneral">
            <span style={greetingStyle}>{greeting}</span>
           <ItemList products={products} loading={loading}/>
        </div>
    )
}

export default ItemListContainer;