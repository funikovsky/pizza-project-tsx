import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartSvg } from '../../../assets/svg/CartSvg';
import { useAppSelector } from '../../../redux/hooks/hook';
import { ButtonStyled } from '../../ButtonStyled';

const ButtonDelimiliter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;

export const Button = () => {
  const { totalPizzas, totalPrice } = useAppSelector((state) => state.cart);
  return (
    <>
      <ButtonStyled>
        <Link to="/cart">
          <span>{totalPrice} ₽</span>
          <ButtonDelimiliter />
          <CartSvg />
          <span>{totalPizzas}</span>
        </Link>
      </ButtonStyled>
    </>
  );
};
