import styled from 'styled-components';
import { FC } from 'react';

import { Ipizza } from '../../../../redux/slice/pizzaSlice';

import { PizzaBlockBottom } from './PizzaBlockBottom';
import { PizzablockSelector } from './PizzaBlockSelector';

const PizzaBlockStyled = styled.div`
  width: 280px;
  text-align: center;
  img {
    width: 100%;
  }
`;

interface IPizzaBlock {
  pizzaItem: Ipizza;
}

export const PizzaBlock: FC<IPizzaBlock> = ({ pizzaItem }) => {
  const { imageUrl, title, types, sizes, price } = pizzaItem;

  return (
    <PizzaBlockStyled>
      <img src={imageUrl} alt="Pizza" />
      <h4>{title}</h4>
      <PizzablockSelector types={types} sizes={sizes} />
      <PizzaBlockBottom price={price} />
    </PizzaBlockStyled>
  );
};
