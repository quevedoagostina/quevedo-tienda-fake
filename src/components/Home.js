import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CarouselStyles.css'; // Importa los estilos personalizados
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <HomeContainer>
      <animated.div style={animationProps}>
        <Subtitle>No te pierdas estas ofertas</Subtitle>
      </animated.div>
      <CarouselContainer>
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true} showStatus={false}>
          {products.map((product) => (
            <div key={product.id}>
              <CarouselImage src={product.image} alt={product.title} />
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  text-align: center;
`;

const CarouselContainer = styled.div`
  margin-top: 20px;
`;

const CarouselImage = styled.img`
  max-height: 400px;
  object-fit: contain;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #e91e63;
  margin-bottom: 20px;
`;

export default Home;
