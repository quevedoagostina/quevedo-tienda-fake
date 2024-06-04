import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CategoryList = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <CategoryContainer>
      {categories.map(category => (
        <animated.div key={category} style={animationProps}>
          <CategoryCard onClick={() => selectCategory(category)}>
            <CategoryName>{category}</CategoryName>
          </CategoryCard>
        </animated.div>
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
`;

const CategoryCard = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  background-color: #e91e63;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryName = styled.h3`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
`;

export default CategoryList;
