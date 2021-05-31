import './Header.css'

interface Props {
    
}

export const Header: React.FC = (props: Props) => {
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
                    <button>Cart</button>
                </li>
            </ul>
        </div>
    )
}
