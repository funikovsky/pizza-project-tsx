import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hook';
import { Categories } from './Categories';
import { Sort } from './Sort';
const ContentTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const ContentTop = () => {
  const activeCategory = useAppSelector((state) => state.pizzas.activeCategory);

  return (
    <>
      <ContentTopStyled>
        <Categories activeCategory={activeCategory} />
        <Sort />
      </ContentTopStyled>
    </>
  );
};
