import { CartItem } from '../CartItem/CartItem'

import { CartItemType } from '../App'

import './Cart.css'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {

    const calculateTotal = (items: CartItemType[]) => {
       const total = items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

       return total
    }

    return (
        <div className="Cart">

            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? <p>No items in cart.</p> : null}

            {cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}  
                
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    )
}


