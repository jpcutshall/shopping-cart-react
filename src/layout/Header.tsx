import { CartItemType } from '../App'
import './Header.css'

interface Props {
    handleOpenCart: () => void;
    handleCloseCart: () => void;
    getTotalItems: (cartItems: CartItemType[]) => number;
    cartItems: CartItemType[];
    handleAboutOpen: () => void;
}

export const Header: React.FC<Props> = ({ handleOpenCart, handleCloseCart, getTotalItems, cartItems, handleAboutOpen }) => {
    return (
        <div className="header">
            <ul className="nav">
                <li>
                    <button onClick={() => handleAboutOpen()} >Home</button>
                </li>
                <li>
                    <button onClick={() => handleAboutOpen()} >About</button>
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
