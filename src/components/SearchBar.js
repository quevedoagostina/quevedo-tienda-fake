import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Buscar productos..." onKeyPress={handleSearch} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export default SearchBar;
