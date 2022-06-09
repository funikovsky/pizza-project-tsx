import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled } from '../ButtonStyled';

const CartStyled = styled.div`
  min-height: 500px;
  text-align: center;
  font-size: 36px;
  padding: 40px;
`;

export const Cart = () => {
  return (
    <CartStyled>
      <ButtonStyled>
        <Link to="/">
          <span>На главную</span>
        </Link>
      </ButtonStyled>
      <div>Здесь будет корзина с выбранными товарами</div>
    </CartStyled>
  );
};
