import styled from 'styled-components';
import { Categories } from './Categories';
import { Sort } from './Sort';
const ContentTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0;
  row-gap: 20px;
`;

export const ContentTop = () => {
  return (
    <>
      <ContentTopStyled>
        <Categories />
        <Sort />
      </ContentTopStyled>
    </>
  );
};
