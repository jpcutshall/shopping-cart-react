
import { CartItemType } from '../App'

import './CartItem.css'
type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <div className="CartItem">
            <h3>{item.title}</h3>
            <div className="info" >
                <p>Price: ${item.price} </p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>

            </div>
            <div className="buttons" >

                <button
                    className="remove-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </button>

                <p>{item.amount}</p>

                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(item)}
                >
                    +
                </button>

            </div>
            <img className="cart-img" src={item.image} alt={item.title} />
        </div>
    )
}
