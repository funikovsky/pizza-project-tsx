import styled from 'styled-components';
import { FC } from 'react';

const PizzaBlockBottomStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .pizza-block__price {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
  }
  .button--add {
    display: inline-block;
    background-color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    border-color: #fe5f1e;
    user-select: none;
    color: #fe5f1e;
    &:hover {
      background-color: #fe5f1e;
      span {
        color: #fff;
      }
      i {
        background-color: #fff;
        color: #fe5f1e;
      }
    }
  }
  span {
    color: #fe5f1e;

    &:first-of-type {
      margin-right: 6px;
      font-weight: bold;
    }
  }

  i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }
`;

type BottomProps = { price: number };

export const PizzaBlockBottom: FC<BottomProps> = ({ price }) => {
  return (
    <>
      <PizzaBlockBottomStyled>
        <div className="pizza-block__price">{price} ₽</div>
        <div className="button--add">
          <span>+</span>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </PizzaBlockBottomStyled>
    </>
  );
};
