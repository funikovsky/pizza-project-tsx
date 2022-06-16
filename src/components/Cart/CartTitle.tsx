import styled from 'styled-components';
import { CartIconSvg } from '../../assets/svg/CartIconSvg';
import { useAppDispatch } from '../../redux/hooks/hook';
import { cartClear } from '../../redux/slice/cartSlice';

const CartTitleStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 49px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #f6f6f6;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
  & > span {
    align-items: flex-end;
    font-size: 24px;
    align-self: end;
    cursor: pointer;
  }
`;

export const CartTitle = () => {
  const dispatch = useAppDispatch();
  return (
    <CartTitleStyled>
      <div>
        <CartIconSvg />
        <span>Корзина</span>
      </div>

      <span onClick={() => dispatch(cartClear())}>Очистить</span>
    </CartTitleStyled>
  );
};
