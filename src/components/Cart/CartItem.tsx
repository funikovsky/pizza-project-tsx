import { FC } from 'react';
import styled from 'styled-components';
import { DeleteSvg } from '../../assets/svg/DeleteSvg';
import { typeNames } from '../../common/constans';
import { useAppDispatch } from '../../redux/hooks/hook';
import {
  addItemToCart,
  deleteItemCart,
  deleteSelectedItem,
  getTotalPizzas,
  getTotalPrice,
  ItemCart,
  sumTotalPrice,
} from '../../redux/slice/cartSlice';
import { ButtonCart } from './ButtonCart';

const CartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
const ItemInfoStyled = styled.div`
  display: flex;

  font-size: 24px;
  align-items: center;
`;
const ItemChoiceStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const DivForImg = styled.div`
  display: flex;
  height: 80px;
  text-align: center;
  width: 80px;
  margin-right: 10px;
  img {
    font-size: 0;
  }
`;
const ItemPropertiesStyled = styled.div`
  text-align: start;
  span {
    font-size: 18px;
    color: gray;
  }
`;

const CartItemPrice = styled.div`
  align-self: center;
`;

interface CartItemProps {
  cartObj: ItemCart;
}

export const CartItem: FC<CartItemProps> = ({ cartObj }) => {
  const dispatch = useAppDispatch();
  const { imageUrl, title, count, itemPropertyId, size, price, id } = cartObj;
  const itemProperties = itemPropertyId.split('');
  const itemNameId = itemProperties[0];

  const hahdlerClickButtonCart = () => {
    dispatch(addItemToCart(cartObj));
    dispatch(sumTotalPrice(price));
  };

  const handleClickDeleteBtoon = () => {
    dispatch(deleteSelectedItem({ id, itemPropertyId, price }));
    dispatch(getTotalPrice());
    dispatch(getTotalPizzas());
  };

  return (
    <CartItemStyled>
      <ItemInfoStyled>
        <DivForImg>
          <img src={imageUrl} alt="item-img" />
        </DivForImg>
        <ItemPropertiesStyled>
          <h4>{title}</h4>

          <span>
            {typeNames[+itemNameId]}, {size}см
          </span>
        </ItemPropertiesStyled>
      </ItemInfoStyled>
      <ItemChoiceStyled>
        <ButtonCart onClick={() => hahdlerClickButtonCart()}>+</ButtonCart>
        <span>{count}</span>
        <ButtonCart onClick={() => dispatch(deleteItemCart({ id, itemPropertyId, price }))}>
          -
        </ButtonCart>
      </ItemChoiceStyled>
      <CartItemPrice>
        <span>{price * count}p</span>
      </CartItemPrice>

      <DeleteSvg handleClick={() => handleClickDeleteBtoon()} />
    </CartItemStyled>
  );
};
