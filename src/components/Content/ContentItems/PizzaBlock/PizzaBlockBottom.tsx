import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { sumTotalPrice } from '../../../../redux/slice/cartSlice';

import { Ipizza } from '../../../../redux/slice/pizzaSlice';
import { PizzaBlockBottomStyled } from './PizzaaBlockBottomStyled';

type BottomProps = { pizzaItem: Ipizza; addSelectedItem: () => void };

export const PizzaBlockBottom: FC<BottomProps> = ({ pizzaItem, addSelectedItem }) => {
  const { price, id } = pizzaItem;
  const dispatch = useAppDispatch();

  const filteredClick = useAppSelector((state) =>
    state.cart.dataCart.filter((item) => item.id === id),
  );

  const count = filteredClick.reduce((accum, obj) => {
    accum = accum + obj.count;
    return accum;
  }, 0);

  const handlerClickButton = () => {
    addSelectedItem();
    dispatch(sumTotalPrice(price));
    console.log(count);
  };

  return (
    <>
      <PizzaBlockBottomStyled>
        <span> {price} ₽</span>
        <button onClick={() => handlerClickButton()}>
          <span>+</span>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </button>
      </PizzaBlockBottomStyled>
    </>
  );
};
