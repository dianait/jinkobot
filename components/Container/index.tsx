import React from 'react';
import { ContainerStyled } from './style';

interface Props {
  children: any;
  width: string;
}

const Container: React.FC<Props> = ({ children, width }: Props) => {
  return <ContainerStyled style={{ width: width }}>{children}</ContainerStyled>;
};

export default Container;
