import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
