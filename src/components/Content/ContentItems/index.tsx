import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hook';
import { Sceleton } from '../../Sceleton';

import { PizzaBlock } from './PizzaBlock';

const ContentItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
  row-gap: 65px;
  column-gap: 30px;
`;

export const ContentItems = () => {
  const pizzaItems = useAppSelector((state) => state.pizzas.data);
  const visible = useAppSelector((state) => state.pizzas.loading);

  return (
    <ContentItemsStyled>
      {visible === 'loading' && <Sceleton />}

      {pizzaItems.map((pizzaItem) => (
        <PizzaBlock key={pizzaItem.id} pizzaItem={pizzaItem} />
      ))}
    </ContentItemsStyled>
  );
};
