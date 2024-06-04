import React from 'react';
import styled from 'styled-components';

const Purchases = ({ purchases }) => {
  return (
    <PurchasesContainer>
      <h2>Mis Compras</h2>
      {purchases.length === 0 ? (
        <p>No has realizado ninguna compra</p>
      ) : (
        purchases.map((item, index) => (
          <PurchaseItem key={index}>
            <PurchaseItemImage src={item.image} alt={item.title} />
            <ItemInfo>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </ItemInfo>
          </PurchaseItem>
        ))
      )}
    </PurchasesContainer>
  );
};

const PurchasesContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
`;

const PurchaseItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const PurchaseItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  margin-left: 10px;
  text-align: left;
`;

export default Purchases;
