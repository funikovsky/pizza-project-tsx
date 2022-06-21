import { FC } from 'react';
import { useAppSelector } from '../../../../redux/hooks/hook';

import { Ipizza } from '../../../../common/types';
import { PizzaBlockBottomStyled } from './PizzaaBlockBottomStyled';

type BottomProps = { pizzaItem: Ipizza };

export const PizzaBlockBottom: FC<BottomProps> = ({ pizzaItem }) => {
  const { price, id } = pizzaItem;

  const filteredClick = useAppSelector((state) =>
    state.cart.dataCart.filter((item) => item.id === id),
  );

  const count = filteredClick.reduce((accum, obj) => {
    accum = accum + obj.count;
    return accum;
  }, 0);

  return (
    <>
      <PizzaBlockBottomStyled>
        <span> {price} ₽</span>
        <button type="submit">
          <span>+</span>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </button>
      </PizzaBlockBottomStyled>
    </>
  );
};
