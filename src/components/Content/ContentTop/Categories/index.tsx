import { FC, useState } from 'react';
import styled from 'styled-components';
import { categories } from '../../../../common/constans';

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
  background-color: ${(props) => (props.active ? '#000' : '#f9f9f9')};
  color: ${(props) => (props.active ? '#f9f9f9' : '#000')};
  padding: 13px 30px;
  border-radius: 30px;

  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  user-select: none;
`;

export const Categories: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <CategoriesStyled>
      <ul>
        {categories.map((category, index) => (
          <CustomLI
            active={activeCategory === index ? true : false}
            key={index}
            onClick={() => setActiveCategory(index)}>
            {category}
          </CustomLI>
        ))}
      </ul>
    </CategoriesStyled>
  );
};
