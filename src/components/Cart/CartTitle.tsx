import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowSvg } from '../../assets/svg/arrowSvg';
import { CartIconSvg } from '../../assets/svg/CartIconSvg';
import { useAppDispatch } from '../../redux/hooks/hook';
import { cartClear } from '../../redux/slice/cartSlice';
import { ButtonStyled } from '../ButtonStyled';

const CartTitleStyled = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  font-size: 49px;
  padding: 30px 0;
  border-bottom: 1px solid #f6f6f6;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 40px;
`;
const CartTitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;

  div {
    display: flex;
    align-items: center;
    font-size: 46px;
    font-weight: normal;
    & + span {
      cursor: pointer;
    }
  }
`;

export const CartTitle = () => {
  const dispatch = useAppDispatch();
  return (
    <CartTitleStyled>
      <ButtonStyled>
        <Link to="/">
          <ArrowSvg />
          <span> Назад к списку товаров</span>
        </Link>
      </ButtonStyled>

      <CartTitleBottom>
        <div>
          <CartIconSvg />
          <span>Корзина</span>
        </div>

        <span onClick={() => dispatch(cartClear())}>Очистить</span>
      </CartTitleBottom>
    </CartTitleStyled>
  );
};
