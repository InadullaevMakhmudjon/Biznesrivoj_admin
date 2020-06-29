
import React from 'react';

import { ButtonStyled } from './style';


const Button = ({ label, ...props }) => (
  <ButtonStyled {...props}>
    {label}
  </ButtonStyled>
);


export default Button;
