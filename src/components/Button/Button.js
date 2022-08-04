import styled from 'styled-components';
import React from 'react';

const Button = ({
  children,
  className,
  type,
  disabled,
  onClick = () => {},
}) => {
  return (
    <Button.Container
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button.Container>
  );
};

Button.Container = styled.button`
  width: 87px;
  height: 26px;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #97e294;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
