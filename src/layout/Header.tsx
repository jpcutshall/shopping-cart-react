import './Header.css'

interface Props {
    handleOpenCart: () => void;
    handleCloseCart: () => void;
}

export const Header: React.FC<Props> = (props) => {
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
                    <button onClick={() => props.handleOpenCart()} >Cart</button>
                </li>
            </ul>
        </div>
    )
}
