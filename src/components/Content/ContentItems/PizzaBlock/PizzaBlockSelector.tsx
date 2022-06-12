import styled from 'styled-components';
import { FC } from 'react';
import { typeNames } from '../../../../common/constans';

const PizzablockSelectorStyled = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
  .active {
    background-color: #fff;
  }
  ul {
    display: flex;
    &:first-of-type {
      margin-bottom: 6px;
    }
  }
  ul li {
    padding: 8px;
    flex: 1 1;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    user-select: none;

    &:hover {
      background: #ffffff;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);
      border-radius: 5px;
      cursor: auto;
      cursor: pointer;
    }
  }
`;

const CustomLi = styled.li<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#fff' : null)};
`;

interface ISelector {
  types: Array<number>;
  sizes: Array<number>;
  activeType: number;
  activeSize: number;
  setActiveType: (type: number) => void;
  setActiveSize: (size: number) => void;
}

export const PizzablockSelector: FC<ISelector> = ({
  types,
  sizes,
  setActiveType,
  activeType,
  setActiveSize,
  activeSize,
}) => {
  const handleClickAddButton = (type: number) => {
    setActiveType(type);
  };

  return (
    <>
      <PizzablockSelectorStyled>
        <ul>
          {types.map((type) => (
            <CustomLi
              active={activeType === type ? true : false}
              key={type}
              onClick={() => handleClickAddButton(type)}>
              {typeNames[type]}
            </CustomLi>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <CustomLi
              active={activeSize === index ? true : false}
              key={index}
              onClick={() => setActiveSize(index)}>
              {size} см
            </CustomLi>
          ))}
        </ul>
      </PizzablockSelectorStyled>
    </>
  );
};
