import styled from 'styled-components';
import { ErrorSvg } from '../../assets/svg/Error';
import { useAppSelector } from '../../redux/hooks/hook';
import { ContentItems } from './ContentItems';
import { ContentTitle } from './ContentTitle';
import { ContentTop } from './ContentTop';

const ContentStyled = styled.div``;

export const Content = () => {
  const visible = useAppSelector((state) => state.pizzas.loading);
  if (visible === 'error') return <ErrorSvg />;
  return (
    <ContentStyled>
      <ContentTop />
      <ContentTitle />
      <ContentItems />
    </ContentStyled>
  );
};
