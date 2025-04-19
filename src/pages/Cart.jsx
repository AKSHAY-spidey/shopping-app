import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const { items, totalQuantity } = useSelector(state => state.cart);
  
  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: <span>{totalQuantity}</span></p>
            <p>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
          
          <div className="cart-items">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={() => alert('Checkout functionality coming soon!')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
