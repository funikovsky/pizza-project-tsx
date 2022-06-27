import { FC } from 'react';

import styled from 'styled-components';
import { categories } from '../../../../common/constans';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { setActiveCategory } from '../../../../redux/slice/pizzaSlice';

const CategoriesStyled = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
    justify-content: center;
  }
`;
const CustomLI = styled.li<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#fe5f1e' : '#f9f9f9')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  padding: 13px 30px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: scale(1);
  user-select: none;
  box-shadow: 2px 2px 2px gray;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const Categories: FC = () => {
  const activeCategory = useAppSelector((state) => state.pizzas.activeCategory);
  const dispatch = useAppDispatch();

  return (
    <CategoriesStyled>
      <ul>
        {categories.map((category, index) => (
          <CustomLI
            active={activeCategory === index}
            key={index}
            onClick={() => dispatch(setActiveCategory(index))}>
            {category}
          </CustomLI>
        ))}
      </ul>
    </CategoriesStyled>
  );
};
