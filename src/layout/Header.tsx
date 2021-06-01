import { CartItemType } from '../App'
import './Header.css'

interface Props {
    handleOpenCart: () => void;
    handleCloseCart: () => void;
    getTotalItems: (cartItems: CartItemType[]) => number;
    cartItems: CartItemType[];
}

export const Header: React.FC<Props> = ({ handleOpenCart, handleCloseCart, getTotalItems, cartItems }) => {
    return (
        <div className="header">
            <ul className="nav">
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>About</button>
                </li>
                <li>
                    <button>login</button>
                </li>
                <li>
                    <button 
                        onClick={() => handleOpenCart()} 
                    >
                        Cart {getTotalItems(cartItems) > 0 
                            ? 
                            <p>({getTotalItems(cartItems)})</p>
                            : null} 

                    </button>
                </li>
            </ul>
        </div>
    )
}
