import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p className="product-price">${plant.price.toFixed(2)}</p>
        <p className="product-description">{plant.description}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
