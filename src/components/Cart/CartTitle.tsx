import styled from 'styled-components';
import { CartIconSvg } from '../../assets/svg/CartIconSvg';

const CartTitleStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 49px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f6f6f6;
`;

export const CartTitle = () => {
  return (
    <CartTitleStyled>
      <CartIconSvg />
      <span>Корзина</span>
    </CartTitleStyled>
  );
};
