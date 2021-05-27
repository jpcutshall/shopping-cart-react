
// types 
import { CartItemType } from '../App'

import './Item.css'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


export const Item: React.FC<Props> = ({ item, handleAddToCart}) => {

    return (
        <div className="Item">
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
    )

}



