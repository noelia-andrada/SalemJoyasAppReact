import { Item } from "../Item/Item";

function ItemList ({products, loading}) {
    return (
        <section className="card border border-secondary d-inline-block">

            {loading
                ?
            <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>
                :   
            products.map(product => 
                <Item key={product.id} product={product}/>
            )
            }

        </section>
    )
}

export default ItemList;