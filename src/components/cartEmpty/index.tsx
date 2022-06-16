import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartEmptySvg } from '../../assets/svg/CartEmptySVG';
import { ButtonStyled } from '../ButtonStyled';

const CartEmptyStyled = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 40px;
  }
`;

export const CartEmpty: FC = () => {
  return (
    <>
      <CartEmptyStyled>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>

        <CartEmptySvg />
        <ButtonStyled>
          <Link to="/">
            <span>Вернуться назад</span>
          </Link>
        </ButtonStyled>
      </CartEmptyStyled>
    </>
  );
};
