import styled from 'styled-components';
import { FC, useEffect } from 'react';
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
    column-gap: 4px;
    &:first-of-type {
      margin-bottom: 6px;
    }
  }
  ul li {
    flex: 1 1;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    user-select: none;

    &:hover {
      background: #ffffff;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);
      border-radius: 7px;

      cursor: pointer;
    }
  }
`;

const CustomLi = styled.li`
  width: 100%;
  display: grid;
  column-gap: 4px;
  input {
    display: none;
  }
  label {
    padding: 8px;
    border: transparent;
    border-radius: 7px;

    cursor: pointer;
  }
  input:checked + label {
    background: #fff;
  }
`;

interface ISelector {
  types: Array<number>;
  sizes: Array<number>;
  id: number;
  activeType: number;
  activeSize: number;
  setActiveType: (type: number) => void;
  setActiveSize: (size: number) => void;
}

export const PizzablockSelector: FC<ISelector> = (props) => {
  const { types, sizes, setActiveType, activeType, setActiveSize, activeSize, id } = props;

  useEffect(() => {
    if (types.length === 1) {
      setActiveType(types[0]);
    }
  }, [types, setActiveType]);

  return (
    <>
      <PizzablockSelectorStyled>
        <ul>
          {types.map((type) => (
            <CustomLi key={type}>
              <input
                id={typeNames[type] + id}
                type="radio"
                name="type"
                value={activeType}
                checked={activeType === type}
                onChange={() => setActiveType(type)}
              />
              <label htmlFor={typeNames[type] + id}>{typeNames[type]}</label>
            </CustomLi>
          ))}
        </ul>

        <ul>
          {sizes.map((size, index) => (
            <CustomLi key={index}>
              <input
                id={size.toString() + id}
                type="radio"
                name="size"
                value={activeSize}
                checked={activeSize === index}
                onChange={() => setActiveSize(index)}
              />
              <label htmlFor={size.toString() + id}>{size} см</label>
            </CustomLi>
          ))}
        </ul>
      </PizzablockSelectorStyled>
    </>
  );
};
