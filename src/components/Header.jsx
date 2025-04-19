import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GreenThumb</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              <span className="material-icons">shopping_cart</span>
              <span className="cart-count">{totalQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
