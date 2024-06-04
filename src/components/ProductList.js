import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ProductList = ({ category, selectProduct, searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <ProductContainer>
      {filteredProducts.map(product => (
        <animated.div key={product.id} style={animationProps}>
          <ProductCard onClick={() => selectProduct(product)}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        </animated.div>
      ))}
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  width: 200px;
  margin: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductName = styled.h3`
  font-size: 1em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #e91e63;
`;

export default ProductList;
