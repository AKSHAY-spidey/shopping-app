import { useState } from 'react';
import { plants } from '../data/plants';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];
  
  // Filter plants by category
  const filteredPlants = activeCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === activeCategory);

  return (
    <div className="products-page">
      <h1>Our Plants</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="products-grid">
        {filteredPlants.map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Products;
