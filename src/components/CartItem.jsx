import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
