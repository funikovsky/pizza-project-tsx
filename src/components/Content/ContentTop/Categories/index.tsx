import { FC } from 'react';
import styled from 'styled-components';
import { categories } from '../../../../common/constans';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { setActiveCategory } from '../../../../redux/slice/pizzaSlice';

const CategoriesStyled = styled.div`
  ul {
    display: flex;
  }
`;
const CustomLI = styled.li<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#000' : '#f9f9f9')};
  color: ${(props) => (props.active ? '#f9f9f9' : '#000')};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  user-select: none;
`;

interface CategoriesProps {
  activeCategory: number;
}

export const Categories: FC<CategoriesProps> = ({ activeCategory }) => {
  const dispatch = useAppDispatch();
  return (
    <CategoriesStyled>
      <ul>
        {categories.map((category, index) => (
          <CustomLI
            active={activeCategory === index ? true : false}
            key={index}
            onClick={() => dispatch(setActiveCategory(index))}>
            {category}
          </CustomLI>
        ))}
      </ul>
    </CategoriesStyled>
  );
};
