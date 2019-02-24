import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-size: 12px;
`;

export const Button = ({type, classNames, text, onClick}) => {
  return (
    <ButtonWrapper type={type}
      className={classNames}
      onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};
