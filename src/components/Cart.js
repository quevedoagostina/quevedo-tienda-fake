import React, { useState } from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems, removeFromCart, handlePurchase }) => {
  const [showNotification, setShowNotification] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePurchaseClick = () => {
    handlePurchase();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <CartContainer>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <CartItemImage src={item.image} alt={item.title} />
              <ItemInfo>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <RemoveButton onClick={() => removeFromCart(index)}>Eliminar</RemoveButton>
              </ItemInfo>
            </CartItem>
          ))}
          <TotalPrice>Total: ${total.toFixed(2)}</TotalPrice>
          <PurchaseButton onClick={handlePurchaseClick}>Comprar</PurchaseButton>
          {showNotification && <Notification>Compra realizada con éxito!</Notification>}
        </>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  margin-left: 10px;
  text-align: left;
`;

const RemoveButton = styled.button`
  background-color: #e91e63;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d81b60;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.5em;
  color: #e91e63;
`;

const PurchaseButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

const Notification = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
`;

export default Cart;
