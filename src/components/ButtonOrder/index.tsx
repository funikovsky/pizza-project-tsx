import { FC } from 'react';
import { ButtonOrderStyled } from './ButtonOrderStyled';

interface ButtonOrderProps {
  handleClickOrder: () => void;
}

export const ButtonOrder: FC<ButtonOrderProps> = ({ handleClickOrder }) => {
  return (
    <ButtonOrderStyled mb="30px" onClick={() => handleClickOrder()}>
      <span>Оформить заказ</span>
    </ButtonOrderStyled>
  );
};
