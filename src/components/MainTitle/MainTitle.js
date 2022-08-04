import React from 'react';
import styled from 'styled-components';

const MainTitle = ({ children, className }) => {
  return (
    <MainTitle.Container className={className}>{children}</MainTitle.Container>
  );
};

MainTitle.Container = styled.h1`
  font-size: 20px;
  line-height: 36px;
  font-weight: 400;
  width: fit-content;

  @media screen and (min-width: 700px) {
    font-size: 30px;
  }
`;

export default MainTitle;
