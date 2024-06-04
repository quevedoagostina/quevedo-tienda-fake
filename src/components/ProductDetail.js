import React from 'react';
import styled from 'styled-components';

const ProductDetail = ({ product, addToCart }) => {
  return (
    <DetailContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductName>{product.title}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
      </ProductInfo>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: 20px;
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #e91e63;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const AddToCartButton = styled.button`
  background-color: #e91e63;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d81b60;
  }
`;

export default ProductDetail;
