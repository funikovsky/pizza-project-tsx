import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hook';
import { CartEmpty } from '../cartEmpty';
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
  const { dataCart, totalPizzas, totalPrice } = useAppSelector((state) => state.cart);

  if (!dataCart.length) {
    return <CartEmpty />;
  }
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
    </CartContainer>
  );
};
