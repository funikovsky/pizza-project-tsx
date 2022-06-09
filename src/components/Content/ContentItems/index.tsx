import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hook';

import { PizzaBlock } from './PizzaBlock';

const ContentItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0;
  row-gap: 65px;
`;

export const ContentItems = () => {
  const pizzaItems = useAppSelector((state) => state.pizzas.data);
  return (
    <ContentItemsStyled>
      {pizzaItems.map((pizzaItem) => (
        <PizzaBlock key={pizzaItem.id} pizzaItem={pizzaItem} />
      ))}
    </ContentItemsStyled>
  );
};
