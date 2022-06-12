import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hook';

import { CartItem } from './CartItem';
import { CartTitle } from './CartTitle';

const CartStyled = styled.div`
  min-height: 500px;
  max-width: 900px;
  margin: 0 auto;

  font-size: 36px;
  padding: 40px 0;
`;

export const Cart = () => {
  const dataCart = useAppSelector((state) => state.cart.dataCart);
  return (
    <CartStyled>
      <CartTitle />
      {dataCart.map((cartObj, index) => (
        <CartItem key={index} cartObj={cartObj} />
      ))}
    </CartStyled>
  );
};
