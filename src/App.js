import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Purchases from './components/Purchases';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePurchase = () => {
    setPurchases([...purchases, ...cart]);
    setCart([]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Header>
            <h1>Quevedo Tienda Virtual</h1>
            <Nav>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/shop">Tienda</NavLink>
              <NavLink to="/purchases">Mis Compras</NavLink>
              <NavLink to="/cart">Carrito ({cart.length})</NavLink>
            </Nav>
          </Header>
          <MainContent>
            <SearchBar onSearch={handleSearch} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/shop"
                element={
                  <>
                    <CategoryList selectCategory={handleSelectCategory} />
                    {selectedCategory && !selectedProduct && (
                      <ProductList
                        category={selectedCategory}
                        selectProduct={handleSelectProduct}
                        searchTerm={searchTerm}
                      />
                    )}
                    {selectedProduct && (
                      <ProductDetail product={selectedProduct} addToCart={handleAddToCart} />
                    )}
                  </>
                }
              />
              <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={handleRemoveFromCart} handlePurchase={handlePurchase} />} />
              <Route path="/purchases" element={<Purchases purchases={purchases} />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #e91e63;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4081;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
