import styled from 'styled-components';
import { ContentItems } from './ContentItems';
import { ContentTitle } from './ContentTitle';
import { ContentTop } from './ContentTop';

const ContentStyled = styled.div``;

export const Content = () => {
  return (
    <ContentStyled>
      <ContentTop />
      <ContentTitle />
      <ContentItems />
    </ContentStyled>
  );
};
