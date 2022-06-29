import { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hook';
import { ButtonOrder } from '../ButtonOrder';

import { CartEmpty } from '../cartEmpty';
import { OrderForm } from '../OrderForm';
import { CartItem } from './CartItem';
import { CartTitle } from './CartTitle';

const CartContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;

  & > span {
    display: inline-block;
    font-size: 26px;
    opacity: 0.7;
    margin-bottom: 40px;
  }
  @media (max-width: 540px) {
  }
`;

const CartStyled = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Cart: FC = () => {
  const [orderVisible, setOrderVisible] = useState(false);
  const { dataCart, totalPizzas, totalPrice } = useAppSelector((state) => state.cart);

  if (!dataCart.length) {
    return <CartEmpty />;
  }

  const handleClickOrder = () => {
    setOrderVisible((prev) => !prev);
  };
  return (
    <CartContainer>
      <CartTitle />
      <CartStyled>
        {dataCart.map((cartObj, index) => (
          <CartItem key={index} cartObj={cartObj} />
        ))}
      </CartStyled>
      <span>
        Всего позиций: {totalPizzas}шт. на сумму {totalPrice}р
      </span>
      <ButtonOrder handleClickOrder={handleClickOrder} />

      <OrderForm orderVisible={orderVisible} handleClickOrder={handleClickOrder} />
    </CartContainer>
  );
};
